import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjali Sinha — Frontend Developer",
  description:
    "Portfolio of Anjali Sinha — frontend developer & CSE-AIML student. Building beautiful, functional, user-friendly web experiences.",
  openGraph: {
    title: "Anjali Sinha — Frontend Developer",
    description:
      "Portfolio of Anjali Sinha — frontend developer & CSE-AIML student.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
