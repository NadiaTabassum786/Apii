import React from 'react'
import Data from '../data'
export default function home() {
  return (
     <>
    <div id='home' className='flex md:flex-row  flex-col  w-[100%] h-[120vh] md:h-[85vh] justify-evenly '>
      <img className='md:w-[43%] w-[95%] md:ml-[0px] ml-[auto] h-[100vh] md:h-[90%] md:mt-[3%]' src={Data[1].src} alt="" />
      <div className='md:w-[42%]  md:h-[80%] md:mt-[9%] w-[full]'>
        <h1 className='md:text-6xl text-4xl text-gray-800 md:ml-[0px] ml-[40px] md:font-[900]'>{Data[1].head1}</h1>
        <p className='text-xl md:ml-[0px]  ml-[40px] text-gray-700 font-semibold mt-[25px] md:w-[80%]'> {Data[1].para}</p>
        <button type="button" className="md:ml-[0px] ml-[40px]  px-11 py-4 md:mt-[45px] mt-[30px] bg-[rgb(219,65,82)] text-white font-semibold text-[13px] hover:shadow-lg  focus:shadow-lg focus:outline-none  "> {Data[1].btn}</button>
      </div>
    </div>
     
     </>
  )
}
