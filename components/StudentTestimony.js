import React from "react";
import StarsAnimation from "./small_components.js/StarsAnimation";
import MarqueeEffect from "./motionComponents/MarqueeEffect";
import student1 from '../public/student1.JPG'
import student2 from '../public/student2.JPG'
import student3 from '../public/student3.JPG'
import student4 from '../public/student4.JPG'
import student5 from '../public/student5.JPG'
import student6 from '../public/student6.JPG'
import cetStudent from '../public/cetStudent.jpeg'
import boardsStudent from '../public/boardsStudent.png'

const StudentTestimony = () => {
  return (
    <section className="ftco-section testimony-section bg-light">
      <div
        className="overlay"
        style={{ backgroundImage: "url(images/bg_2.jpg)" }}
      ></div>
      <div className="container">
        <div className="row pb-4">
          <div className="col-md-7 heading-section ">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-4">What Our Students Say</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row " style={{ overflow: "hidden" }}>
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
              <MarqueeEffect>
                <div
                  className="owl-stage"
                  style={{
                    display: "flex",
                    transition: "all 0s ease 0s",
                    width: "4642px",
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: "392px", marginRight: "30px" }}
                  >
                    <div className="item">
                      <div className="testimony-wrap py-4" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem", borderRadius: "25px"}}>
                        <div className="text">
                          <p className="star" style={{maxWidth: "30%"}}>
                            <StarsAnimation />
                            {/* <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span> */}
                          </p>
                          <p className="mb-4">
                          सरांनी जस आमचं <span className="fw-bold text-dark">Academic plan</span> बनवला आहे. जे आम्हाला Study Material मिळते. Modules, DPP या सगळ्यांनी आमचं Confidence Boost होतो आणि आताच्या paper मधील PYQ सॉल्व होतात.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(${student1.src})`,
                                backgroundSize: 'contain'
                              }}
                            ></div>
                            <div className="pl-3">
                              <p className="name">Swarali Sohani</p>
                              <span className="position">
                                JEE Aspirant
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                                {/* -------------------------------------- */}

                  <div
                    className="owl-item cloned"
                    style={{ width: "392px", marginRight: "30px", }}
                  >
                    <div className="item">
                      <div className="testimony-wrap py-4" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem", borderRadius: "25px"}}>
                        <div className="text">
                          <p className="star" style={{maxWidth: "30%"}}>
                            <StarsAnimation />
                          </p>
                          <p className="mb-4">
                          Vivek Sir ऐसे teacher है, जो किसीकी तरफ partially नही करते है। वो हर एक individual student पर Focus करते हैं |
                            <br />
                            शुरुवात मैं मेरा भी Math&apos;s weak था but अब every 6 day&aposs मे खुदमैं improvement देख पाता हु |
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(${student2.src})`,
                                backgroundSize: 'contain'
                              }}
                            ></div>
                            <div className="pl-3">
                              <p className="name">Swara Deshpande</p>
                              <span className="position">
                                NEET Aspirant
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                              {/* -------------------------------------- */}
                    
                              <div
                    className="owl-item cloned"
                    style={{ width: "392px", marginRight: "30px", }}
                  >
                    <div className="item">
                      <div className="testimony-wrap py-4" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem", borderRadius: "25px"}}>
                        <div className="text">
                          <p className="star" style={{maxWidth: "30%"}}>
                            <StarsAnimation />
                          </p>
                          <p className="mb-4">
                            Content Provided by all the faculties is fairly enough to solve the Module Questions And PYQs. Teachers deliver their respective Subjects in a very energetic and interactive way.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(${cetStudent.src})`,
                                backgroundSize: 'cover'
                              }}
                            ></div>
                            <div className="pl-3">
                              <p className="name">Angha Shirke</p>
                              <span className="position">
                                CET Aspirant
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>





                              {/* -------------------------------------- */}



                              <div
                    className="owl-item cloned"
                    style={{ width: "392px", marginRight: "30px", }}
                  >
                    <div className="item">
                      <div className="testimony-wrap py-4" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem", borderRadius: "25px"}}>
                        <div className="text">
                          <p className="star" style={{maxWidth: "30%"}}>
                            <StarsAnimation />
                          </p>
                          <p className="mb-4">
                                Not Only Doubts Sessions are conducted on regular basis but also the Faculties are available for us whenever needed to solve our queries.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(${boardsStudent.src})`,
                                backgroundSize: 'contain'
                              }}
                            ></div>
                            <div className="pl-3">
                              <p className="name">Anushka Gundecha</p>
                              <span className="position">
                                11 - 12 Boards
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>





                              {/* -------------------------------------- */}

                  <div
                    className="owl-item cloned"
                    style={{ width: "392px", marginRight: "30px", }}
                  >
                    <div className="item">
                      <div className="testimony-wrap py-4" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem", borderRadius: "25px"}}>
                        <div className="text">
                          <p className="star" style={{maxWidth: "30%"}}>
                            <StarsAnimation />
                          </p>
                          <p className="mb-4">
                          VIVEK SIR, Takalkar Academy चे Director असूनही आम्हाला Maths शिकवतात. आमचे Maths चे Doubts पुरेपुर solve करतात, आणि आम्हाला Timetable ही देतात ज्याने आमचा अभ्यासात Improvement होते.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(${student3.src})`,
                                backgroundSize: 'contain'
                              }}
                            ></div>
                            <div className="pl-3">
                              <p className="name">Manthan Jain</p>
                              <span className="position">
                                JEE Aspirant
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                            {/* -------------------------------------- */}


                <div
                    className="owl-item cloned"
                    style={{ width: "392px", marginRight: "30px", }}
                  >
                    <div className="item">
                      <div className="testimony-wrap py-4" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem", borderRadius: "25px"}}>
                        <div className="text">
                          <p className="star" style={{maxWidth: "30%"}}>
                            <StarsAnimation />
                          </p>
                          <p className="mb-4">
                                Class मे Faculty हमेशा Conceptual Level पर पढाते हैं और हमेशा Two Way Communication होता हैं|
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(${student4.src})`,
                                backgroundSize: 'contain'
                              }}
                            ></div>
                            <div className="pl-3">
                              <p className="name">Aditya Naik</p>
                              <span className="position">
                                NEET Aspirant
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                              {/* -------------------------------------- */}



                  <div
                    className="owl-item cloned"
                    style={{ width: "392px", marginRight: "30px", }}
                  >
                    <div className="item">
                      <div className="testimony-wrap py-4" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem", borderRadius: "25px"}}>
                        <div className="text">
                          <p className="star" style={{maxWidth: "30%"}}>
                            <StarsAnimation />
                          </p>
                          <p className="mb-4">
                          Takalkar Academy के Teachers का जो Content है वो बहुत अच्छा होता है। उसके जो Questions होते है, वो Standard Quality के होते है। जो JEE Main से लेकर JEE Advanced तक सब Cover करते हैं।
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(${student5.src})`,
                                backgroundSize: 'contain'
                              }}
                            ></div>
                            <div className="pl-3">
                              <p className="name">Shraddha Vedpathak</p>
                              <span className="position">
                              JEE Aspirant
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>





                              {/* -------------------------------------- */}



                <div
                    className="owl-item cloned"
                    style={{ width: "392px", marginRight: "30px", }}
                  >
                    <div className="item">
                      <div className="testimony-wrap py-4" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 1rem", borderRadius: "25px"}}>
                        <div className="text">
                          <p className="star" style={{maxWidth: "30%"}}>
                            <StarsAnimation />
                          </p>
                          <p className="mb-4">
                          Talkalkar Academy&apos;s Teachers & Staff provide for the best learning environment. The faculty are motivating, inspiring &amp; understanding.
                          </p>
                          <div className="d-flex align-items-center">
                            <div
                              className="user-img"
                              style={{
                                backgroundImage: `url(${student6.src})`,
                                backgroundSize: 'contain'
                              }}
                            ></div>
                            <div className="pl-3">
                              <p className="name">Srushti Kalokhe</p>
                              <span className="position">
                              JEE Aspirant
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>





                              {/* -------------------------------------- */}



                </div>   
                </MarqueeEffect>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimony;
