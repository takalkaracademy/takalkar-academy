"use client"
import curiculumDetails from "../../../components/curiculumComponents/constants";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import MhtCetPage from "../../../components/curiculumComponents/MhtCetPage";
import CetMarks from "../../../components/curiculumComponents/CetMarks";
export default function Home() {
 return(
    <div style={{background: curiculumDetails[2].background}}>
        <Navbar active={"curiculum"}/>
        <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <MhtCetPage />
        </div>
        <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <CetMarks />
        </div>
        <Footer />
    </div>
 )
}