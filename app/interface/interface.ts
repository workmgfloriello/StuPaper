export interface Course {
  id: string;
  name: string;
  code: string;
  professor: string;
  cfu: number;
  semester: string;
  notesCount: number;
  description: string;
  color: string;
  recent: boolean;
}

export type Note = {
  id: string;
  name: string;
  course: string;
  data: Date;
}