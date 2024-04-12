"use client"
import curiculumDetails from "../../../components/curiculumComponents/constants";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import NeetPage from "../../../components/curiculumComponents/NeetPage";
import NeetMarks from "../../../components/curiculumComponents/NeetMarks";
export default function Home() {
 return(
    <div style={{background: curiculumDetails[1].background}}>
        <Navbar active={"curiculum"}/>
        <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <NeetPage />
        </div>
        <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <NeetMarks />
            </div>
        <Footer />
    </div>
 )
}