import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import kidReading from '../../public/kidReading'

const KidReadingAnimation = () => {
    const options = {
        animationData: kidReading,

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

export default KidReadingAnimation