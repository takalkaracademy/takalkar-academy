import RevealSection from "./motionComponents/RevealSection"
import SocialBar from "./small_components.js/SocialBar"
import { Tilt } from "react-tilt"
import ClockAnimation from "./small_components.js/ClockAnimation"

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-no-pt " 
    style={{
        background: "black",
        // background: "linear-gradient(252deg, rgba(0,191,175,1) 34%, rgba(207,242,126,1) 67%)", 
        paddingBottom: "0px"
    }}>
        <RevealSection>
  <div className="container">
    <div className="row mb-5">
      <div className="col-md pt-5">
        <div className="ftco-footer-widget pt-md-5 mb-4">
          <h2 className="ftco-heading-2 text-light fs-1 " >CONTACT US</h2>
          <div className="block-23 mb-3" >
         <ul>
           <li>
                <span className="mr-2"><img src="https://cdn-icons-png.flaticon.com/128/14033/14033698.png" style={{maxWidth: "30px"}}/></span>
                <span className="text-light pt-2 link-warning pt-2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">311, Above Pune People Bank, Near Bharat Jyoti Bus Stop, Bibwewadi, Pune, Maharashtra - 411037</span>
            </li>
           <li><a href="#">
            <span><img src="https://cdn-icons-png.flaticon.com/128/13825/13825146.png" style={{maxWidth: "30px"}}/> </span>
            <span className="text-light pt-2 link-warning pt-2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" >+91 7447529354 </span>
            </a></li>
           <li><a href="#">
            <span ><img src="https://cdn-icons-png.flaticon.com/128/13825/13825146.png" style={{maxWidth: "30px"}}/></span>
            <span className="text-light pt-2 link-warning pt-2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">+91 9420150618 </span>
            </a></li>
           <li><a href="#">
            <span className="mr-2"><img src="https://cdn-icons-png.flaticon.com/128/526/526901.png" style={{maxWidth: "30px"}}/></span>
            <span className="text-light pt-2 link-warning pt-2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">takalkarjeeneetacademy09@gmail.com</span>
            </a></li>
       </ul>
     </div>
         <SocialBar />
    </div>
</div>

<div className="col-md pt-5 ">
    <div className="ftco-footer-widget pt-md-5 mb-4">
       {/* <h2 className="ftco-heading-2 text-dark fs-4">Click On Maps For Directions</h2> */}
       <div className="block-23 mb-3">
                    


     </div>
    <Tilt 
    options={{
         max: 80,
         scale: 1,
         speed: 800
     }}
    className="ftco-footer-widget mb-4" 
     style={{
        width: "100%", height: "350px", 
        borderRadius: "30px", 
        background: "linear-gradient(to right bottom, rgba(255,255,255, 0.5), rgba(255, 255, 255, 0.3))", 
        justifyContent: "flex-end",
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)",
    }}>

        {/* <ClockAnimation /> */}

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15137.004115293394!2d73.85312755323474!3d18.47228512728338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eabd9642d009%3A0x6fd04090c1784e36!2sTakalkar%20Academy!5e0!3m2!1sen!2sin!4v1711446911670!5m2!1sen!2sin" 
                style={{height: "100%", width: "100%",  borderRadius: "30px",}} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            
    </Tilt>
</div>
</div>
</div>
<div className="row">
  <div className="col-md-12 text-center ">
  {/* <div className="ftco-footer-widget pt-md-5 mb-4" 
     style={{
        width: "350px", height: "350px", 
        borderRadius: "30px", 
        background: "linear-gradient(to right bottom, rgba(255,255,255, 0.5), rgba(255, 255, 255, 0.3))", 
        justifyContent: "flex-end",
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)"
    }}>
    </div> */}
  </div>
</div>
</div>
</RevealSection>
</footer>
  )
}

export default Footer