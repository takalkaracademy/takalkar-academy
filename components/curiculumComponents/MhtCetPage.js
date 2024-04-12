"use client"
// import CetBoyAnimation from "../small_components.js/CetBoyAnimation"
import curiculumDetails from "./constants"

const MhtCetPage = () => {
  return (
    <div className='container row d-flex flex-row align-items-center justify-content-center'>
        <div className='col-lg-6 col-md-8 col-sm-10 d-flex justify-content-center align-items-center '>
        <div>
        <img src='/coep-pune.webp' 
            style={{borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px"}} 
            className="w-100"
        />
        <h2 className='row-lg-6 d-flex justify-content-center text-secondary fs-6 mt-2'>College Of Engineering Pune Technological University</h2>
        </div>
            {/* <iframe width="75%" height="75%" style={{borderRadius: "25px"}}   src="https://www.youtube.com/embed/dLqYtMU4j5Y?si=mw0UVY7jT5tHasmN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>

        
        <div className='col-lg-4 col-md-4 col-sm-10 '>
        <h1 
            className='font-weight-bold d-flex justify-content-start align-items-center display-3 m-0 p-0'
            style={{color: "#5D3FD3"}}
            >
                {curiculumDetails[2].course.toUpperCase()} 
        </h1>
            <h2 
                className='fw-bold text-start mb-3'
                style={{color: "black", fontSize: "0.9rem"}}
            >
                {curiculumDetails[2].fullForm.toUpperCase()}
            </h2>

            <h3 
                className='fs-5 text-wrap text-black text-start'
                style={{fontStyle: "italic"}}
            >
                {curiculumDetails[2].description}
            </h3>
        </div>
        
    </div>
  )
}

export default MhtCetPage