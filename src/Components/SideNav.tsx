import { FC } from "react";
import { iSideNav } from "../utils/interfaces";

export const SideNav: FC<iSideNav> = ({
  text,
  icon,
  head,
  ini,
  active,
  light,
  dark,
  lightNoHead,
  darkNoHead,
}) => {
  return (
    <div>
      {head ? (
        <div
          className={
            light || lightNoHead
              ? "mt-7 mb-3 text-sm font-black text-gray-400"
              : dark || darkNoHead
              ? "mt-7 mb-3 text-sm font-black text-[lightgrey]"
              : "mt-7 mb-3 text-sm font-black text-gray-100"
          }
        >
          {head}
        </div>
      ) : (
        ""
      )}
      <div
        className={
          dark || darkNoHead
            ? `  ${dark || darkNoHead ? " text-[white]" : "bg-[#4338ca]"}
             
        ${
          dark || darkNoHead
            ? "hover:bg-[#1f2937] group hover:text-white text-[#959ba6] "
            : ""
        }
        ${active ? "bg-[#1f2937]" : ""}

              flex gap-5 py-2 transition-all duration-300 cursor-pointer text-[13px] hover:bg-[#1f2937] rounded-md items-center pl-3
              `
            : `flex gap-5 py-2 transition-all duration-300 cursor-pointer text-[13px] hover:bg-[#4338ca] rounded-md items-center pl-3 ${
                active
                  ? `
                      light || lightNoHead ? "bg-[#f9fafb] text-[#4f46e5] " : ""
                    
              `
                  : ""
              }   ${
                light || lightNoHead
                  ? "hover:bg-[#f9fafb] group text-[#3a3a3a] hover:text-[#4f46e5]"
                  : "text-white "
              }
        ${
          dark || darkNoHead
            ? "hover:bg-[#1f2937] group hover:text-white text-[#959ba6] "
            : ""
        }

        `
        }
      >
        {ini ? (
          <div
            className={
              light || lightNoHead
                ? "p-2 py-1 rounded-md border text-gray-400 font-bold text-[10px]"
                : dark || darkNoHead
                ? "p-2 py-1 rounded-md border bg-[#1f2937] text-gray-400 font-bold text-[10px]"
                : "p-2 py-1 rounded-md border bg-[#6366f1] text-white font-bold text-[10px]"
            }
          >
            {ini}
          </div>
        ) : (
          <div
            className={
              light || lightNoHead
                ? "text-[lightgrey] transition-all duration-300 group-hover:text-[#4f46e5] text-[20px]"
                : "text-[20px]"
            }
          >
            {icon}
          </div>
        )}
        <div>{text}</div>
      </div>
    </div>
  );
};
