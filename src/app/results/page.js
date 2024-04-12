"use client"
import Footer from "../../../components/Footer"
import CetSection from "../../../components/resultComponents/CetSection"
import ResultSection from "../../../components/resultComponents/ResultSection"
import Navbar from "../../../components/Navbar"
export default function Page() {
    return (
      <>
        <Navbar active="results"/>
        <ResultSection />
        <CetSection />
        <Footer />
      </>
    )
  }