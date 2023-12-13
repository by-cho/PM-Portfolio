import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-center bg-cover custom-img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        <div className='p-5 z-[2] ml-[-10rem] mt-[-10rem]'>
            <h2 className='h2'>Heading</h2>
            <p className='desc1'>Massage</p>
            <button className='button1'>Contact Me</button>
        </div>
    </div>
  )
}

export default Hero