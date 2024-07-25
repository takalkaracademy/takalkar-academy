"use client"
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import StarsAnimation from '../small_components.js/StarsAnimation';
import PendulumMotion from '../motionComponents/PendulumMotion';
import '../../src/app/results/results.css'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const CetSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const students = [
    { name: "Malhar Dixit", percentile: 99.81, image: "./malharDixit.svg" },
    { name: "Trushant Chilvery", percentile: 99.72, image: "./trushantChilvery.svg" },
    { name: "Vaishnavi Pardeshi", percentile: 98.91, image: "./vaishnaviPardeshi.svg" },
    { name: "Shruti Shinde", percentile: 98.63, image: "./shrutiShinde.svg" },
    { name: "Utkarsh Salunkhe", percentile: 98.06, image: "./utkarshSalunkhe.svg" },
  ];

  const AnimatedPercentile = ({ percentile, inView }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest * 100) / 100);

    useEffect(() => {
      if (inView) {
        const animation = animate(count, percentile, { duration: 2 });
        return animation.stop;
      }
    }, [inView]);

    return <motion.span>{rounded}</motion.span>;
  };

  return (
    <Container fluid className="bg-gradient-to-b from-white to-light-blue text-dark py-5" ref={ref}>
      <Row className="justify-content-center align-items-center mb-5">
        <Col xs={12} className="text-center">
          <h2 className="fw-bold" style={{color: "black", fontSize: "clamp(1.5rem, 3vw, 2rem)", whiteSpace: "nowrap"}}>
            <img src="https://cdn-icons-png.flaticon.com/256/8289/8289880.png" alt="Trophy" style={{width: "clamp(30px, 4vw, 60px)", marginRight: "10px", objectFit: "contain"}} />
            CET TOPPERS
            <img src="https://cdn-icons-png.flaticon.com/256/8289/8289880.png" alt="Trophy" style={{width: "clamp(30px, 4vw, 60px)", marginLeft: "10px", objectFit: "contain"}} />
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        {students.slice(0, 2).map((student, index) => (
          <Col key={index} xs={10} sm={6} md={4} lg={3} className="mb-4">
            <motion.div
              className="card h-100 shadow-lg text-white"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
              style={{ 
                borderRadius: "20px", 
                overflow: "hidden", 
                position: "relative", 
                backgroundColor: "#1a1a1a", 
                transform: "scale(1.3)",
                border: "2px solid #333",
                backgroundImage: "radial-gradient(circle at 10% 20%, #222 10%, #1a1a1a 40%)",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{ position: "absolute", top: "5px", right: "5px", zIndex: "1" }}>
                {inView && <PendulumMotion />}
              </div>
              <div className="card-img-top" style={{ aspectRatio: "1/1", overflow: "hidden", position: "relative", backgroundColor: "#2a2a2a" }}>
                <div style={{ position: "absolute", top: "5px", left: "5px", zIndex: "1" }}>
                  {inView && <PendulumMotion />}
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: "80%",
                    height: "80%",
                    margin: "10%",
                    borderRadius: "50%",
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                    backgroundColor: "#2a2a2a",
                  }}
                >
                  <motion.img
                    src={typeof student.image === 'string' ? student.image : student.image.src}
                    alt={student.name}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover", 
                      objectPosition: "center", 
                      borderRadius: "50%", 
                      border: "3px solid #333",
                      transformStyle: "preserve-3d",
                    }}
                    whileHover={{
                      rotateX: 10,
                      rotateY: 10,
                      transition: { duration: 0.3 },
                    }}
                  />
                </motion.div>
                {inView && (
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/8146/8146767.png"
                    alt="Badge"
                    style={{ position: "absolute", top: "10px", right: "10px", width: "40px", height: "40px", zIndex: "2" }}
                  />
                )}
              </div>
              <div className="card-body text-center p-2" style={{ backgroundColor: "rgba(26, 26, 26, 0.8)", backdropFilter: "blur(5px)" }}>
                <h5 className="card-title fw-bold text-light mb-1" style={{ fontSize: "1.2rem", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>{student.name}</h5>
                <motion.p
                  className="card-text mb-0 fw-bold"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <motion.span
                    className="fs-1"
                    style={{color: "greenyellow"}}
                    animate={inView ? { 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  >
                    <AnimatedPercentile percentile={student.percentile} inView={inView} /> <sup style={{ fontSize: "0.6em" }}>%ile</sup>
                  </motion.span>
                </motion.p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
      <Row style={{display: "flex", justifyContent: "center"}}>
        {students.slice(2).map((student, index) => (
          <Col key={index} xs={10} sm={6} md={4} lg={3} className="mb-4">
            <motion.div
              className="card h-100 shadow-lg text-white"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
              style={{ 
                borderRadius: "20px", 
                overflow: "hidden", 
                position: "relative", 
                backgroundColor: "#1a1a1a", 
                transform: "scale(1.3)",
                border: "2px solid #333",
                backgroundImage: "radial-gradient(circle at 10% 20%, #222 10%, #1a1a1a 40%)",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
            >
              <div style={{ position: "absolute", top: "5px", right: "5px", zIndex: "1" }}>
                {inView && <PendulumMotion />}
              </div>
              <div className="card-img-top" style={{ aspectRatio: "1/1", overflow: "hidden", position: "relative", backgroundColor: "#2a2a2a" }}>
                <div style={{ position: "absolute", top: "5px", left: "5px", zIndex: "1" }}>
                  {inView && <PendulumMotion />}
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    width: "80%",
                    height: "80%",
                    margin: "10%",
                    borderRadius: "50%",
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                    backgroundColor: "#2a2a2a",
                  }}
                >
                  <motion.img
                    src={typeof student.image === 'string' ? student.image : student.image.src}
                    alt={student.name}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover", 
                      objectPosition: "center", 
                      borderRadius: "50%", 
                      border: "3px solid #333",
                      transformStyle: "preserve-3d",
                    }}
                    whileHover={{
                      rotateX: 10,
                      rotateY: 10,
                      transition: { duration: 0.3 },
                    }}
                  />
                </motion.div>
                {inView && (
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/8146/8146767.png"
                    alt="Badge"
                    style={{ position: "absolute", top: "10px", right: "10px", width: "40px", height: "40px", zIndex: "2", }}
                  />
                )}
              </div>
              <div className="card-body text-center p-2" style={{ backgroundColor: "rgba(26, 26, 26, 0.8)", backdropFilter: "blur(5px)" }}>
                <h5 className="card-title fw-bold text-light mb-1" style={{ fontSize: "1.2rem", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>{student.name}</h5>
                <motion.p
                  className="card-text mb-0 fw-bold"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <motion.span
                    className="fs-1"
                    style={{color: "greenyellow"}}
                    animate={inView ? { 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    } : {}}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  >
                    <AnimatedPercentile percentile={student.percentile} inView={inView} /> <sup style={{ fontSize: "0.6em" }}>%ile</sup>
                  </motion.span>
                </motion.p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CetSection