import React from 'react'
import LogoSVG from "@/components/svgs/LogoSVG";
import Link from 'next/link';
import Booking from '../buttons/Booking';

const Header = () => {
  return (
    <header className="w-screen min-h-20 top-0">
        <div className="flex bg-black text-white font-bold items-center h-20 justify-between">
            <div className="flex items-center">
                <button>
                    <LogoSVG />
                </button>
                <Link href="">
                    <p>ANTDEVPORTFOLIO</p>
                </Link>
            </div>
            <Booking />
        </div>
        
    </header>
  )
}

export default Header;