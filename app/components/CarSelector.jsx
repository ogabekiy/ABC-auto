'use client'
import Image from 'next/image';
import React from 'react';

const brands = [
  { id: 1, logo: '/chevrolet.png', name: 'Kia' },
  { id: 2, logo: '/chevrolet.png', name: 'Brilliance' },
  { id: 3, logo: '/chevrolet.png', name: 'Citroen' },
  { id: 4, logo: '/chevrolet.png', name: 'Ford' },
  { id: 5, logo: '/haima.png', name: 'Haima' },
  { id: 6, logo: '/lifan.png', name: 'Lifan' },
  { id: 7, logo: '/chevrolet.png', name: 'Peugeot' },
  { id: 8, logo: '/uaz.png', name: 'UAZ' },
  { id: 9, logo: '/chevrolet.png', name: 'Hyundai' },
  { id: 10, logo: '/chevrolet.png', name: 'Skoda' },
  { id: 11, logo: '/hyundai.png', name: 'Volkswagen' },
  { id: 12, logo: '/hyundai.png', name: 'Toyota' },
];

export default function CarSelector() {
  return (
    <section className="bg-[#EFF0F0] py-10 px-5 container mx-auto w-[1000px] ">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
        {/* Car Brands */}
        <div className="grid grid-cols-4 gap-6 w-full lg:w-auto">
          {brands.map((brand) => (
            <div key={brand.id} className="flex flex-col items-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={38}
                height={38}
                className="rounded"
              />
              <p className="text-center text-sm mt-2">{brand.name}</p>
            </div>
          ))}
        </div>

        {/* Quick Car Selection */}
        <div className="bg-white p-6 rounded-md w-full lg:w-[400px] shadow-lg mt-10 lg:mt-0">
          <h2 className="text-black text-lg font-bold mb-4">Быстрый подбор авто</h2>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2">Цена</label>
            <input type="range" className="w-full" min="0" max="3000000" />
            <div className="flex justify-between text-sm mt-2 text-gray-600">
              <span>0</span>
              <span>500т</span>
              <span>1м</span>
              <span>1,5м</span>
              <span>2м</span>
              <span>2,7м</span>
              <span>3м</span>
            </div>
          </div>
          <div className="flex gap-4 mb-6">
            <select className="w-full border rounded-md px-4 py-2 text-sm">
              <option>Тип кузова</option>
              <option>Седан</option>
              <option>Хэтчбек</option>
              <option>Внедорожник</option>
            </select>
            <select className="w-full border rounded-md px-4 py-2 text-sm">
              <option>Коробка</option>
              <option>Автомат</option>
              <option>Механика</option>
            </select>
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded-md">
            ПОКАЗАТЬ 73
          </button>
        </div>
      </div>
    </section>
  );
}
