import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const RevealSection = ({ children }) => {
    const ref = useRef(null);
  const isInView = useInView(ref, {once: false, amount: 0, margin: "0px 100px -50px 0px"} );

  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
        mainControls.start("visible")
    }
  }, [mainControls, isInView])

  return (
    <div ref={ref}>
        <motion.div
            initial= "hidden"
            animate={mainControls}
            variants={{
                hidden: {opacity: 0, y:150},
                visible: {opacity: 1, y: 0}
            }}
            transition={{duration: 3, delay: 0.25, from: 200, mass: 20, }}
            tran
        >
            {children}
        </motion.div>
    </div>
  )
}

export default RevealSection