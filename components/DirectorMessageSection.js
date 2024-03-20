"use client"
import BlueBirdAnimation from "./small_components.js/BlueBirdAnimation"
import { Tilt } from "react-tilt"
import sirDirector1 from '../public/sirDirector1.png'
import sirDirector2 from '../public/sirDirector2.jpg'
import { useEffect, useState } from "react"


const DirectorMessageSection = () => {

    const [matches, setMatches] = useState()

      useEffect(() => {
        // to check screen sizes and render sir's image accordingly
        setMatches(window.matchMedia("(min-width: 800px)").matches)

        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

  return (
    <section style={{}} className="ftco-section ftco-about img">
   <Tilt 
   options={{
        max: 15,
        scale: 1,
        speed: 1
    }}
     className="container pt-4" style={{background: "linear-gradient(315deg, #f06543 0%, #ffbe3d 74%)", borderRadius: "30px", boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)", backdropFilter: "blur(1rem)"}}>

      <div className="row d-flex">
         <div className="col-md-12 about-intro">
            <div className="row">
               <div className="col-md-6 d-flex align-items-center mb-4">
                    <div className="d-flex about-wrap">
                    <Tilt
                        options ={{
                                max: 45,
                                scale: 1,
                                speed: 450
                                
                        }}
                        className="img d-flex align-items-center justify-content-center" 

                        style={{backgroundImage: matches ? `url(${sirDirector2.src})` : `url(${sirDirector1.src})`
                        , backgroundSize: "cover", borderRadius: "30px", boxShadow: "rgb(0, 0, 0) 0px 4px 6px"
                        }}
                    >
                    
                    </Tilt>

                     <Tilt 
                        options ={{
                            max: 45,
                            scale: 1,
                            speed: 450
                            
                    }}
                     className="img-2 d-flex align-items-center justify-content-center" 
                     style={{
                        backgroundImage: matches ? `url(${sirDirector1.src})` : `url(${sirDirector2.src})`,
                        backgroundSize: "cover",backgroundPositionY: "top", borderRadius: "30px", boxShadow: "rgb(0, 0, 0) 0px 4px 6px"
                    }}>

                     </Tilt>
                 </div>
                 
             </div>
             <div className="col-md-6 pl-md-5 ">
              <div className="row justify-content-start pb-3">
                  <div className="col-md-12 heading-section">
                     <h2 className="mb-4 text-light fw-bold" style={{textShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem"}}>DIRECTOR&apos;S MESSAGE</h2>
                     
                     <p className="text-dark">
                     <BlueBirdAnimation />
                        If you really want to do something you will find a way, If you don&apos;t, you will find an &ldquo;Excuse&ldquo;. <br /><br />
                        <BlueBirdAnimation />
                        &ldquo; Keeping its core values as strength, Takalkar JEE NEET Academy, IIT &amp; Medical adheres to the best practices to mentor and train the students to help them achieve their goals.&ldquo; <br/> <br />
                        <BlueBirdAnimation />
                        We encourage the vibrant and energetic students to develop their confidence and love for learning for a bright future in this competitive era. The success of Takalkar JEE NEET Academy based on the success of students. We infuse in them the attitude that does not let them settle before mounting the heights of success and deriving the best not only academically but also socially. 
                    
                    </p>
                     {/* <p><a href="#" className="btn btn-primary">Get in touch with us</a></p> */}
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>
</Tilt>
</section>
  )
}

export default DirectorMessageSection