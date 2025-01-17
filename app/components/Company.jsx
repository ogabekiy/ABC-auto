import Image from 'next/image'
import React from 'react'
import { Photo, Play } from '../images'

export default function Company() {
  return (
    <div className='container mx-auto flex flex-col items-center'>
            <h2 className=' text-[40px] leading-[46.88px] font-bold pt-10 flex justify-center'>О компании</h2>
            <p className='text-[#737373] pt-5 leading-[] flex justify-center w-[924px] items-center text-center'>Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200 автомобилей как отечественного, так и иностранного производства. В штате автосалона «Альтера» работают настоящие профессионалы, которые знают особенности каждого конкретного автомобиля.</p>
            <div className='flex justify-center items-center'>
                <Image src={Photo} alt='photo' className='pt-8 relative' />
                <Image src={Play} alt='play ' className='absolute'/>
            </div>
    </div>
  )
}
