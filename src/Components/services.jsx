import React from 'react'
import Data from '../data'
import Servise from './service_card' 
 
export default function services() {
  return (
    <>
     <h1 className='text-gray-700 text-[14.5px] md:mt-[120px] mt-[60px] ml-[40px] md:ml-[70px]'>{Data[2].head1}</h1>
     <h1 className='text-5xl mb-[30px] text-gray-700 text-extrabold mt-[40px] ml-[40px] md:ml-[70px]'>{Data[2].head2}</h1>
     <div id='service' className='flex border md:pl-[35px] flex-wrap '>
<Servise data={{src:Data[2].src1, head:Data[2].market}}/>
<Servise data={{src:Data[2].src2, head:Data[2].brand, back:"rgb(219,65,64)", line:"white", color:"white"}}/>

<Servise data={{src:Data[2].src3, head:Data[2].motion}}/>

<Servise data={{src:Data[2].src4, head:Data[2].ui}}/>

<Servise data={{src:Data[2].src5, head:Data[2].ux}}/>
   </div>
  </>
  )
}
