import { Note } from "@/app/interface/interface";
import { courses } from "@/app/lib/data";
import { Circle, NotebookPen } from "lucide-react";

const lastNotes: Note[] = [
  // Analisi Matematica I
  {
    id: "appunti0",
    name: "Le derivate",
    course: "analisi-1",
    data: new Date(2026, 5, 15),
  },
  {
    id: "appunti1",
    name: "Limiti e continuità",
    course: "analisi-1",
    data: new Date(2026, 5, 12),
  },
  {
    id: "appunti2",
    name: "Studio di funzione",
    course: "analisi-1",
    data: new Date(2026, 5, 10),
  },

  // Fisica Generale
  {
    id: "appunti3",
    name: "Cinematica",
    course: "fisica",
    data: new Date(2026, 5, 14),
  },
  {
    id: "appunti4",
    name: "Dinamica e leggi di Newton",
    course: "fisica",
    data: new Date(2026, 5, 11),
  },
  {
    id: "appunti5",
    name: "Lavoro ed energia",
    course: "fisica",
    data: new Date(2026, 5, 8),
  },

  // Informatica
  {
    id: "appunti6",
    name: "Strutture dati",
    course: "informatica",
    data: new Date(2026, 5, 13),
  },
  {
    id: "appunti7",
    name: "Algoritmi di ordinamento",
    course: "informatica",
    data: new Date(2026, 5, 9),
  },
  {
    id: "appunti8",
    name: "Programmazione ad oggetti",
    course: "informatica",
    data: new Date(2026, 5, 5),
  },
];

export default function LastNotes() {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="flex shrink-0 items-center gap-2 px-8 py-5">
        <NotebookPen className="h-5 w-5 text-indigo-600" />

        <h2 className="font-semibold text-gray-900">Ultimi appunti</h2>
      </div>

      {/* Lista scrollabile */}
      <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto divide-y divide-gray-100">
        {lastNotes.map((note) => {
          const findColor = courses.find((course) => note.course == course.id);
          let color = "";

          if (findColor?.color) {
            color = findColor.color;
          } else {
            color = "bg-indigo-50 text-indigo-600";
          }

          return (
            <div
              key={note.id}
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${color}`}
              >
                <Circle />
              </div>

              <p className="min-w-0 flex-1 truncate text-sm font-medium text-gray-900">
                {note.name}
              </p>

              <span
                className={`hidden rounded-md sm:block px-2 py-1 text-xs font-medium ${color}`}
              >
                {note.course}
              </span>

              <p className="w-24 text-right text-xs text-gray-400">
                {note.data.toLocaleDateString("it-IT")}
              </p>
            </div>
          );
        })}
        <button className="text-sm w-full text-center py-5 font-medium text-indigo-600 transition hover:text-indigo-800">
          Mostra tutti
        </button>
      </div>
    </div>
  );
}
