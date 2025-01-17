import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
import Image from "next/image";
import { Yandex } from "@/public";

const Footer = () => {
  return (
    <footer className=" bg-[#262626]">
      <TopFooter />
      <div className="   bg-[#1B1B1B] w-full py-10">
        <div className="container flex gap-7">
          <div>
            <h1 className="text-white">
              © 2021 Автосалон "ABC AUTO". Официальный дилер
            </h1>
            <div className="flex justify-between gap-4 text-[#737373] text-sm mt-5">
              <p>Политика конфиденциальности</p>
              <p>Пользовательское соглашение</p>
            </div>
          </div>
          <div>
            <p className="text-[#737373] text-sm max-w-[613px]">
              Обращаем Ваше внимание на то, что данный интернет-сайт носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями Статьи 437
              Гражданского кодекса Российской Федерации.
            </p>
          </div>
          <div className="">
            <Image src={Yandex} width={218} height={73} alt="yandex" />
          </div>
        </div>
      </div>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
