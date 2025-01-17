import Image from "next/image";
import React from "react";

export default function Cart() {
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-5xl font-semibold text-center">
                Автомобили в наличии с ПТС
            </h1>
            <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="w-[446px] shadow-2xl rounded-xl p-7 relative">
                        <div className=" flex justify-end relative ">
                            <img
                                src="./yurak.svg"
                                alt="yurak"
                                width={20}
                                height={20}
                                className="absolute top-4 right-10 cursor-pointer"
                            />
                            <img
                                src="./statistika.svg"
                                alt="statistika"
                                width={16}
                                height={16}
                                className="absolute top-4 right-4 cursor-pointer"
                            />
                        </div>
                        <div className=" flex justify-end relative">
                            <img
                                src="./bg_fon.svg"
                                alt="cart"
                                width={900}
                                height={900}
                                className="absolute top-20"
                            />
                        </div>
                        <div className="z-40 relative  ">
                            <div>
                                <h1 className="text-3xl font-semibold">
                                    Skoda Octavia <br /> 1.6 MPI MT Active
                                </h1>
                            </div>
                            <div className="flex gap-10 items-center mt-6">
                                <h3 className="text-md font-semibold bg-[#CA0100] w-44  pr-2 pt-2  h-10 text-white  relative rounded-md text-center ">
                                    Предложение дня{" "}
                                    <span className="absolute right-[-10px] z-0 w-7 py-2 h-7 top-1.5 rounded-md  bg-[#CA0100] rotate-45 "></span>
                                </h3>
                                <p className="text-sm text-[#CA0100] font-semibold">
                                    Выгода <br />
                                    до 300 000 ₽
                                </p>
                            </div>
                            <div className="flex justify-between w-[500px]">
                                <div>
                                    <div className="flex gap-3 items-center mt-6">
                                        <div className="bg-black rounded-full w-9 h-9 flex  items-center justify-center">
                                            <img
                                                src="./sovga.svg"
                                                alt="sovga"
                                                width={16}
                                                height={16}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">
                                                Оборудование
                                            </p>
                                            <p className="text-sm font-semibold text-[#CA0100]">
                                                в подарок
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-center mt-6">

                                    <div className="bg-black rounded-full w-9 h-9 flex  items-center justify-center">
                                            <img
                                                src="./sovga.svg"
                                                alt="sovga"
                                                width={16}
                                                height={16}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">
                                                КАСКО
                                            </p>
                                            <p className="text-sm font-semibold text-[#CA0100]">
                                                в подарок
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-center mt-6 ">
                                        <div className="bg-black rounded-full w-9 h-9 flex  items-center justify-center">
                                            <img
                                                src="./sovga.svg"
                                                alt="sovga"
                                                width={16}
                                                height={16}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold w-24">
                                                Комплект резины
                                            </p>
                                            <p className="text-sm font-semibold text-[#CA0100]">
                                                в подарок
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="z-40 flex justify-center ">
                                    <Image
                                        src="./car.svg"
                                        alt="car"
                                        width={300}
                                        height={300}
                                        className="mr-32 mt-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between items-center gap-4">
                            <h3 className="font-semibold text-2xl">
                                от 1 615 000 ₽{" "}
                            </h3>
                            <p className="text-base">
                                Кредит{" "}
                                <span className="font-semibold">
                                    {" "}
                                    от 115 000 ₽/мес.{" "}
                                </span>
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-3 items-center mt-6 border w-[96px] rounded-2xl p-1.5">
                                <img
                                    src="./kran.svg"
                                    alt="kran"
                                    width={16}
                                    height={16}
                                />
                                <p className="text-sm ">115 л.с.</p>
                            </div>
                            <div className="flex gap-3 items-center mt-6 border w-[96px] rounded-2xl p-1.5">
                                <img

src="./benzin.svg"
alt="benzin"
width={16}
height={16}
/>
<p className="text-sm ">115 л.с.</p>
</div>
<div className="flex gap-3 items-center mt-6 border w-[96px] rounded-2xl p-1.5">
<img
src="./tezlik.svg"
alt="tezlik"
width={16}
height={16}
/>
<p className="text-sm ">115 л.с.</p>
</div>
<div className="flex gap-3 items-center mt-6 border w-[96px] rounded-2xl p-1.5">
<img
src="./soat.svg"
alt="soat"
width={16}
height={16}
/>
<p className="text-sm ">115 л.с.</p>
</div>
</div>
<div className="flex mt-5">
<button className="text-white bg-[#CA0100] py-4  pl-3 rounded-l-xl font-semibold relative ">
<span className="relative z-10">
Резерв онлайн
</span>
<span className="absolute right-[-19px] z-0 w-[42px] py-4 h-[42px] top-2 rounded-md  bg-[#CA0100] rotate-45 "></span>
</button>
<button className="text-white bg-black py-4 px-7 font-semibold  ">
<span className="relative">
<span className="relative z-10">
    {" "}
    Купить{" "}
</span>
<span className="absolute right-[-45px] z-0 w-[42px] py-4 h-[42px] top-[-12px] rounded-md  bg-black rotate-45 "></span>
</span>
</button>
<button className="text-white bg-gray-500 py-4 pr-3 pl-7 rounded-r-full font-semibold">
<span className="relative">
<span className="relative z-10  ">
    {" "}
    Подробнее{" "}
</span>
<span className="absolute right-[-14px] z-0 w-[42px] py-4 h-[42px] top-[-12px] rounded-md  bg-gray-500 rotate-45 "></span>
</span>
</button>
</div>
</div>
))}
</div>
<button className="mx-auto mb-10  text-white bg-[#CA0100] py-6 px-7 font-bold mt-10  w-80 rounded-xl">
Показать еще
</button>
</div>
);
}
