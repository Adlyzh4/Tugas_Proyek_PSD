import React from 'react'

const Banner = () => {
  return (
    <div className='container mt-32'>
        <div className='grid lg:grid-cols-[66%,34%] gap-4 pr-[15px]'>
            <div className="h-[200px] mid:h-[260px] bg-[url(/expogo.png)] bg-cover bg-center rounded-xl p-8 md:p-16"> 
                <p className="text-topHeadingSecondary text-xl font-medium">Sale 20% off all store </p>
                <h2 className="text-topHeadingSecondary font-bold text-xl sm:text-3xl max-w-[240px]">smartphone apple 20 pro</h2>
                <a href="#" className="inline-block mt-6 hover:text-accent text-topHeadingSecondary font-medium">shop now</a>
            </div>
            <div className="h-[260px] bg-[url(/JavaScript.png)] bg-right rounded-xl hidden lg:block"></div>
        </div>
    </div>
  )
}

export default Banner