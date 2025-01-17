import React from 'react';
import Image from 'next/image';
import { AllRed, Boks, Nash1, Nash2, Nash3 } from '../images';

const podborkis = [
  {
    id: 1,
    txt: 'Семейные автомобили',
    img: Nash1,
  },
  {
    id: 2,
    txt: 'Автомобили для путешествий',
    img: Nash2,
  },
  {
    id: 3,
    txt: 'Городские автомобили',
    img: Nash3,
  },
];

export default function Nashi() {
  return (
    <div className="container mx-auto pt-10">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold flex items-center gap-5">
          Наши подборки{' '}
          <span className="text-base font-normal bg-[#CA0100] text-white w-32 h-9 p-2 text-center rounded-xl">
            Все подборки
          </span>
        </h1>
        <div className="flex gap-3">
          <button className="bg-red rounded-lg hover:shadow-none hover:bg-[#CA0100] hover:text-white w-[48px] shadow-2xl h-[48px] text-2xl">
            &lt;
          </button>
          <button className="bg-red w-[48px] rounded-lg hover:shadow-none hover:bg-[#CA0100] hover:text-white shadow-2xl h-[48px] text-2xl">
            &gt;
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {podborkis.map((podborki) => (
          <div
            key={podborki.id}
            className="relative overflow-hidden rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={podborki.img}
              alt={podborki.txt}
              layout="responsive"
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 flex justify-center gap-10  items-center right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h2 className="text-white text-lg font-bold">{podborki.txt}</h2>
              <button className="bg-red-600 font-normal text-white mt-3 py-2 px-4 rounded-lg hover:bg-red-700">
                Посмотреть
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='h-[328px] mt-20 bg-[#262626] rounded-3xl relative'>
            
            <Image src={AllRed} alt='allred' className=''/>    
            <Image src={Boks} alt='boks' className='absolute top-0' />
            <div className='absolute top-5  p-7 left-[450px]'>
                <h2 className='text-white text-[40px] leading-10 font-bold flex flex-col'>Перебьем предложения от конкурентов! <span className='font-normal text-2xl leading-'>Скидки <span className='text-red-600'>от 10 до 25%</span> на стоимость автомобиля </span></h2>
                <div className='flex gap-16 pt-6'>
                <input 
                type="text" 
                placeholder='Ваш телефон' 
                className='w-full h-14 md:h-16 rounded-lg border border-[#E1E1E1] px-4'
              />
              <button className='w-full h-14 md:h-16 bg-red-700 text-white font-bold text-lg md:text-xl rounded-lg'>
                Получить предложение
              </button>
                </div>
                <p className='text-[#737373] pt-7 font-normal text-[13px] leading-[16.9px] underline decoration-solid decoration-skip-ink'>Нажимая кнопку “Отправить” Вы даете согласие на обработку своих персональных данных</p>
            </div>

      </div>
    </div>
  );
}
