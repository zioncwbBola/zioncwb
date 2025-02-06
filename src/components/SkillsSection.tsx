// src/components/SkillsSection.tsx
import Section from "./Section";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";

const SkillsSection = () => (
  <Section id="skills" title="Skills">
    <h4 className="text-xl font-semibold mb-4">Programming Languages & Tools</h4>
    <div className="flex space-x-4 text-3xl">
      {[FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs].map((Icon, index) => (
        <Icon key={index} className="text-[var(--text-color)]" />
      ))}
    </div>
  </Section>
);

export default SkillsSection;