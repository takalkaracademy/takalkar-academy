import {motion} from 'framer-motion';

const HoverEffect = ({children}) => {
  return (
    <motion.div
    initial={{scale: 1}}
    whileHover={{ scale: 1.05 }}
    transition={{
        duration: 0.2,
        delay: 0,
        ease: [0.17, 0.67, 0.83, 0.67],
        x: { duration: 1 },
      }}
    
    >
        {children}
    </motion.div>
  )
}

export default HoverEffect