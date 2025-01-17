import Image from 'next/image'
import React from 'react'
import { AStar,Play } from '../images'


export default function Otziviy() {
  return (
    <div className='container mx-auto pt-10 pb-10'>
        <h2 className='text-2xl text-[40px] leading-[46.88px] font-bold' >Отзывы</h2>
        <div className='flex justify-center gap-8 pt-12'>
            <div className='w-[447px] h-[585px] flex flex-col bg-[#F2F2F2] rounded-2xl'>
                <div className='bg-[#262626] h-[291px] flex justify-center items-center rounded-tr-2xl rounded-tl-2xl pb-10'>
                    <Image className='relative mt-5' src={AStar} alt='starA' />
                    <Image className='absolute mt-5' src={Play} alt='play' />
                </div>
                <div className='p-5 flex flex-col gap-6'>
                    <h2 className='text-2xl font-bold'>Сергей Васильев</h2>
                    <p className='text-[#737373]'>«Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...</p>
                    <select className='mt-3 w-[150px] rounded-2xl bg-[#E1E1E1] h-9 md:w-[280px] px-3' name="podborne" id="2">
                        <option value="podborne">Подробнее</option>
                    </select>
                </div>
            </div>
            <div className='w-[447px] h-[585px] flex flex-col bg-[#F2F2F2] rounded-2xl'>
                <div className='bg-[#262626] h-[291px] flex justify-center items-center rounded-tr-2xl rounded-tl-2xl pb-10'>
                    <Image className='relative mt-5 ' src={AStar} alt='starA' />
                    <Image className='absolute mt-5' src={Play} alt='play' />
                </div>
                <div className='p-5 flex flex-col gap-6'>
                    <h2 className='text-2xl font-bold'>Сергей Васильев</h2>
                    <p className='text-[#737373]'>«Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...</p>
                    <select className='mt-3 w-[150px] rounded-2xl bg-[#E1E1E1] h-9 md:w-[280px] px-3' name="podborne" id="2">
                        <option value="podborne">Подробнее</option>
                    </select>
                </div>
            </div>
            <div className='w-[447px] h-[585px] flex flex-col bg-[#F2F2F2] rounded-2xl'>
                <div className='bg-[#262626] h-[291px] flex justify-center items-center rounded-tr-2xl rounded-tl-2xl pb-10'>
                    <Image className='relative mt-5' src={AStar} alt='starA' />
                    <Image className='absolute mt-5' src={Play} alt='play' />
                </div>
                <div className='p-5 flex flex-col gap-6'>
                    <h2 className='text-2xl font-bold'>Сергей Васильев</h2>
                    <p className='text-[#737373]'>«Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA...</p>
                    <select className='mt-3 w-[150px] rounded-2xl bg-[#E1E1E1] h-9 md:w-[280px] px-3' name="podborne" id="2">
                        <option value="podborne">Подробнее</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}
