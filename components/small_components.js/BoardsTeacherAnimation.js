import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
import boardsAnimation from '../../public/boardsAnimation'

const BoardsTeacherAnimation = () => {
    const options = {
        animationData: boardsAnimation,

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

export default BoardsTeacherAnimation