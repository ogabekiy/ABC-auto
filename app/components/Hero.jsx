import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';


export default function Hero() {
  return (
    <section className="relative bg-[#EFF0F0] w-full h-[600px] flex items-center justify-between px-10 overflow-hidden container">
    
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20"></div>
   
      <div className="absolute left-5 z-10">
        <ArrowBackIosIcon fontSize="large" className="cursor-pointer" />
      </div>

 
      <div className="flex flex-col gap-4 z-10 mb-52 ml-10">
        <div className="border rounded-full bg-[#CA0100] w-[208px] h-[29px] flex items-center justify-center text-white text-sm">
          <p>Осталось всего 10 авто!</p>
        </div>
        <h1 className="text-black text-5xl font-bold leading-tight">
          Грандиозная распродажа тестового парка!
        </h1>
        <p className="text-[#737373] text-lg">Узнай свою цену!</p>
      </div>

      <div className="relative flex items-center justify-center w-[1200px] h-full">


  
        <Image
          src={'/redCar.png'}
          height={382}
          width={600}
          alt="RedCar"
          className="z-40 absolute top-28 right-72"
        />
        <Image
          src={'/whiteCar.png'}
          height={281}
          width={479}
          alt="WhiteCar"
          className="absolute top-28 z-30 right-28"
        />
        <Image
          src={'/Car3.png'}
          height={242}
          width={402}
          alt="Car3"
          className="absolute top-24 right-7"
        />
      </div>

      <div className="absolute right-5 z-10">
        <ArrowForwardIosIcon fontSize="large" className="cursor-pointer" />
      </div>
  
    </section>
    
  );
}
