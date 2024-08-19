import React from 'react'
import Button from './button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>IT'S TOME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400'>Normous</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>Lorem ipsum dolor sit amet <span className='text-blue-400 font-medium'>consectetur adipisicing</span> elit. Incidunt eveniet doloribus quae libero optio enim voluptates nobis, recusandae esse hic <span className='text-blue-400 font-medium' >cupiditate laudantium possimus</span> rem tempora sint modi repellendus quam alias.</p>
      <Button func={()=>{
        window.location.href='#generate'
      }} text='Accept & Begin'></Button>
    </div>
  )
}
