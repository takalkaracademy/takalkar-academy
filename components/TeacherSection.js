import { motion } from 'framer-motion'
import RevealSection from './motionComponents/RevealSection'
import HoverEffect from './motionComponents/HoverEffect'


const TeacherSection = () => {

  return (
    <section className="ftco-section bg-light">
   <motion.div className="container"
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{opacity: 1, scale: 1 , }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
   >
      <div className="row justify-content-center m-2">
          <div className="col-md-12 heading-section text-center ">
          	<span className="subheading">Dont know what to choose ?</span>
            <h2 className="mb-4">Here Are Some Consulations From Our Experts</h2>
        </div>
    </div>
    
    <div className="row d-flex justify-content-center" style={{paddingLeft: "15%", paddingRight: "15%"}}>
       <div className="col-md-3 " style={{ minWidth: "50%"}}>
       <HoverEffect>
          <div className="project-wrap" style={{borderRadius: "30px",}}>
             <a href="#" className="img" style={{backgroundImage: "url(images/work-1.jpg)",  background: "grey"}}>
                <span className="price">JEE</span>
            </a>
            <div className="text p-4">
            <h3><a href="#">Faculty Name 1</a></h3>
            <p class="advisor">About Teacher : <span>Achievements/Degree</span></p>
                <button type="submit" className="btn submit" style={{background: "#f77d0a", color: "#FFFFFF", borderRadius: "30px"}}>See Curriculum</button>
           </div>
       </div>
       </HoverEffect>
   </div>
   <div className="col-md-3 " style={{ minWidth: "50%"}}>
    <HoverEffect>
      <div className="project-wrap" style={{borderRadius: "30px",}}>
         <a href="#" className="img" style={{backgroundImage: "url(images/work-2.jpg)", background: "grey"}}>
            <span className="price">NEET</span>
        </a>
        <div className="text p-4">
            <h3><a href="#">Faculty Name 2</a></h3>
            <p class="advisor">About Teacher : <span>Achievements/Degree</span></p>
            <button type="submit" className="btn submit" style={{background: "#f77d0a", color: "#FFFFFF", borderRadius: "30px"}}>See Curriculum</button>
       </div>
   </div>
   </HoverEffect>
</div>
<div className="col-md-3 " style={{ minWidth: "50%"}}>
    <HoverEffect>
  <div className="project-wrap" style={{borderRadius: "30px",}}>
     <a href="#" className="img" style={{backgroundImage: "url(images/work-3.jpg)", background: "grey"}}>
        <span className="price">MHT-CET</span>
    </a>
    <div className="text p-4">
        <h3><a href="#">Faculty Name 3</a></h3>
        <p class="advisor">About Teacher : <span>Achievements/Degree</span></p>
        <button type="submit" className="btn submit" style={{backgroundColor: "#f77d0a", color: "#FFFFFF", borderRadius: "30px"}}>See Curriculum</button>
   </div>
</div>
</HoverEffect>
</div>

<div className="col-md-3 " style={{ minWidth: "50%"}}>
<HoverEffect>
  <div className="project-wrap" style={{borderRadius: "30px",}}>
     <a href="#" className="img" style={{backgroundImage: "url(images/work-4.jpg)", background: "grey"}}>
        <span className="price">11th & 12th Board</span>
    </a>
    <div className="text p-4">
        <h3><a href="#">Faculty Name 4</a></h3>
        <p class="advisor">About Teacher : <span>Achievements/Degree</span></p>
        <button type="submit" className="btn submit" style={{background: "#f77d0a", color: "#FFFFFF", borderRadius: "30px"}}>See Curriculum</button>
   </div>
</div>
</HoverEffect>
</div>
</div>
</motion.div>
</section>
  )
}

export default TeacherSection