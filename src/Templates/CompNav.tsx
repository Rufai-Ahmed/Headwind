import { FC } from "react";
import { iNav } from "../utils/interfaces";
import { twMerge } from "tailwind-merge";

export const CompNav: FC<iNav> = ({ text, about, className, ...props }) => {
  return (
    <div>
      {" "}
      <div
        {...props}
        className={twMerge(
          "pt-10 cursor-pointer border-t text-[17px] border-r-purple-500  ",
          className
        )}
      >
        <strong>{text}</strong>
        <div className="text-[14px] w-[90%] mt-5 text-black ">{about}</div>
      </div>
    </div>
  );
};
