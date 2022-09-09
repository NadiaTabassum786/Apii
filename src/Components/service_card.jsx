import React from 'react'

export default function service_card(props) {
  return (
     <>
       <div style={{background:props.data.back}} className='border-gray-700 mb-[20px] ml-[40px] md:ml-[30px] border-[2px] w-[230px] sm:w-[220px] md:h-[50vh] md:w-[200px] pl-[20px]'>
        <img className='h-[120px] mt-[50px] mb-[70px] w-[150px] ' src={props.data.src} alt="" />
        <div style={{background:props.data.line}} className='h-[3px] w-[1.5rem] mb-[20px]  bg-gray-600'></div>
        <h1 style={{color:props.data.color}} className='text-gray-800 mb-[10px]'> {props.data.head}</h1>
     </div>
     </>
  )
}
