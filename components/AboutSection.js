import React from 'react'

const AboutSection = () => {

  return (
    <section className="ftco-section services-section" >
  <div className="container">
    <div className="row d-flex">
      <div className="col-md-12 heading-section pr-md-5  d-flex align-items-center ">
         <div className="w-100 h-100 mb-4 mb-md-0 me-4 p-4">
            {/* <span className="subheading">Welcome to StudyLab</span> */}
            <h2 className="mb-2">ABOUT US</h2>
            <p>A Dream turns into a goal when one stands working on it. The
                same happened here with a team of dedicated & experience teachers.
                Takalkar Academy has become a leading name in the field of education,
                Pune. Our commitment to excellence & innovation in teaching method
                has made us a <span className='text-dark fw-bold'>PREFERRED CHOICE FOR STUDENTS.</span></p>
        </div>
        {/* <div className="w-100 h-100 mb-4 mb-md-0 p-4">

            <h2 className="mb-1 " style={{fontSize: "25px"}}>Vision</h2>
            <p style={{fontSize: "15px"}}>To become the biggest “STUDENT ORIENTED
ORGANIZATION” of the country offering highest quality educational
services and creating goodwill in the process matched by none.</p>


        </div> */}

        {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
            {/* <div className="d-flex video-image align-items-center mt-md-4">
              <a href="#" className="video img d-flex align-items-center justify-content-center" style={{backgroundImage: "url(images/about.jpg)"}}>
                 <span className="fa fa-play-circle"></span>
             </a>
             <h4 className="ml-4">Learn anything from StudyLab, Watch video</h4>
         </div> */}

 </div>
 <div className="col-md-12">
     <div className="row">
        <div className="col-md-12 col-lg-12 d-flex align-self-stretch  ">
          <div className="services  p-1 " style={{borderRadius: "15px", background: "#771731", border: '5px double #ffffff', }}>
            {/* <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-tools"></span></div> */}
            <div className="media-body d-flex justify-content-center align-items-center p-3">
              <h3 className="heading fw-bold fs-4 text-light " style={{display: "inline", marginBottom: "0px"}}>MISSION: </h3> 
              <p style={{display: "inline",}} className='fst-italic text-light ms-4 mb-0 d-flex align-items-center'> Wherever there is a need for quality education, 
            <p className='fw-bold mb-0 d-flex align-items-center fs-5' style={{display: "inline-block" }}> &ldquo; WE WILL BE THERE &ldquo;</p></p>
          </div>
      </div>      
  </div>
  <div className="col-md-12 col-lg-6 d-flex align-self-stretch "> 
      <div className="services" style={{borderRadius: "30px", boxShadow: "0px 4px 6px #000000", border: '5px double #000000', background: "#fada03"}}>
        {/* <div className="icon icon-2 d-flex align-items-center justify-content-center"><span className="flaticon-instructor"></span></div> */}
        <div className="media-body p-4">
        <h3 className="heading mb-3 fw-bold fs-4 d-flex justify-content-center" style={{ color: "#000000", }}>VISION</h3>
            <p style={{fontSize: "15px", color: "#000000"}} className='fst-italic'>To become the biggest <br />
            <p className='fw-bold fs-6' style={{ display: "inline", color: "#000000"}}> &ldquo; STUDENT ORIENTED ORGANIZATION &ldquo; </p> <br />
            of the country offering highest quality educational
            services and creating goodwill in the process matched by none.
            </p>
      </div>
  </div>    
</div>
<div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
  <div className="services" style={{borderRadius: "30px", background: "#44b4e4", border: '5px double black', boxShadow: "0px 4px 6px #000000"}}>
    {/* <div className="icon icon-3 d-flex align-items-center justify-content-center"><span className="flaticon-quiz"></span></div> */}
    <div className="media-body p-4">
    <h3 className="heading mb-3 fw-bold fs-4  d-flex justify-content-center">VALUES</h3>
      <p style={{fontSize: "15px", color: "black" }} className='fst-italic'> A. We shall never compromise on the Students’ Benefits.</p>
      <p style={{fontSize: "15px", color: "black" }} className='fst-italic'> B. We shall always remain HONEST, FAIR & TRANSPARENT in all
        our systems and dealings.</p>
  </div>
</div>      
</div>
</div>
</div>
</div>
</div>
</section>
  )
}

export default AboutSection