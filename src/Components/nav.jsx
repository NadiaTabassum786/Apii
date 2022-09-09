import React from 'react'
import Data from '../data'
export default function New() {
    console.log(Data[0],"gcgc");
  return (
    <>
    <div className='flex sticky top-0 bg-white nav w-[100%] justify-between px-[30px] items-center py-[20px]'>
      <h1 className='md:pl-[33px] pl-[0px] text-2xl font-semibold cursor-pointer '>  {Data[0].logo}</h1>
      <ul className='invisible md:visible flex w-[58%] font-semibold text-[15px] cursor-pointer justify-evenly'>
      {
        Data[0].li.map((e)=>{
            return(
                <li className='hover:text-[rgb(219,65,82)]'>
                    {e}
                </li>
            )
        })
      }
     </ul>
        </div>
  

        
    </>
  )
}
