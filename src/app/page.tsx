// src/app/page.tsx
'use client';
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import InterestsSection from "@/components/InterestsSection";
import AwardsSection from "@/components/AwardsSection";

export default function HomePage() {
  return (
    <>
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <InterestsSection />
      <AwardsSection />
    </>
  );
}