import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from "gsap/all";

function Featured() {
    const [hover, setHover] = useState(false)


    return (

        <div data-scroll data-scroll-section
            data-scroll-speed="-.2" className='w-full py-20'>
            <div className="w-full px-20 border-b-[1px] border-zinc-300 pb-20">
                <h1 className='text-6xl tracking-tight font-["Neue_Montreal"] '>Featured Projects</h1>

            </div>

            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10 ">


                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="cardcontainer relative   w-1/2 h-[75vh]">
                        <h1 className='absolute  flex z-[9] text-6xl mb- font-["Neue_Montreal"] leading-none tracking-tighter overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]'>
                            {"FYDE".split('').map((item, index) => <motion.span initial={{ y: "100%" }}
                                animate={hover ? { y: "0" } : { y: "100%" }}
                                transition={{ ease: Power4.easeInOut, delay: index * .06 }}
                                className='inline-block translate-y-full'>{item}</motion.span>)}
                        </h1>
                        <div className=" cardw-full h-full  rounded-lg overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                        </div>
                    </div>

                    <div className="cardcontainer relative   w-1/2   h-   [75vh]  ">
                        <h1 className='absolute flex overflow-hidden z-[9] text-6xl mb- font-["Neue_Montreal"] leading-none tracking-tighter right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]'>
                            {"VISE".split('').map((item, index) => <motion.span initial={{ y: "100%" }}
                                animate={hover ? { y: "0" } : { y: "100%" }}
                                transition={{ ease: Power4.easeInOut, delay: index * .06 }}
                                className='inline-block translate-y-full'>{item}</motion.span>)}
                        </h1>
                        <div className="card w-full h-full  rounded-lg overflow-hidden">
                            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Featured
