// src/components/EducationSection.tsx
import Section from "./Section";

const EducationSection = () => (
  <Section id="education" title="Education">
    <div className="mb-5">
      <h3 className="text-2xl font-semibold">University of Colorado Boulder</h3>
      <p className="text-[var(--text-color)]">Bachelor of Science | August 2006 - May 2010</p>
      <p>Computer Science - Web Development Track</p>
    </div>
  </Section>
);

export default EducationSection;