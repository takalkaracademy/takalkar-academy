"use client"
import BoardsTeacherAnimation from '../small_components.js/BoardsTeacherAnimation'
import curiculumDetails from './constants'
import { useState } from 'react'

const BoardsPage = () => {
    const [readMore, setReadMore] = useState(false);

  return (
    <div className='row'>
        
        <div className='col-10 col-lg-6 col-md-12 col-sm-10 mt-5 pt-5 pe-0 me-0'>
        <h1 
            className='font-weight-bold flex d-flex justify-content-end align-items-center display-5 mt-5'
            style={{color: "coral"}}
            >
                {curiculumDetails[3].course.toUpperCase()} 
        </h1>
            {/* <h2 
                className='d-flex justify-content-center fs-4 fw-bold text-center'
                style={{color: "coral"}}
            >
                {curiculumDetails[3].fullForm.toUpperCase()}
            </h2> */}

        <h3
          className="fs-6 text-wrap text-black text-end"
          style={{ fontStyle: "italic" }}
        >
        {!readMore 
        ? 
            <>
            {curiculumDetails[3].description.substring(0, 400)}...
            <a href="#" className="read-more" onClick={() => setReadMore(!readMore)}>
              Read more
            </a>
            </>
            : 
            <>
            {curiculumDetails[3].description.substring(0, curiculumDetails[3].description.length - 1)}
            </>
        }
          

        </h3>
        </div>

        <div className='col-lg-6 col-md-12 col-sm-10 row-md-12 d-flex justify-content-center align-items-center mb-5'>
        <BoardsTeacherAnimation />
            {/* <iframe width="75%" height="75%" style={{borderRadius: "25px"}}   src="https://www.youtube.com/embed/dLqYtMU4j5Y?si=mw0UVY7jT5tHasmN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>
        
    </div>
  )
}

export default BoardsPage