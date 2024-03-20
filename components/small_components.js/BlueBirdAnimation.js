import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import blueBird from '../../public/blueBird'

const BlueBirdAnimation = () => {
    const options = {
        animationData: blueBird,

      };
    
  return (
    <>
    <span style={{maxHeight: "2px", display: "inline-block"}}>
    <Lottie animationData={options.animationData}
    options={options.loop}
    style={{maxWidth: "40px", marginLeft: "5px"}}
    />
    </span>
    </>
  )
}

export default BlueBirdAnimation