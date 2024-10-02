// components/Card.tsx
import { FC, ReactNode } from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  imageSrc: string;
  link: string;
  children?: ReactNode;
};

const ButtonCardGrid: FC<CardProps> = ({ title, imageSrc, children }) => {
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
      <div className="">{children}</div>
    </div>
  );
};

export default ButtonCardGrid;
