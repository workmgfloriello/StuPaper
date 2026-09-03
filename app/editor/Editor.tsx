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
import TopBar from "./components/TopBar";

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
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-p:my-0 prose-h1:my-0 prose-h2:my-0 prose-h3:my-0 max-w-none min-h-[300px] px-4 py-3 focus:outline-none ",
      },
    },
  });

  return (
    <div className="flex w-full flex-col overflow-hidden h-screen bg-gray-200">
      <div className="mt-2 flex justify-center items-center align-middle">
        <TopBar editor={editor} />
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
