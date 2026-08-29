import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CoursesProvider } from "./lib/context/CoursesContex";
import { NotesProvider } from "./lib/context/NotesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Appunti App",
  description: "Editor appunti universitari",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${jakarta.className} min-h-full flex flex-col`}>
        <CoursesProvider>
          <NotesProvider>{children}</NotesProvider>
        </CoursesProvider>
      </body>
    </html>
  );
}
