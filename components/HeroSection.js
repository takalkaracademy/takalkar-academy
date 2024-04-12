"use client"
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import TypingText from './motionComponents/TypingText'
import SocialBar from './small_components.js/SocialBar'
import Navbar from './Navbar'

const HeroSection = () => {

    const [matches, setMatches] = useState()

      useEffect(() => {
        // to check screen sizes and render sir's image accordingly
        if ( typeof window !== undefined ) {
        setMatches(window.matchMedia("(min-width: 1300px)").matches)
        window
        .matchMedia("(min-width: 900px)")
        .addEventListener('change', e => setMatches( e.matches ));
        }
      }, []);


  return (
    <div style={{background: "linear-gradient(252deg, rgb(34, 193, 195) 31%, rgb(172, 223, 233) 63%)", height: matches ?  "100vh" : "100vh"}}>
      <Navbar active="home"/>
    <div className="container">
      <div className="row no-gutters slider-text js-fullheight align-items-start pt-5" data-scrollax-parent="true" style={{height: matches ? "100vh" : "110vh", paddingTop: "1rem"}}>
      <motion.div 
      className="col-lg-6 mt-5"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      style={{display: "flex", justifyContent: "center", alignItems: "center"}}
      >

        {/* background circle */}
        <div style={{ 
            position: "absolute",
            background: "linear-gradient(315deg, rgb(240, 101, 67) 0%, rgb(255, 190, 61) 74%)",
            borderRadius: "50%",
            minWidth: matches ? `290px` : `280px`,
            minHeight: matches ? `280px` : `260px`,
            zIndex: "0",
            borderBottom: "15px solid #1a1f44", 
            marginTop: matches ? "4rem" : ""
            }}
            className='me-2'
            >
    
            </div>

        {matches ?

            <img src="./sirHero.png" className='mt-4' style={{maxWidth: "500px", position: "relative", zIndex: "1"}}/>
         :
            <img src="./sirHeroStanding.png" className='me-2 ' style={{maxWidth: "250px", position: "relative", zIndex: "1", marginTop: "-5rem"}} />
        }
       

       

        {/* <h1 className="mb-4 fw-bold" style={{fontSize: "40px"}}><TypingText text= "Creating Genius For The Nation"/></h1> */}
        {/* <p className="text-dark fw-medium"><TypingText text= "JEE | NEET | MHT-CET | 11th &amp; 12th Board"/></p> */}


            {/* arc div */}
        {/* <div style={{ position: "absolute", top: "24.3rem",
            left: "16.5rem",
            transform: "translate(-50%, -50%)",
            minWidth: "305px",
            minHeight: "200px",
            zIndex: "3",
            borderBottom: "20px solid white",
            borderRadius: "70%",
            }}>

        </div> */}

            {/* content div */}
        <div style={{ position: "absolute", 
            left: matches ? "50%" : "45%",
            transform: matches ? "translate(-50%, 110%)" : "translate(-50%, 90%)",
            minWidth:  matches ? "30rem" : "25rem",
            maxWidth: matches ? "25rem": "35rem",
            zIndex: "3",
            }}
            >

             <h1 className="ms-5 mt-5 fw-bolder fs-3" ><TypingText text= "Creating Genius For The Nation"/></h1>
             <p className="ms-5 me-4 text-dark fw-medium"><TypingText text= "JEE | NEET | MHT-CET | 11th &amp; 12th Board"/></p>
             <SocialBar />

        </div>

        {/* <!-- <p className="mb-0"><a href="#" className="btn btn-primary">Our Course</a> <a href="#" className="btn btn-white">Learn More</a></p> --> */}
    </motion.div>
      </div>
      
    </div>
  </div>
  )
}

export default HeroSection