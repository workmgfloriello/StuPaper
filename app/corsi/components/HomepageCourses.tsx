"use client";

import { Course } from "@/app/interface/interface";
import { useState } from "react";

const initialCourses: Course[] = [];

export default function HomepageCourses() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    professor: "",
    cfu: "",
    semester: "1° semestre",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCourse: Course = {
      id: formData.name.toLowerCase().replace(/\s+/g, "-"),
      name: formData.name,
      code: formData.code,
      professor: formData.professor,
      cfu: Number(formData.cfu),
      semester: formData.semester,
      notesCount: 0,
      description: formData.description,
      color: "bg-violet-100 text-violet-700",
      recent: true,
    };

    setCourses((prev) => [...prev, newCourse]);

    setFormData({
      name: "",
      code: "",
      professor: "",
      cfu: "",
      semester: "1° semestre",
      description: "",
    });

    setShowForm(false);
  };

  return (
    <div className="min-h-full bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            I miei corsi
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Gestisci i tuoi corsi universitari
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          {showForm ? "Chiudi" : "+ Nuovo corso"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            Crea nuovo corso
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Nome */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Nome corso
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Es. Analisi Matematica II"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            {/* Codice */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Codice
              </label>

              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="Es. AN2"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 uppercase outline-none focus:border-indigo-500"
              />
            </div>

            {/* Professore */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Professore
              </label>

              <input
                type="text"
                name="professor"
                value={formData.professor}
                onChange={handleChange}
                placeholder="Es. Mario Rossi"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            {/* CFU */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                CFU
              </label>

              <input
                type="number"
                name="cfu"
                value={formData.cfu}
                onChange={handleChange}
                placeholder="Es. 9"
                min="1"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>

            {/* Semestre */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Semestre
              </label>

              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-indigo-500"
              >
                <option value="1° semestre">1° semestre</option>
                <option value="2° semestre">2° semestre</option>
              </select>
            </div>

            {/* Descrizione */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Descrizione
              </label>

              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descrizione del corso"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
            >
              Crea corso
            </button>
          </div>
        </form>
      )}

      {/* Lista corsi */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            {/* Badge */}
            <div className="mb-5 flex items-center justify-between">
              <span
                className={`rounded-lg px-3 py-1 text-xs font-semibold ${course.color}`}
              >
                {course.code}
              </span>

              {course.recent && (
                <span className="text-xs font-medium text-green-600">
                  Recente
                </span>
              )}
            </div>

            {/* Titolo */}
            <h2 className="text-xl font-bold text-gray-900">
              {course.name}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {course.description}
            </p>

            {/* Info */}
            <div className="mt-5 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Professore</span>
                <span className="font-medium text-gray-900">
                  {course.professor}
                </span>
              </div>

              <div className="flex justify-between">
                <span>CFU</span>
                <span className="font-medium text-gray-900">
                  {course.cfu}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Semestre</span>
                <span className="font-medium text-gray-900">
                  {course.semester}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Appunti</span>
                <span className="font-medium text-gray-900">
                  {course.notesCount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nessun corso */}
      {courses.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Nessun corso
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Crea il tuo primo corso per iniziare.
          </p>
        </div>
      )}
    </div>
  );
}

