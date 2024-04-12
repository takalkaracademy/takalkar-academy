"use client"
import curiculumDetails from "../../../components/curiculumComponents/constants";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BoardsPage from "../../../components/curiculumComponents/BoardsPage";
export default function Home() {
 return(
    <div style={{background: curiculumDetails[3].background}}>
        <Navbar active={"curiculum"}/>
        <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <BoardsPage />
        </div>
        <Footer />
    </div>
 )
}