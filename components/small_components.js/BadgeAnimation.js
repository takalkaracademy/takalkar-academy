import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import badge from '../../public/badge'
import { useEffect } from 'react';

const BadgeAnimation = () => {
    useEffect(() => {
        const options = {
            animationData: badge,
    
          };
    },[])
   
    
  return (
    <>
    <Lottie animationData={badge}
    // options={options.loop}
    style={{display: "flow"}}
    />
    </>
  )
}


export default BadgeAnimation