import { FC } from "react";
import { FaSearch } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { iInput2 } from "../utils/interfaces";

export const GlobalInput: FC<iInput2> = ({
  placeholder,
  className,
  dark,
  light,
  ...props
}) => {
  return (
    <div>
      {" "}
      <div
        {...props}
        className={twMerge(
          `w-full flex items-center  gap-3 overflow-hidden mt-0 rounded-md py-3 pr-3  ${
            light ? "border bg-white" : "bg-slate-300"
          }`,
          className
        )}
      >
        <FaSearch className="mx-2 ml-4 text-[#4f46e5]" />
        <input
          type="text"
          placeholder={placeholder ? placeholder : "Search"}
          className={
            "flex-1 h-full text-[14px]  outline-none placeholder:text-[#4f46e5] bg-transparent"
          }
        />
      </div>
    </div>
  );
};
