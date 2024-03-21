"use client"
import CoursesSection from "../../components/CoursesSection";
import DirectorMessageSection from "../../components/DirectorMessageSection";
import HeroSection from "../../components/HeroSection";
import { MouseMotion } from "../../components/MouseMotion";
import Query from "../../components/Query";
import Footer from "../../components/Footer";
import AboutSection from "../../components/AboutSection";
import TeacherSection from "../../components/TeacherSection";
import RevealSection from "../../components/motionComponents/RevealSection";
import StudentTestimony from "../../components/StudentTestimony";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Query />
      <RevealSection> <CoursesSection /> </RevealSection>
      <RevealSection> <TeacherSection /> </RevealSection>
      <RevealSection> <DirectorMessageSection/> </RevealSection>
      <RevealSection> <AboutSection /> </RevealSection>
      <StudentTestimony />
      {/* <MouseMotion /> */}
      <Footer /> 
    </>
  );
}
