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
import ModalBackdrop from "../../components/bootstrapComponents/ModalBackdrop";
// import ResultSection from "../../components/resultComponents/resultSection";

export default function Home() {
  return (
    <>
      {/* <ModalBackdrop /> */}
      <HeroSection />
      <Query />
      <RevealSection> <CoursesSection /> </RevealSection>
      <RevealSection> <TeacherSection /> </RevealSection>
      <RevealSection> <DirectorMessageSection/> </RevealSection>
      <RevealSection> <AboutSection /> </RevealSection>
      <StudentTestimony />
      {/* <MouseMotion /> */}
      <Footer /> 
      {/* <ResultSection /> */}
    </>
  );
}
