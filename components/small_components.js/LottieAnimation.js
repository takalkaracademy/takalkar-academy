import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import getInTouch from '../../public/getInTouch'

const LottieAnimation = () => {
    const options = {
        animationData: getInTouch,
        
      };
    
  return (
    <>
    <Lottie animationData={options.animationData}
    options={options.loop}
    />
    </>
  )
}

export default LottieAnimation