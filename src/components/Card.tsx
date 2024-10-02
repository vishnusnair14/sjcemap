// components/Card.tsx

import { FC, ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
};

const ButtonCardGrid: FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 w-full flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {children}
      </div>
    </div>
  );
};

export default ButtonCardGrid;
