import React from 'react'

function Cards() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className=' w-full h-screen flex items-center px-20 gap-2 '>
            <div className="cardcontainer w-1/2  h-[50vh]">
                <div className="card  relative flex items-center justify-center w-full h-full rounded-xl bg-[#004D43]">
                    <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full text-[#CDEA68] border-[#CDEA68] text-xs'>&copy; 2019-2020</button>
                </div>
            </div>

            <div className="cardcontainer w-1/2 flex gap-3  h-[50vh]">
                <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#192826]">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute left-12 bottom-10 px-5 py-1 border-2 rounded-full text-[#CDEA68] border-[#CDEA68] text-xs'>RATING 5.0 on CLUTCH </button>
                </div>
                <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#192826]">
                    <img className="w-32 h-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png    " alt="" />
                    <button className='absolute left-6 bottom-10 px-5 py-1 border-2 rounded-full text-[#CDEA68] border-[#CDEA68] text-xs'>BUSINESS BOOTCAMP ALUMINI </button>
                </div>
            </div>


        </div>
    )
}

export default Cards
