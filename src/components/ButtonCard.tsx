import { FC } from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  buttonTitle: string;
  imageSrc: string;
  btntitle: string;
  link: string;
};

const ButtonCard: FC<CardProps> = ({ title, imageSrc, link, buttonTitle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-5 w-full sm:w-80 md:w-96 lg:w-1/4">
      <div className="flex items-center mb-3">
        <Image
          src={imageSrc}
          alt="Icon"
          width={20}
          height={20}
          className="mr-2"
        />
        <span className="font-bold text-lg">{title}</span>
      </div>
      <a
        href={link}
        className="block bg-[#125875] text-white text-center py-3 rounded-md font-bold"
      >
        {buttonTitle}
      </a>
    </div>
  );
};

export default ButtonCard;
