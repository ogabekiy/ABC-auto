"use client"
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Navbar = () => {
  return (
    <section className="container mx-auto bg-white w-full text-black">
      {/* Top bar */}
      <div className="text-[#737373] bg-[#EFF0F0] h-[43px] hidden xl:block">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex items-center space-x-10">
            <p className="flex items-center">
              <PlaceIcon className="mr-1" /> Россия, Москва, 38КМ МКАД, 6Бс1
            </p>
            <p className="flex items-center">
              <AccessTimeIcon className="mr-1" /> Время работы: c 08:00 до 21:00
            </p>
          </div>
          <div>
            <p className="flex items-center cursor-pointer hover:text-[#007bff]">
              <WhatsAppIcon className="mr-1" /> Whatsapp
            </p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo and Menu */}
        <div className="flex items-center space-x-4">
          <MenuIcon className="cursor-pointer block xl:hidden" />
          <Image src="/Logo.svg" alt="Logo" height={58} width={198} priority />
          <p className="text-sm hidden xl:block">
            <strong className="bg-red-600 text-white px-1">10 лет</strong> превосходим <br /> ваши ожидания
          </p>
        </div>

        {/* Navigation Links */}
        <div className="hidden xl:flex gap-9">
          <a className="hover:text-red-500" href="#">
            Подбор авто
          </a>
          <a className="hover:text-red-500" href="#">
            О компании
          </a>
          <a className="hover:text-red-500" href="#">
            Техцентр
          </a>
          <a className="hover:text-red-500" href="#">
            Отзывы
          </a>
          <a className="hover:text-red-500" href="#">
            Контакты
          </a>
        </div>

        {/* Contact Info */}
        <div className="hidden xl:flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <h1 className="font-bold">+7 (800) 551-94-31</h1>
            <p className="text-sm">+7 (495) 292-18-67</p>
          </div>
          <button className="bg-[#CA0100] text-white py-2 px-6 rounded-lg">
            Обратный звонок
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className="items-center justify-between border-t border-gray-200 py-3 px-6 font-bold hidden xl:flex">
        <div className="flex space-x-4 gap-10">
          <select defaultValue="1" className="outline-none bg-white text-gray-700 px-4 py-2 rounded">
            <option value="1">Каталог авто</option>
            <option value="2">Option 2</option>
          </select>
          <select defaultValue="1" className="outline-none bg-white text-gray-700 px-4 py-2 rounded">
            <option value="1">Авто с пробегом</option>
            <option value="2">Option 2</option>
          </select>
          <select defaultValue="1" className="outline-none bg-white text-gray-700 px-4 py-2 rounded">
            <option value="1">Кредит и рассрочка</option>
            <option value="2">Option 2</option>
          </select>
          <select defaultValue="1" className="outline-none bg-white text-gray-700 px-4 py-2 rounded">
            <option value="1">Спецпредложения</option>
            <option value="2">Option 2</option>
          </select>
        </div>
        <a className="hover:text-red-500" href="#">
          Такси в кредит
        </a>
        <div className="flex items-center space-x-4">
          <FavoriteBorderIcon className="cursor-pointer" />
          <EqualizerIcon className="cursor-pointer" />
          <SearchIcon className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="xl:hidden flex items-center justify-between py-3 px-6">
        <div className="flex space-x-4">
          <FavoriteBorderIcon className="cursor-pointer" />
          <EqualizerIcon className="cursor-pointer" />
          <SearchIcon className="cursor-pointer" />
        </div>
        <div className="flex items-center space-x-4">
          <h1 className="font-bold">+7 (800) 551-94-31</h1>
        </div>
      </div>
    </section>
  );
};
