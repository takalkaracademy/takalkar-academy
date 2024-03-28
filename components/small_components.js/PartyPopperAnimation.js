import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import partyPopper from '../../public/partyPopper'

const PartyPopperAnimation = () => {
    const options = {
        animationData: partyPopper,
      };
    
  return (
    <Lottie animationData={options.animationData}
        options={options.loop}
    />
  )
}

export default PartyPopperAnimation