import Image from 'next/image'
import React from 'react'

// type Props = {}

const Footer = () => {
  return (
    <footer
    style={{ fontFamily: "var(--font-noto-sans)" }}
      className="w-full text-white  md:px-20 px-4 py-10  pb-20 flex flex-col  relative bg-black/90"
    >
      <div className="flex items-center flex-col gap-4">
        <div className='flex flex-col items-center gap-4 text-2xl font-semibold'>
          <Image width={100} height={60} src="/images/logo.png" alt="" />
          <span className="text-white text-2xl font-semibold">
            Chef{" "}
            <span className="text-red-700">{"Tee's Pot"}</span>
          </span>
        </div>
        <div>
          <span className="text-white text-ld font-semibold">
          © {new Date().getFullYear()} Ife by Chef Tee. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer