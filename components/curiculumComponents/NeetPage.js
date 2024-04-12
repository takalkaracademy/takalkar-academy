"use client"
import GirlStudyingAnimation from "../small_components.js/GirlStudyingAnimation"
import curiculumDetails from "./constants"

const NeetPage = () => {
  return (
    <>
    <div className='container row d-flex flex-row align-items-center'>
        <div className='col-lg-6 col-md-12 col-sm-10 row-md-12 d-flex justify-content-center align-items-center mb-5'>
        <div>
            <img src='/neet-aiims.avif' className="h-75 w-100" style={{borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px"}} />
            <h2 className='row-lg-6 d-flex justify-content-center text-secondary fs-6 mt-2'>College Of Engineering Pune Technological University</h2>
        </div>
            {/* <iframe width="75%" height="75%" style={{borderRadius: "25px"}}   src="https://www.youtube.com/embed/dLqYtMU4j5Y?si=mw0UVY7jT5tHasmN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>

        
        <div className='col-lg-6 col-md-12 col-sm-10 flex mb-5'>
        <h1 
            className='font-weight-bold d-flex justify-content-start align-items-center display-1 mb-0'
            style={{color: "grey"}}
            >
                {curiculumDetails[1].course.toUpperCase()} 
        </h1>
            <h2 
                className='d-flex fs-6 text-start'
                style={{color: "darkorange"}}
            >
                {curiculumDetails[1].fullForm.toUpperCase()}
            </h2>

            <h3 
                className='fs-6 text-wrap text-black'
                style={{fontStyle: "italic"}}
            >
                {curiculumDetails[1].description}
            </h3>
        </div>
        
    </div>
    </>
  )
}

export default NeetPage