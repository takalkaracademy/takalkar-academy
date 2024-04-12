import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import girlStudying from '../../public/girlStudying'

const GirlStudyingAnimation = () => {
    const options = {
        animationData: girlStudying,

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

export default GirlStudyingAnimation