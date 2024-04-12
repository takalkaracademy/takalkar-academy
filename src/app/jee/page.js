"use client"
import curiculumDetails from "../../../components/curiculumComponents/constants";
import JeePage from "../../../components/curiculumComponents/JeePage";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
export default function Home() {
 return(
    <div style={{background: curiculumDetails[0].background}}>
        <Navbar active={"curiculum"}/>
        <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <JeePage />
        </div>
        <Footer />
    </div>
 )
}