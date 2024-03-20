import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import navigationClock from '../../public/navigationClock'

const ClockAnimation = () => {
    const options = {
        animationData: navigationClock,

      };
    
  return (
    <>
    <Lottie animationData={options.animationData}
    options={options.loop}
    style={{display: "inline"}}
    />
    </>
  )
}

export default ClockAnimation