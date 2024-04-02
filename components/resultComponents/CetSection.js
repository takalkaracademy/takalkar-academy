"use client"
import { Container, Row, Col } from 'react-bootstrap';
import {motion} from "framer-motion"
import StarsAnimation from '../small_components.js/StarsAnimation';
import PendulumMotion from '../motionComponents/PendulumMotion';
import '../../src/app/results/results.css'

// image imports
import srushtiBakare from '../../public/srushtiBakare.png'
import himeshLaddha from '../../public/himeshLaddha.png'
import tanushriiM from '../../public/tanushriiM.png'
import sohamGogawale from '../../public/sohamGogawale.png'
import rudraN from '../../public/rudraN.png'

const CetSection = () => {


  return (
    <div>
      <h2 className="d-flex justify-content-center mt-5 fw-bold fs-1 text-info">
        OUR CET TOPPERS
      </h2>

      <div
        className="d-flex justify-content-center"
        style={{ height: "200px" }}
      >
        <img
          src="https://cdn-icons-gif.flaticon.com/6172/6172530.gif"
          alt="throphy"
        />
      </div>
      <Container >
        <Row className="p-5">
          {/* 1st section */}
          <Col xs={12} md={12} lg={5}>
            {/* image of badge */}
            <PendulumMotion side="end" />

            <div
              class="mb-3 bg-dark"
              style={{
                borderRadius: "25px",
                borderTopLeftRadius: "50%",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <img
                src="./varadkongari.png"
                class="card-img-top"
                alt="green iguana"
                style={{
                  borderBottomLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                  borderTopLeftRadius: "50%",
                  border: "4px solid skyblue",
                }}
              />
              <div
                class="card-body"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.span
                  style={{
                    fontSize: "6rem",
                    position: "absolute",
                    left: "75%",
                    bottom: "1%",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    maxWidth: "100%",
                    color: "greenyellow",
                  }}
                  initial={{ y: -150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 3 }}
                >
                  3
                  <sup
                    style={{
                      fontSize: "4rem",
                    }}
                  >
                    *
                  </sup>
                </motion.span>

                <h5 class="card-title text-light fs-5 mb-0">Varad Kongari</h5>

                <motion.h3
                  className="fs-1 mb-0"
                  style={{ color: "greenyellow" }}
                  animate={{ opacity: [1, 0.5, 1] }}
                  //   transition={{ repeat: Infinity, duration: 3}}
                >
                  STATE RANK :
                </motion.h3>

                <p
                  href="#"
                  class="fs-4 mb-0"
                  style={{ color: "rgb(247, 125, 10)" }}
                >
                  99.98%ile &nbsp;
                  <span className="text-primary fs-4">(PCM)</span>
                </p>
              </div>
            </div>
          </Col>

          {/* empty space 1st section 2nd row*/}
          <Col xs={6} md={6} lg={2}>
            {" "}
          </Col>

          {/* 2nd section */}
          <Col xs={12} md={12} lg={5}>
            {/* image of badge */}

            <PendulumMotion side="start" />

            <div
              class="mb-3 bg-dark"
              style={{
                borderRadius: "25px",
                borderTopRightRadius: "50%",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <img
                src="./purviSolanki.png"
                class="card-img-top"
                alt="green iguana"
                style={{
                  borderBottomLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                  borderTopRightRadius: "50%",
                  border: "4px solid skyblue",
                }}
              />
              <div
                class="card-body"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.span
                  style={{
                    fontSize: "6rem",
                    position: "absolute",
                    left: "70%",
                    bottom: "1%",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    maxWidth: "100%",
                    color: "greenyellow",
                  }}
                  initial={{ y: -150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 3 }}
                >
                  11
                  {/* <sup
                    style={{
                      fontSize: "4rem",
                    //   background: "white",
                    }}
                  >
                    *
                  </sup> */}
                </motion.span>

                <h5 class="card-title text-light fs-5 mb-0">Purvi Solanki</h5>

                <motion.h3
                  className="fs-1 mb-0"
                  style={{ color: "greenyellow" }}
                  animate={{ opacity: [1, 0.5, 1] }}
                  //   transition={{ repeat: Infinity, duration: 3}}
                >
                  STATE RANK :
                </motion.h3>

                <p
                  href="#"
                  class="fs-4 mb-0"
                  style={{ color: "rgb(247, 125, 10)" }}
                >
                  99.95%ile &nbsp;
                  <span className="text-primary fs-4">(PCB)</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Other students row */}

        <Row className="p-5 ">
          <Col xs={12} md={12} lg={4}>
            {/* badge of student */}

            <PendulumMotion side="end" />

            <div
              class="mb-3 bg-dark"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "25px",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${himeshLaddha.src})`,
                  backgroundSize: "cover",
                  height: "200px",
                  borderTopLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                }}
                class="card-img-top"
                alt="green iguana"
              ></div>
              <div class="card-body " style={{ borderRadius: "25px" }}>
                <h5 class="card-title text-light mb-0 fs-5 d-flex">
                  Himesh Laddha
                  {/* <span className='ps-2 d-flex justify-content-center' style={{width: "35%", }}> 
                        
                        <img src='https://cdn-icons-png.flaticon.com/128/2058/2058855.png' style={{width: "40%",}} />
                    </span> */}
                </h5>
                <motion.h3
                  className="fs-1 mb-0"
                  style={{ color: "greenyellow" }}
                  animate={{ opacity: [1, 0.5, 1] }}
                  //   transition={{ repeat: Infinity, duration: 3}}
                >
                  99.54 %ile
                </motion.h3>
              </div>
            </div>
          </Col>

          <Col xs={12} md={12} lg={4}>
            {/* badge of student */}

            <PendulumMotion side="end" />

            <div
              class="mb-3 bg-dark"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "25px",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${srushtiBakare.src})`,
                  backgroundSize: "cover",
                  height: "200px",
                  borderTopLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                }}
                class="card-img-top"
                alt="green iguana"
              ></div>
              <div class="card-body " style={{ borderRadius: "25px" }}>
                <h5 class="card-title text-light mb-0 fs-5 d-flex">
                  Srushti Bakare
                  {/* <span className='ps-2 d-flex justify-content-center' style={{width: "35%", }}> 
            
            <img src='https://cdn-icons-png.flaticon.com/128/2058/2058855.png' style={{width: "40%",}} />
        </span> */}
                </h5>
                <motion.h3
                  className="fs-1 mb-0"
                  style={{ color: "greenyellow" }}
                  animate={{ opacity: [1, 0.5, 1] }}
                  //   transition={{ repeat: Infinity, duration: 3}}
                >
                  99.41 %ile
                </motion.h3>
              </div>
            </div>
          </Col>

          <Col xs={12} md={12} lg={4}>
            {/* badge of student */}

            <PendulumMotion side="end" />

            <div
              class="mb-3 bg-dark"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "25px",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${tanushriiM.src})`,
                  backgroundSize: "cover",
                  backgroundPositionY: "-2rem",
                  height: "200px",
                  borderTopLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                }}
                class="card-img-top"
                alt="green iguana"
              ></div>
              <div class="card-body " style={{ borderRadius: "25px" }}>
                <h5 class="card-title text-light mb-0 fs-5 d-flex">
                  Tanushrii M
                  {/* <span className='ps-2 d-flex justify-content-center' style={{width: "35%", }}> 
            
            <img src='https://cdn-icons-png.flaticon.com/128/2058/2058855.png' style={{width: "40%",}} />
        </span> */}
                </h5>
                <motion.h3
                  className="fs-1 mb-0"
                  style={{ color: "greenyellow" }}
                  animate={{ opacity: [1, 0.5, 1] }}
                  //   transition={{ repeat: Infinity, duration: 3}}
                >
                  99.24 %ile
                </motion.h3>
              </div>
            </div>
          </Col>



          <Col xs={12} md={12} lg={4}>
            {/* badge of student */}

            <PendulumMotion side="end" />

            <div
              class="mb-3 bg-dark"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "25px",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${sohamGogawale.src})`,
                  backgroundSize: "cover",
                  height: "200px",
                  borderTopLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                }}
                class="card-img-top"
                alt="green iguana"
              ></div>
              <div class="card-body " style={{ borderRadius: "25px" }}>
                <h5 class="card-title text-light mb-0 fs-5 d-flex">
                  Soham Gogawale
                  {/* <span className='ps-2 d-flex justify-content-center' style={{width: "35%", }}> 
            
            <img src='https://cdn-icons-png.flaticon.com/128/2058/2058855.png' style={{width: "40%",}} />
        </span> */}
                </h5>
                <motion.h3
                  className="fs-1 mb-0"
                  style={{ color: "greenyellow" }}
                  animate={{ opacity: [1, 0.5, 1] }}
                  //   transition={{ repeat: Infinity, duration: 3}}
                >
                  99.14 %ile
                </motion.h3>
              </div>
            </div>
          </Col>


          <Col xs={12} md={12} lg={4}>


            </Col>
          <Col xs={12} md={12} lg={4}>
            {/* badge of student */}

            <PendulumMotion side="end" />

            <div
              class="mb-3 bg-dark"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "25px",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${rudraN.src})`,
                  backgroundSize: "cover",
                  backgroundPositionY: "-2rem",
                  height: "200px",
                  borderTopLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                }}
                class="card-img-top"
                alt="green iguana"
              ></div>
              <div class="card-body " style={{ borderRadius: "25px" }}>
                <h5 class="card-title text-light mb-0 fs-5 d-flex">
                  Rudra N
                  {/* <span className='ps-2 d-flex justify-content-center' style={{width: "35%", }}> 
            
            <img src='https://cdn-icons-png.flaticon.com/128/2058/2058855.png' style={{width: "40%",}} />
        </span> */}
                </h5>
                <motion.h3
                  className="fs-1 mb-0"
                  style={{ color: "greenyellow" }}
                  animate={{ opacity: [1, 0.5, 1] }}
                  //   transition={{ repeat: Infinity, duration: 3}}
                >
                  99.05 %ile
                </motion.h3>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default CetSection