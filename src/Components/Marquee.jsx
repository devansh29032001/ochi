import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    
      <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full py-20  rounded-tl-2xl rounded-tr-2xl bg-[#004D43] '>
        <div className="text border-t-2 border-b-2 border-zinc-100 text-white flex   overflow-hidden whitespace-nowrap ">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity,duration:10}} className='text-[20vw] leading-none font-["Founders Grotesk"]  tracking-tight font-semibold mb-[1vw] uppercase pr-20'>We are OCHI</motion.h1>

            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity,duration:10}} className='text-[20vw] leading-none font-["Founders Grotesk"]  tracking-tight font-semibold mb-[1vw] uppercase pr-20'>We are OCHI</motion.h1>

            
           
        </div>
      </div>
    
  )
}

export default Marquee
