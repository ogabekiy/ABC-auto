import Image from "next/image";
import React from "react";
import { BlogPhoto } from "../images";

export default function Blog() {
    return (
        <div className="container mx-auto pt-[70px]">
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold flex  items-center gap-5">
                    Блог{" "}
                    <span className="text-base font-normal bg-[#CA0100] text-white w-32 h-9 p-2  text-center  rounded-xl">
                        Все статьи
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
            <div className="flex flex-wrap justify-between">
                {[...Array(4)].map((_, index) => (
                    <div className="w-[328px] flex flex-col mb-8" key={index}>
                        <Image
                            className="my-5"
                            src={BlogPhoto}
                            alt="blog_photo"
                            width={328}
                            height={202}
                        />
                        <p className="text-sm text-[#ADADB0]">25 октября</p>
                        <p className="text-base font-bold mt-5">
                            Тест Skoda Karoq Scout - городской карлик или
                            настоящий скаут
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
