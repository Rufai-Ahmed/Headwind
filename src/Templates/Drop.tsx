import { FC } from "react";
import { iDrop } from "../utils/interfaces";
import { twMerge } from "tailwind-merge";

export const Drop: FC<iDrop> = ({ line, text, icon, className, ...props }) => {
  return (
    <div {...props}>
      <div
        className={twMerge(
          "w-full  text-[grey] text-[14px] flex gap-3 items-center cursor-pointer px-3 rounded-sm py-[5px] mt-1 ",
          className
        )}
      >
        {icon}

        <div>{text}</div>
      </div>
      {line ? <div className="w-full h-[1px] my-2 bg-gray-500 " /> : ""}
    </div>
  );
};
