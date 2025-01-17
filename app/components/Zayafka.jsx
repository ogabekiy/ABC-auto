import Image from 'next/image'
import React from 'react'
import { HiddenCar } from '../images'

export default function Zayafka() {
  return (
    <div className='bg-[#EFF0F0] w-[1870px] min-h-screen md:min-h-0 md:h-auto mx-auto rounded-xl mt-4 md:mt-10 p-4 md:p-6'>
      <div className='container mx-auto'>
        <h2 className='text-[#262626] text-2xl md:text-4xl font-bold pt-4 md:pt-10'>Заявка на автокредит</h2>
        
        <div className='flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='flex-1'>
            <div className='w-full bg-[#C2C2C4] rounded-xl mt-4 md:mt-10 p-4 md:p-6'>
              <div className='flex flex-col md:flex-row gap-3 md:gap-5 justify-center'>
                <select className='bg-white rounded-lg h-12 w-full md:w-[280px] px-3'>
                  <option value="merc">Марка</option>
                  <option value="bmw">BMW</option>
                  <option value="porsche">Porsche</option>
                </select>
                <select className='bg-white rounded-lg h-12 w-full md:w-[280px] px-3'>
                  <option value="model">Модель</option>
                  <option value="bmw">BMW</option>
                  <option value="porsche">Porsche</option>
                </select>
                <select className='bg-white rounded-lg h-12 w-full md:w-[280px] px-3'>
                  <option value="komplekt">Комплектация</option>
                  <option value="bmw">BMW</option>
                  <option value="porsche">Porsche</option>
                </select>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-4 md:gap-11 mt-6'>
              <div className='w-full md:w-auto'>
                <div className='relative w-full md:w-[424px]'>
                  <Image 
                    width={424} 
                    height={243} 
                    src={HiddenCar} 
                    alt="hiddencar"
                    className='w-full h-auto'
                  />
                </div>
                <div className='flex justify-between mt-4'>
                  <div className='w-20 rounded-xl flex justify-center text-white font-bold py-1 bg-[#ADADB0]'>0</div>
                  <div className='w-20 rounded-xl flex justify-center text-white font-bold py-1 bg-[#ADADB0]'>0</div>
                </div>
                <div className='w-full h-2 rounded-lg opacity-40 bg-[#ADADB0] mt-7'></div>
                <div className='flex justify-between mt-5'>
                  <div className='text-sm text-[#ADADB0]'>Первоначальный взнос</div>
                  <div className='text-sm text-[#ADADB0] text-right'>Остатокпо кредиту</div>
                </div>
              </div>

              <div className='flex-1 mt-6 md:mt-10'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-8'>
                  <p>Сумма кредита, руб</p>
                  <p className='text-2xl md:text-4xl text-right'>0</p>
                </div>
                <input type="range" className='w-full mt-4'/>
                <ul className='flex justify-between text-xs text-[#ADADB0] mt-2 mb-8'>
                  {['0', '500т', '800т', '1,1м', '1,4м', '1,7м', '2м', '2,3м', '2,7м', '3м'].map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>

                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-8'>
                  <p>Сумма кредита, руб</p>
                  <p className='text-2xl md:text-4xl text-right'>6 мес.</p>
                </div>

                <input type="range" className='w-full bg-red-600 mt-4'/>

                <ul className='flex justify-between text-xs text-[#ADADB0] mt-2'>
                  {['6', '12', '24', '36', '48', '60', '72', '84'].map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>

                <div className='flex flex-col md:flex-row gap-4 md:gap-8 mt-8'>
                  <h3 className='whitespace-nowrap'>Первоначальный взнос, руб</h3>
                  <input 
                    type="text" 
                    placeholder='0' 
                    className='flex-1 border border-[#E1E1E1] rounded-lg px-4 py-2'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-[447px] bg-white rounded-xl mt-6 md:mt-10 p-6 md:p-8'>
            <h2 className='text-xl md:text-2xl font-bold pt-2 md:pt-5'>
              Получить выгоду
              <span className='text-red-700 block'>300 000 ₽</span>
            </h2>
            <div className='flex flex-col gap-4 mt-6 md:mt-10'>
              <input 
                type="text" 
                placeholder='Ваше имя' 
                className='w-full h-14 md:h-16 rounded-lg border border-[#E1E1E1] px-4'
              />
              <input 
                type="text" 
                placeholder='Ваш телефон' 
                className='w-full h-14 md:h-16 rounded-lg border border-[#E1E1E1] px-4'
              />
              <button className='w-full h-14 md:h-16 bg-red-700 text-white font-bold text-lg md:text-xl rounded-lg'>
                Получить предложение
              </button>
            </div>
            <p className='text-center text-xs md:text-sm mt-4 underline decoration-gray-900'>
              Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих персональных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}