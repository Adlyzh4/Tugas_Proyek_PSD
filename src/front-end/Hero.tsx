import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#E3EDF6] mt-4'>
        <div className='container grid md:grid-cols-2 py-8'>
            <div className=' flex items-center'>
                <div className='max-w-[450px] sapce-y-4'>
                    <p className='text-topheadingsecondary'>
                        Starting at <span className='font-bold'> $99.00 </span>
                    </p>

                    <h1 className='text-topheadingprimary font-bold text-4xl md:text-5xl'>
                        the best note bool for your business
                    </h1>

                    <h3 className='text-2xl font-[ oregano, cursive]'>
                        exlusive offer on all products <span className='text-red-600'>-10%</span> off this week
                    </h3>
                    <a href="#" className='inline-block bg-white px-6 py-3 rounded-md hover:bg-accent hover:text-white'>
                        Shop Now
                    </a>
                </div>
            </div>

            <div>
                <img src="/expo.png" alt="expo.png" className='ml-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Hero