import { Call, Clock, Ellipse, Location } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopFooter = () => {
  const footerData = {
    a: [
      "Niva",
      "Chevrolet",
      "Ford",
      "KIA",
      "Toyota",
      "Subaru",
      "Hyundai",
      "Volkswagen",
      "Nissan",
      "BMW",
      "Lada",
      "Mazda",
      "Mercedes-Benz",
      "Audi",
      "Renault",
      "Mitsubishi",
      "Opel",
      "Peugeot",
      "Skoda",
      "Suzuki",
      "Volvo",
      "Honda",
      "Land Rover",
      "Lexus",
      "Citroen",
      "Jeep",
      "Porsche",
      "Jaguar",
      "Infiniti",
      "Cadillac",
      "Dodge",
      "Chrysler",
      "Lincoln",
      "Fiat",
      "Seat",
      "Alfa Romeo",
    ],
  };

  return (
    <div className=" container mx-auto bg-[#262626] ">
      <div className=" border rounded-t-2xl border-[#262626] flex justify-between items-center text-white py-10 text-xl">
        <Link href="#">Каталог авто</Link>
        <Link href="#">Авто с пробегом</Link>
        <Link href="#">Кредит и рассрочка</Link>
        <Link href="#">Спецпредложения</Link>
        <Link href="#">Такси в кредит</Link>
      </div>
      <hr className="border-gray-700" />
      <div className="flex justify-between py-10 ">
        <div>
          <div className="flex justify-between justify-items-center w-[96%] gap-4 pb-8">
            <div className="flex gap-4">
              <Link className="text-white" href="#">
                Каталог авто
              </Link>
              <Link className="text-[#737373]" href="#">
                Подробнее
              </Link>
            </div>

            <Link className="text-[#737373]" href="#">
              Карта сайта
            </Link>
          </div>
          <div className="grid grid-cols-6">
            {footerData.a &&
              footerData.a.map((data, i) => {
                return (
                  <Link href="#" key={i} className="underline text-gray-500">
                    {data}
                  </Link>
                );
              })}
          </div>
        </div>

        <div className="flex items-center w-[40%] gap-20 ">
          <div>
            <Link className="text-white " href="#">
              Кредит и рассрочка
            </Link>
            <div className="grid underline text-gray-500 pt-8">
              <ul>
                <li>
                  <a href="#">Экспресс-кредит</a>
                </li>
                <li>
                  <a href="#">Семейный автомобиль</a>
                </li>
                <li>
                  <a href="#">Первый автомобиль</a>
                </li>
                <li>
                  <a href="#">Работникам медицины</a>
                </li>
                <li>
                  <a href="#">Рассрочка</a>
                </li>
                <li>
                  <a href="#">Trade-in</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Link className="text-white" href="#">
              Контакты
            </Link>
            <div className="contact-info text-gray-500  pt-8 ">
              <div className="contact-item flex gap-2 ">
                <div className="mt-2 w-6 h-6 rounded-full bg-[#CA0100] flex items-center justify-center">
                  <Image src={Call} width={9} height={9} alt="call" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+78005519431">+7 (800) 551-94-31</a>
                  <a href="tel:+74952921867">+7 (495) 292-18-67</a>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className=" mt-2 w-6 h-6 rounded-full bg-[#CA0100] flex items-center justify-center">
                  <Image src={Clock} width={9} height={9} alt="clock" />
                </div>
                <h1>Ежедневно с 08:00 до 21:00</h1>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex justify-center items-center w-6 h-6 rounded-full bg-[#CA0100] mt-2">
                  <Image src={Location} width={9} height={9} alt="location" />
                </div>
                <span>
                  Россия, Москва, 38КМ МКАД, 6Бс1
                  <a href="#" className="route-link">
                    <br />
                    Схема проезда
                  </a>
                </span>
              </div>
              <div className="w-full mt-3">
                <select className="rounded-lg bg-[#1A1A1A] w-full p-2 text-white">
                  <option value="Москва">Москва</option>
                  <option value="Санкт-Петербург">Санкт-Петербург</option>
                  <option value="Казань">Казань</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around ">
        <div className=" grid grid-cols-2 justify-between "></div>
      </div>
    </div>
  );
};

export default TopFooter;
