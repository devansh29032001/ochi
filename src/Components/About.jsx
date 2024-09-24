import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full p-20 bg-[#CDEA68] rounded-2xl '>
        <h1 className='font-["Neue Montreal"] text-[4vw] leading-[3.5vw]  tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

        <div className="w-full border-t-[1px] pt-10  mt-20 border-[#a1b562] flex gap-5">
            <div className="w-1/2">
                <h1 className='text-7xl '>Our Approach:</h1>
                <button className='px-12 py-5 bg-zinc-900 rounded-full text-white mt-10 text-sm flex items-center gap-10 uppercase'>Read More
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                 </button>
            </div>
            <div className=" shadow-2xl w-1/2 h-[70vh] rounded-lg    overflow-hidden ">
              <img  className="w-full h-full  "src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
