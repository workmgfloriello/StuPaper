import { Course } from "../interface/interface";

export const courses: Course[] = [
  {
    id: "analisi-1",
    name: "Analisi Matematica I",
    code: "AN1",
    professor: "Giuseppe Rossi",
    cfu: 9,
    semester: "1° semestre",
    notesCount: 12,
    description:
      "Limiti, derivate, integrali e studio delle funzioni.",
    color: "bg-indigo-100 text-indigo-700",
    recent: true,
  },

  {
    id: "fisica",
    name: "Fisica Generale",
    code: "FIS",
    professor: "Marco Bianchi",
    cfu: 9,
    semester: "1° semestre",
    notesCount: 8,
    description:
      "Meccanica, dinamica, energia, lavoro e termodinamica.",
    color: "bg-sky-100 text-sky-700",
    recent: true,
  },

  {
    id: "informatica",
    name: "Informatica",
    code: "INF",
    professor: "Luca Esposito",
    cfu: 6,
    semester: "2° semestre",
    notesCount: 15,
    description:
      "Algoritmi, strutture dati e fondamenti di programmazione.",
    color: "bg-emerald-100 text-emerald-700",
    recent: true,
  },
];