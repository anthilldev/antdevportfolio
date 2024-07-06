
import Link from 'next/link';
import ColorChangingText from '../widgets/ColorChangingText'
import React from 'react';




const Booking = () => {

  


  return (
    
    <Link href='https://www.upwork.com/fl/~0190b9c73f1f2fdff2?s=1044578476142100494'>
    <button className="p-2 bg- mr-5 rounded-lg" > <ColorChangingText text="Book Me Now" /></button>
    </Link>
    
  )
}

export default Booking;