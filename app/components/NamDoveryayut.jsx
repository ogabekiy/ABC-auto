import Image from 'next/image';
import React from 'react';
import { GoogleMap, Star5, YandexMap } from '../images';

const otzoviks = [
    {
        id: 1,
        txt: "Сайт отзовик",
        bout: "Название автосалона",
        rekk: 90,
        rate: 4.5
    },
    {
        id: 2,
        txt: "Сайт отзовик",
        bout: "Название автосалона",
        rekk: 90,
        rate: 4.5
    },
    {
        id: 3,
        txt: "Сайт отзовик",
        bout: "Название автосалона",
        rekk: 90,
        rate: 4.5
    },
    {
        id: 4,
        txt: "Сайт отзовик",
        bout: "Название автосалона",
        rekk: 90,
        rate: 4.5
    }
];

export default function NamDoveryayut() {
    return (
        <div className='container mx-auto pb-10'>
            <div className="pt-[100px] flex justify-between items-center">
                <h1 className="font-bold text-[40px] leading-[46.88px]">Нам доверяют</h1>
                <div className="flex gap-3">
                    <button className="bg-red rounded-lg hover:shadow-none hover:bg-[#CA0100] hover:text-white w-[48px] shadow-2xl h-[48px] text-2xl">
                        &lt;
                    </button>
                    <button className="bg-red w-[48px] rounded-lg hover:shadow-none hover:bg-[#CA0100] hover:text-white shadow-2xl h-[48px] text-2xl">
                        &gt;
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6">
                {otzoviks.map((item) => (
                    <div key={item.id} className="bg-white  rounded-lg shadow-2xl p-6">
                        <h2 className="font-bold pt-5 text-[18px]">{item.txt}</h2>
                        <p className="text-gray-500 text-[14px]">{item.bout}</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                        <p className=" text-[14px] mt-2">Рекомендуют {item.rekk}%</p>
                            <div className="text-yellow-500 text-[20px]">
                                {'★'.repeat(Math.floor(item.rate))}
                                {'☆'.repeat(5 - Math.floor(item.rate))}
                            </div>
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[14px]">{item.rate}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center gap-8 pt-20'> 
                <div className='w-[684px] h-[145px] gap-16 pt-7 flex justify-center bg-[#EFF0F0] rounded-xl'>
                    <div>
                        <Image src={YandexMap} alt='image'/>
                        <p className='text-[#ADADB0]'>Название автосалона</p>
                    </div>
                    <div className='flex gap-7'>
                        <div className='mt-4'>
                            <p className='text-[#262626]'>Рекомендуют 90%</p>
                            <Image src={Star5} alt='star'/>
                        </div>
                        <div>
                            <div className='w-[123px]  text-white text-3xl flex justify-center items-center h-[73px] bg-[#55BC6B] rounded-xl'>
                                4.5
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[684px] h-[145px] gap-16 pt-7 flex justify-center bg-[#EFF0F0] rounded-xl'>
                    <div>
                        <Image src={GoogleMap} alt='google'/>
                        <p className='text-[#ADADB0]'>Название автосалона</p>
                    </div>
                    <div className='flex gap-7'>
                        <div className='mt-4'>
                            <p className='text-[#262626]'>Рекомендуют 90%</p>
                            <Image src={Star5} alt='star'/>
                        </div>
                        <div>
                            <div className='w-[123px]  text-white text-3xl flex justify-center items-center h-[73px] bg-[#55BC6B] rounded-xl'>
                                4.1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
