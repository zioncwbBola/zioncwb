// src/components/AwardsSection.tsx
import Section from "./Section";
import { FaTrophy } from "react-icons/fa";

const AwardsSection = () => (
  <Section id="awards" title="Awards & Certifications">
    <ul className="list-disc ml-5">
      {['Google Analytics Certified Developer', 'Mobile Web Specialist - Google Certification'].map((award, index) => (
        <li key={index} className="flex items-center space-x-2">
          <FaTrophy className="text-[var(--text-color)]" />
          <span>{award}</span>
        </li>
      ))}
    </ul>
  </Section>
);

export default AwardsSection;