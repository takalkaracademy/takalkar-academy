"use client"
import curiculumDetails from './constants'
import KidReadingAnimation from '../small_components.js/kidReadingAnimation'
const JeePage = () => {
  return (
    <div className='container row'>
        <div className='col-lg-6 col-md-12 col-sm-10 d-flex justify-content-center align-items-center mb-5'>
        {/* <KidReadingAnimation /> */}
        <div>
            <img src='/jee-madras.jpeg' style={{borderTopLeftRadius: "25px", borderBottomLeftRadius: "25px"}} />
            <h2 className='row-lg-6 d-flex justify-content-center text-secondary fs-6 mt-2'>Indian Institute of Technology Madras</h2>
        </div>
            {/* <iframe width="75%" height="75%" style={{borderRadius: "25px"}}   src="https://www.youtube.com/embed/dLqYtMU4j5Y?si=mw0UVY7jT5tHasmN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>

        
        <div className='col-12 col-lg-6 col-md-12 col-sm-10' style={{border: "2px double white", borderTopRightRadius: "25px", borderBottomRightRadius: "25px"}}>
        <h1 
            className='font-weight-bold d-flex justify-content-start align-items-center display-1 mb-0'
            style={{color: "orange"}}
            >
                {curiculumDetails[0].course.toUpperCase()} 
        </h1>
            <h2 
                className='d-flex justify-content-start fs-6 mb-2'
                style={{color: "#5ca0f2"}}
            >
                {curiculumDetails[0].fullForm.toUpperCase()}
            </h2>

            <h3 
                className='fs-5 text-wrap text-start text-black'
                style={{fontStyle: "italic"}}
            >
                {curiculumDetails[0].description}
            </h3>
        </div>
        
    </div>
  )
}

export default JeePage