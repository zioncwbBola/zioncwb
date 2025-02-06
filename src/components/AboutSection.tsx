// src/components/AboutSection.tsx
import Section from "./Section";

const AboutSection = () => (
  <Section id="about" title="About">
    <h1 className="text-5xl font-bold">Clarence <span className="text-[var(--text-color)]">Taylor</span></h1>
    <p className="text-lg mt-4">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 · <a href="mailto:name@email.com" className="underline">name@email.com</a></p>
    <p className="mt-4">I am experienced in leveraging agile frameworks to provide a robust synopsis for high-level overviews...</p>
  </Section>
);

export default AboutSection;