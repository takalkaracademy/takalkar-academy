import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import CetBoyAnima from '../../public/CetBoyAnimation'

const CetBoyAnimation = () => {
    const options = {
        animationData: CetBoyAnima,

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

export default CetBoyAnimation