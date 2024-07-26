"use client"
import Image from 'react-bootstrap/Image';
import varadkongari from '../../public/varadkongari.png'
import vidhishaBhakat from '../../public/vidhishaBhakat2.jpeg'
import heethBhandari from '../../public/heethBhandari.png'
import srushtiBakare from '../../public/srushtiBakare.png'
import BadgeAnimation from "../small_components.js/BadgeAnimation"
import PartyPopperAnimation from '../small_components.js/PartyPopperAnimation';

const ResultSection = () => {
  // set timeout fuction to hide party poppers after 10 seconds
  setTimeout(() => {
    Array.from(document.getElementsByClassName("popper")).forEach((div) => {
      div.style.display = "none";
    });
  }, 6200);


  return (
    <>
    
   

    <div class="site-section pt-5 text-white" id="teachers-section" style={{background: "linear-gradient(252deg, rgb(34, 193, 195) 31%, rgb(172, 223, 233) 63%)", minHeight: "100vh", overflowY: "auto"}}>

    <div className='popper' style={{ position: "fixed", width: "70%", height: "100vh", right: "25%", opacity: "0.8" }}>
      <PartyPopperAnimation />
    </div>

    <div className='popper'  style={{position: "fixed", width: "70%", height: "100vh", left: "25%", opacity: "0.8" }}>
      <PartyPopperAnimation />  
    </div>

    
      <div class="container mt-3">
        <div class="row mb-3 justify-content-center ">
          <div
            class="col-lg-7 mb-3 text-center"
            data-aos="fade-up"
            data-aos-delay=""
          >

            <div className='container d-flex justify-content-center' style={{maxWidth: "9rem"}}>
                <BadgeAnimation />
            </div>

            <h2 class="fs-1 fw-bolder" style={{color: "#0d6a90", display: "inline"}} >
                HALL OF FAME
            </h2>
            <p class="mb-1 fs-3 " >
              Our JEE Toppers
            </p>
          </div>
        </div>
        <div class="row" style={{display: "flex", justifyContent: "center"}}>
          <div
            class="col-md-6 col-lg-5 mb-4"
            
          >
            <div className='container'>

             <a href="#" className="course-category img ms-2 mt-3 " 
                style={{backgroundImage: `url(${varadkongari.src})`,
                    backgroundSize: "cover", 
                    backgroundPositionY: "top",
                    position: "absolute",
                    display: "inline",
                    height: "6rem",
                    width: "6rem"
                }}
             >
           </a>

           </div>
            <div class="teacher text-center p-4" 
                style={{padding: "30px", 
                    background: "#0d6a90",
                    borderRadius: "30px",
                    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem"
                }}
            >
             

              <div className="py-1 justify-content-end">
                <h3 className="text-white ms-5 mb-0 fs-5 d-flex justify-content-end">Varad Kongari</h3>
                <p className="position mb-0 d-flex justify-content-end fs-3"  style={{color: "greenyellow", fontWeight: "600" }}>IIT Guwahati</p>
                <p className=" ms-5 ps-5 mb-0 fs-6 d-flex justify-content-end">
                </p>
              </div>
            </div>
          </div>


                {/* ------------------------------------------- */}


          <div
            class="col-md-6 col-lg-5 mb-4"
            
          >
            <div className='container'>

             <a href="#" className="course-category img ms-2 mt-3 " 
                style={{backgroundImage: `url(${vidhishaBhakat.src})`,
                    backgroundSize: "cover", 
                    position: "absolute",
                    display: "inline",
                    height: "6rem",
                    width: "6rem"
                }}
             >
           </a>

           </div>
            <div class="teacher text-center p-4" 
                style={{padding: "30px", 
                    background: "#0d6a90",
                    borderRadius: "30px",
                    
                }}
            >
              <div className="py-1 justify-content-end">
                <h3 className="text-white ms-5 mb-0 fs-5 d-flex justify-content-end">Vidhisha Bhakat</h3>
                <p className="position mb-0 d-flex justify-content-end fs-3"  style={{color: "greenyellow", fontWeight: "600" }}>IIT Kharagpur</p>
              </div>
            </div>
          </div>

                {/* -------------------------------------- */}

        
                <div
            class="col-md-6 col-lg-5 mb-4"
            
          >
            <div className='container'>

             <a href="#" className="course-category img ms-2 mt-3 " 
                style={{backgroundImage: `url(${heethBhandari.src})`,
                    backgroundSize: "cover", 
                    position: "absolute",
                    display: "inline",
                    height: "6rem",
                    width: "6rem"
                }}
             >
           </a>

           </div>
            <div class="teacher text-center p-4" 
                style={{padding: "30px", 
                    background: "#0d6a90",
                    borderRadius: "30px",
                    
                }}
            >
              <div className="py-1 justify-content-end">
                <h3 className="text-white ms-5 mb-0 fs-5 d-flex justify-content-end">Heeth Bhandari</h3>
                <p className="position mb-0 d-flex justify-content-end fs-3"  style={{color: "greenyellow", fontWeight: "600" }}>NIT Durgapur</p>
              </div>
            </div>
          </div>

                {/* -------------------------------------- */}


            
                <div
            class="col-md-6 col-lg-5 mb-4"
            
          >
            <div className='container'>

             <a href="#" className="course-category img ms-2 mt-3 " 
                style={{backgroundImage: `url(${srushtiBakare.src})`,
                    backgroundSize: "cover", 
                    position: "absolute",
                    display: "inline",
                    height: "6rem",
                    width: "6rem"
                }}
             >
           </a>

           </div>
            <div class="teacher text-center p-4" 
                style={{padding: "30px", 
                    background: "#0d6a90",
                    borderRadius: "30px",
                    
                }}
            >
              <div className="py-1 justify-content-end">
                <h3 className="text-white ms-5 mb-0 fs-5 d-flex justify-content-end">Srushti Bakare</h3>
                <p className="position mb-0 d-flex justify-content-end fs-3"  style={{color: "greenyellow", fontWeight: "600" }}>NIT Nagpur</p>
              </div>
            </div>
          </div>

                    {/* ---------------------------------- */}       
        </div>                
      </div>
    </div>
    </>
  );
}

export default ResultSection