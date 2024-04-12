"use client"
import {motion} from 'framer-motion'
import BlackBirdAnimation from './small_components.js/BlackBirdAnimation'
import jeeStudent from '../public/jeeStudent.JPG'
import neetStudent from '../public/neetStudent.jpeg'
import cetStudent from '../public/cetStudent.jpeg'
import boardsStudent from '../public/boardsStudent.png'

const CoursesSection = () => {

  return (
    
    <section className="ftco-section">
    {/* <div style={{position: "absolute"}}>
        <BlackBirdAnimation />    
    </div> */}
   <div className="container">
      <div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center">
          	<span className="subheading">Start Learning Today</span>
            <h2 className="mb-4">Courses That We Offer</h2>
        </div>
    </div>
    <div className="row justify-content-center">


    <motion.div 
    className="col-md-3 col-lg-2"
    initial={{ opacity: 0, scale: 0.5 }}
    whileHover={{ scale: 1.3 ,}}
    whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          // delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
     >
      
        <a href="/curiculum/jee" className="course-category img " style={{backgroundImage: `url(${jeeStudent.src})`, backgroundSize: "contain",}}>
           
      </a>
      <div className="fs-1 w-100 text-center ">
              <h3 className='fw-normal'>JEE</h3>
        </div>
  </motion.div>


  <motion.div 
     className="col-md-3 col-lg-2"
     initial={{ opacity: 0, scale: 0.5 }}
     whileHover={{ scale: 1.3 }}
     whileInView={{ opacity: 1, scale: 1}}
        transition={{
          duration: 5,
          // delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
     >
    <a href="/curiculum/neet" className="course-category img" style={{backgroundImage: `url(${neetStudent.src})`, backgroundSize: "cover", }}></a>
    <div className="fs-1 w-100 text-center ">
              <h3 className='fw-normal'>NEET</h3>
        </div>
  </motion.div>


<motion.div 
     className="col-md-3 col-lg-2"
     initial={{ opacity: 0, scale: 0.5 }}
     whileHover={{ scale: 1.3 }}
     whileInView={{ opacity: 1, scale: 1}}
        transition={{
          duration: 5,
          // delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
     >
    <a href="/curiculum/mht-cet" className="course-category img " style={{backgroundImage: `url(${cetStudent.src})`, backgroundSize: "cover",}}></a>
    <div className="fs-1 w-100 text-center ">
              <h3 className='fw-normal'>MHT-CET</h3>
        </div>
</motion.div>

<motion.div 
     className="col-md-3 col-lg-2"
     initial={{ opacity: 0, scale: 0.5 }}
     whileHover={{ scale: 1.3 }}
     whileInView={{ opacity: 1, scale: 1}}
        transition={{
          duration: 5,
          // delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
     >
    <a href="/curiculum/11-12" className="course-category img " style={{backgroundImage: `url(${boardsStudent.src})`, backgroundSize: "contain"}}></a>
    <div className="fs-1 w-100 text-center ">
              <h3 className='fw-normal fs-5'>11<sup>th</sup>-12<sup>th</sup> Boards</h3>
        </div>
</motion.div>



<div className="col-md-12 text-center mt-5">
    {/* <a href="#" className="btn btn-secondary">See All Courses</a> */}
</div>
</div>
</div>
</section>
  )
}

export default CoursesSection