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
         max: 45,
         scale: 1,
         speed: 450
     }}
    className="ftco-footer-widget pt-md-5 mb-4" 
     style={{
        width: "100%", height: "350px", 
        borderRadius: "30px", 
        background: "linear-gradient(to right bottom, rgba(255,255,255, 0.5), rgba(255, 255, 255, 0.3))", 
        justifyContent: "flex-end",
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)"
    }}>

        {/* <ClockAnimation /> */}
        
            <div id="my-map-canvas" style={{height:"100%", width: "100%" , maxWidth:"100%"}}>
                <iframe style={{height:"100%", width:"100%", border:"0", frameborder: "0" , src: "https://www.google.com/maps/embed/v1/place?q=311,+Lower+Bibwewadi,+Lower+Indira+Nagar,+Bibwewadi,+Pune,+Maharashtra+441037&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}}></iframe>
            </div>
            

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