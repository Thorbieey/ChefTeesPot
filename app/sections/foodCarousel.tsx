import React from 'react'
import Image from "next/image";

const foodCarousel = () => {
  return (
    <div className='w-full flex justify-center py-40 bg-black/90'>
        <div className="carousel carousel-center bg-stone-300 rounded-box space-x-4 p-4 w-[60%]">
            <div className="carousel-item bg-red-400">
                <Image
                src="/images/logo.png"
                className="rounded-box" width={300} height={300}  alt=""/>
            </div>
            <div className="carousel-item">
                <Image
                src="/images/logo.png"
                className="rounded-box" width={300} height={300}  alt=""/>
            </div>
            <div className="carousel-item bg-red-400">
                <Image
                src="/images/logo.png"
                className="rounded-box" width={300} height={300}   alt=""/>
            </div>
            <div className="carousel-item">
                <Image
                src="/images/logo.png"
                className="rounded-box" width={300} height={300}   alt=""/>
            </div>
            <div className="carousel-item bg-red-400">
                <Image
                src="/images/logo.png"
                className="rounded-box" width={300} height={300}   alt=""/>
            </div>
        </div>
    </div>
  )
}

export default foodCarousel
