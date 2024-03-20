import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";


// 2. Defining Variants
const marqueeVariants = {
  animate: {
    // x: [1035, -1035],
    x: [200, -3000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 90,
        ease: "linear",
      },
    },
  },
};

const MarqueeEffect = ({children}) => {
  return (
    <div>
      <div className="marquee">
                {/* 3. Using framer motion */}
        <motion.div
        //   className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeEffect;