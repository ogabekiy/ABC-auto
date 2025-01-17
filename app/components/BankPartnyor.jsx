import Image from 'next/image';
import React from 'react';
import { BCK, Rosgosstrax, Sovkombank, Sperbank } from '../images';


const banks = [
  {
    id: 1,
    logo: Sperbank,
    alt: 'Sperbank Logo',
  },
  {
    id: 2,
    logo: BCK,
    alt: 'BCK Logo',
  },
  {
    id: 3,
    logo: Sovkombank,
    alt: 'Sovkombank Logo',
  },
  {
    id: 4,
    logo: Rosgosstrax,
    alt: 'Rosgosstrax Logo',
  },
];

export default function BankPartnyor() {
  return (
    <div className="container mx-auto">
      <div className="pt-[80px] flex justify-between">
        <h1 className="font-bold text-[40px] leading-[46.88px]">Банки-партнеры</h1>
        <div className="flex gap-3">
          <button className="bg-red rounded-lg hover:shadow-none hover:bg-[#CA0100] hover:text-white w-[48px] shadow-2xl h-[48px] text-2xl">
            &lt;
          </button>
          <button className="bg-red w-[48px] rounded-lg hover:shadow-none hover:bg-[#CA0100] hover:text-white shadow-2xl h-[48px] text-2xl">
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-9">
        {banks.map((bank) => (
          <div
            key={bank.id}
            className="bg-[#EFF0F0] rounded-xl h-[133px] flex justify-center items-center"
          >
            <Image src={bank.logo} alt={bank.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
