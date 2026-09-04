"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { createLowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import java from "highlight.js/lib/languages/java";
import cpp from "highlight.js/lib/languages/cpp";

import TopBar from "./components/TopBar";
import SaveBar from "./components/SaveBar";
import CustomShortCut from "./extension/CustomShortcut";

const lowlight = createLowlight({
  javascript,
  typescript,
  html,
  css,
  java,
  cpp,
});

import "highlight.js/styles/atom-one-dark.css";
import CustomBlockquote from "./extension/CustomBlockquote";

interface EditorProps {
  /** Contenuto iniziale (HTML) */
  content?: string;
  /** Callback invocata ad ogni modifica, restituisce l'HTML aggiornato */
  onChange?: (html: string) => void;
  /** Testo placeholder quando l'editor è vuoto */
  placeholder?: string;
  /** Disabilita la modifica */
  editable?: boolean;
}

export default function Editor({
  content = "",
  onChange,
  placeholder = "Inizia a scrivere...",
  editable = true,
}: EditorProps) {
  const editor = useEditor({
    editable,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        link: false,
        underline: false,
        codeBlock: false,
        horizontalRule: false,
        blockquote: false,
      }),
      Underline,
      TextStyle,
      Color,
      FontFamily,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-indigo-600 underline underline-offset-2 cursor-pointer",
        },
      }),
      Placeholder.configure({ placeholder }),
      CodeBlockLowlight.configure({
        lowlight,
        enableTabIndentation: true,
        tabSize: 2,
      }),
      HorizontalRule,
      TaskList,
      TaskItem.configure({
        nested: false,
      }),
      //CUSTOM EXTENDS
      CustomBlockquote,
      CustomShortCut,
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "max-w-none min-h-[300px] px-4 py-3 focus:outline-none ",
      },
    },
  });

  return (
    <div className="flex w-full flex-col overflow-hidden h-screen bg-gray-200">
      <div className="mt-2 flex justify-center items-center align-middle gap-5">
        <TopBar editor={editor} />
        <SaveBar />
      </div>
      <div className="mt-5 flex-1 overflow-y-auto bg-white border border-gray-200 rounded-t-lg w-3/4 mx-auto">
        <EditorContent editor={editor} />
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-3 py-1 text-xs text-gray-500">
        <span>
          {editor
            ? `${editor.storage.characterCount?.characters?.() ?? editor.getText().length} caratteri`
            : ""}
        </span>
        <span>Editor di testo</span>
      </div>
    </div>
  );
}
