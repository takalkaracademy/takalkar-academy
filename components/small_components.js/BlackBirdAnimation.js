import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import blackBird from '../../public/blackBirds'
import { useEffect } from 'react';

const BlackBirdAnimation = () => {
    useEffect(() => {
        const options = {
            animationData: blackBird,
    
          };
    },[])
   
    
  return (
    <>
    <Lottie animationData={options.animationData}
    options={options.loop}
    style={{display: "flow"}}
    />
    </>
  )
}


export default BlackBirdAnimation