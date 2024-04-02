import React from 'react'
import { motion } from 'framer-motion'

const PendulumMotion = (props) => {

    const pendulumVariants = {
        idle: {
          rotate: 6
        },
        swing: {
          rotate: [0, 30, 0, -30, 0],
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 5,
            ease: "linear",
            type: "",
          }
        }
      }

  return (
    <span
      className = {`ps-2 d-flex justify-content-${props.side} p-2 pr-3`}
      style={{ width: "95%", position: "absolute" }}
    >
      <motion.img
        src="https://cdn-icons-png.flaticon.com/128/2058/2058855.png"
        style={{ width: "15%" }}
        variants={pendulumVariants}
        animate="swing"
      />
    </span>
  );
}

export default PendulumMotion