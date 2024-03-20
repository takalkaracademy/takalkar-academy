import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import starsAnimation from '../../public/starsAnimation'

const StarsAnimation = () => {
    const options = {
        animationData: starsAnimation,
        
      };
    
  return (
    <>
    <Lottie animationData={options.animationData}
    options={options.loop}
    />
    </>
  )
}

export default StarsAnimation