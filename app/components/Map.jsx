import Image from 'next/image'
import React from 'react'
import { Location } from '../images'
export default function Map() {
  return (
    <div className='w-[1870px] h-[570px] mx-auto bg-map bg-cover flex justify-center bg-center'>
        <Image src={Location} alt='location' width={48} height={66} className='flex pt-[260px] absolute'/>

        <div className='w-[401px] h-[258px] bg-white rounded-2xl ml-[1000px] mt-[150px] px-8 py-6'>
            <lu className="flex flex-col gap-3">
                <li className='w-56 flex  items-center '><img src='/telfon.svg' className='bg-[#CA0100] w-8 h-8 flex justify-center items-center rounded-full   p-2 mr-5' alt='alo' width={40} height={40} />  <div className='w-36 '>+7 (800) 551-94-31  +7 (495) 292-18-67 </div></li>
                <li className='w-68 flex  items-center '><img src='/minut.svg' className='bg-[#CA0100] w-8 h-8 flex justify-center items-center rounded-full   p-2 mr-5' alt='alo' width={40} height={40} /> Ежедневно с 08:00 до 21:00</li>
                <li className='w-68 flex  items-center '><img src='/map.svg' className='bg-[#CA0100] w-8 h-8 flex justify-center items-center rounded-full   p-2 mr-5' alt='alo' width={40} height={40} />Россия, Москва, 38КМ МКАД, 6Бс1</li>
                <button className='text-xl font-bold bg-[#CA0100] text-white w-64 rounded-md py-3 px-2 mt-4'>Как до нас добраться</button>
            </lu>
        </div>
    </div>
  )
}
