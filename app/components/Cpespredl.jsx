import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const cards = [
  { title: 'Первый автомобиль', about: '1,9% по льготной ставке', photo: '/girl.png' },
  { title: 'Семейный автомобиль', about: '1,9% по льготной ставке', photo: '/car.png' },
  { title: 'Экспресс-кредит', about: '1,9% по льготной ставке', photo: '/mans.png' },
];

export default function Cpespredl() {
  return (
    <section className="container mx-auto py-6 px-5 sm:px-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-black">Спецпредложения</h2>
        <div className="flex gap-2">
          <div className="h-[48px] w-[48px] flex justify-center items-center hover:bg-[#CA0100] bg-white shadow-lg cursor-pointer">
            <ArrowBackIosIcon className="text-black" />
          </div>
          <div className="h-[48px] w-[48px] flex justify-center items-center hover:bg-[#CA0100] bg-white shadow-lg cursor-pointer">
            <ArrowForwardIosIcon className="text-black" />
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between rounded-lg bg-white shadow-md w-full h-[240px] sm:h-[190px] p-4"
          >
            <div className="absolute z-10 p-4">
              <h3 className="text-lg font-bold text-black">{card.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{card.about}</p>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-medium text-black rounded-md">
                Узнать больше
              </button>
            </div>
            <div className="h-full w-full">
              <img
                src={card.photo}
                alt={card.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
