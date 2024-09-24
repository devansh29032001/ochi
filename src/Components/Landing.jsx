import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function Landing() {
    motion
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen pt-1 mb-32'>
            <div className='textstructure mt-28 px-32'>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return <div className='masker'>
                        <div className="w-fit flex  ">
                            {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "9vw" }}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                className='w-[9vw] h-[5vw] relative top-[1vw] rounded-md bg-red-500'></motion.div>)}

                            <h1 className='uppercase text-[7vw] leading-[6vw] tracking-tighter font-bold font-["Founders Grotesk"]'>{item}</h1>
                        </div>
                    </div>
                })}

            </div>

            <div className="border-t-[1px] border-zinc-400 mt-32 flex justify-between item-center py-5 px-20">
                {["For Public And Private Companies", "From the first pitch to IPO"].map((item, index) => (
                    <p className='text-sm tracking-tight leading-none'>{item}</p>))}

                <div className="start flex items-center gap-3">
                    <div className="px-5 py-1 border-[1px]  border-zinc-500 rounded-full text-sm">Start the Project</div>
                    <div className='w-10 h-10 border-[1px] flex items-center jusitfy-center  rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaLongArrowAltUp />
                        </span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Landing
