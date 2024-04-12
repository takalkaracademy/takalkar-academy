"use client"
import JeePage from "../../../../components/curiculumComponents/JeePage";
import NeetPage from "../../../../components/curiculumComponents/NeetPage";
import MhtCetPage from "../../../../components/curiculumComponents/MhtCetPage";
import BoardsPage from "../../../../components/curiculumComponents/BoardsPage";
import curiculumDetails from "../../../../components/curiculumComponents/constants";
import NeetMarks from "../../../../components/curiculumComponents/NeetMarks";
import CetMarks from "../../../../components/curiculumComponents/CetMarks";
import Footer from "../../../../components/Footer";
import { Nav } from "react-bootstrap";
import Navbar from "../../../../components/Navbar";
export default function page({ params }) {
    // console.log(params);
  return (
    <>
    <div 
        style={{
            background: params.id == "jee" ? curiculumDetails[0].background
            : params.id == "neet"? curiculumDetails[1].background 
            : params.id == "mht-cet"? curiculumDetails[2].background 
            : curiculumDetails[3].background,

            minHeight: "100vh",
        }}
    >
        <Navbar active={"curiculum"}/>
        <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            {params.id == "jee" && <JeePage/>}
            {params.id == "neet" && <NeetPage/>}
            {params.id == "mht-cet" && <MhtCetPage/>}
            {params.id == "11-12" && <BoardsPage/>}
        </div> 
    </div>
    {params.id === "neet" || params.id == "mht-cet" ?
        <div className="container d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            {params.id == "neet" && <NeetMarks/>}
            {params.id == "mht-cet" && <CetMarks/>}
        </div>
        :
        null
    }
    <Footer />
    </>
  );
}
