import React from 'react'
import LeftText from './LeftText'
import HeroImg from '../imgs/HeroImg';


const Hero = () => {
  return (
    <div className="flex w-screen h-screen bg-black">
        <div className="grid w-2/4 content-center justify-center">
            <LeftText  />
        </div>
        <div className="grid content-center justify-center w-2/4 bg-black h-full">
            <HeroImg />
        </div>
    </div>
  )
}

export default Hero;

