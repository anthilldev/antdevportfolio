import Link from 'next/link'
import React from 'react'

const HeroButton = () => {
  return (

    <div className="place-self-center">
    <Link href='https://www.upwork.com/fl/~0190b9c73f1f2fdff2?s=1044578476142100494' >
    <button className="
    text-white 
    font-bold 
    bg-gray-500 
    mt-5 
    max-w-36 
    rounded-lg 
    place-self-center 
    text-nowrap 
    py-2 
    px-2 
    border-4 
    border-double 
    border-black
    hover:bg-green-400
    hover:text-black
    
    ">Hire Me</button>
    </Link>
    </div>
  )
}

export default HeroButton