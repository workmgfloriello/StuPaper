import { Save } from "lucide-react";

export default function SaveBar() {
  return (
    <button className="inline-flex h-10 items-center gap-2 rounded-md bg-indigo-600 px-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-40">
      <Save size={16} />
      Salva
    </button>
  );
}
