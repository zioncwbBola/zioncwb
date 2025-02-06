// // src/components/ExperienceSection.tsx
// import Section from "./Section";

// const ExperienceSection = () => (
//   <Section id="experience" title="Experience">
//     <div className="mb-5">
//       <h3 className="text-2xl font-semibold">Senior Web Developer</h3>
//       <p className="text-[var(--text-color)]">Intelitec Solutions | March 2013 - Present</p>
//       <p className="mt-2">Bring to the table win-win survival strategies to ensure proactive domination...</p>
//     </div>
//   </Section>
// );

// export default ExperienceSection;
// src/components/ExperienceSection.tsx
import Section from "./Section";

const ExperienceSection = () => (
  <Section id="experience" title="Experience">
    <div className="space-y-6">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold">Senior Web Developer</h3>
        <p className="text-[var(--text-color)]">Intelitec Solutions | March 2013 - Present</p>
        <p className="mt-2">Bring to the table win-win survival strategies to ensure proactive domination...</p>
      </div>
    </div>
  </Section>
);

export default ExperienceSection;