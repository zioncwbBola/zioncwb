// src/components/Section.tsx
import { FC, ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

const Section: FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="min-h-screen p-8">
    <h2 className="text-4xl font-bold text-[var(--text-color)] mb-4">{title}</h2>
    {children}
    <hr className="border-[var(--text-color)] mt-8" />
  </section>
);

export default Section;