import React from "react";

export default function BottomFooter() {
  function nimadir() {
    return (
      <div>
        <h1 className="text-lg uppercase text-white mb-2 font-bold">Kia</h1>
        <p className="text-[#737373]">
          Picanto (2020), Sorento 2019, Sorento Prime, Sportage New, Rio 2019,
          Pro Ceed, Mohave 2019, Rio X-Line, Stringer (2020), Optima NEW, Ceed
          2020, Cerato 2020, K900, Ceed SW 2020, Soul, Seltos, XCeed, K5, Rio,
          Sorento, Mohave, Rio X, Carnival, Picanto, Stinger, Cerato, Ceed, Ceed
          SW
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-5 container py-8">
      <div className="">{nimadir()}</div>
      <div className="">{nimadir()}</div>
      <div className="">{nimadir()}</div>
      <div className="">{nimadir()}</div>
      <div className="">{nimadir()}</div>
      <div className="">{nimadir()}</div>
      <div className="">{nimadir()}</div>
      <div className="">{nimadir()}</div>
      <div className="">{nimadir()}</div>
      <div className="">{nimadir()}</div>
      <div className="">{nimadir()}</div>
      <div>
        <h1 className="text-lg font-bold text-[#F2C94C] mb-2 uppercase">
          Авто под такси
        </h1>
        <p className="text-[#737373]">
          Hyundai Solaris, Skoda Octavia, Volswagen Polo, Hyundai Solaris, Skoda
          Octavia, Volswagen Polo, Hyundai Solaris, Skoda Octavia, Volswagen
          Polo, Hyundai Solaris, Skoda Octavia, Volswagen Polo.
        </p>
      </div>
    </div>
  );
}
