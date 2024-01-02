import { FC } from "react";
import { iFlyout } from "../utils/interfaces";
import { headNav } from "../utils/data/headerData";

export const Flyout: FC<iFlyout> = ({ full, simple, simpleDesc, twoCol }) => {
  return (
    <div
      className={` py-5 bg-white border rounded-lg  gap-3 ${
        full
          ? "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 min-h-[200px] shadow-lg"
          : twoCol
          ? "min-w-[350px] grid grid-cols-1 md:grid-cols-2"
          : simple
          ? "w-[200px] shadow-lg"
          : "w-[400px] flex flex-col"
      }`}
    >
      {headNav.map((el) => (
        <div
          className={`flex  group transition-all duration-300 p-4 py-3 items-center gap-3 ${
            simple ? "" : "hover:bg-slate-100"
          }`}
        >
          {simpleDesc || simple ? (
            ""
          ) : (
            <div className="p-3 text-[20px] group-hover:text-violet-600 duration-300 transition-all bg-white rounded-md ">
              {el.icon}
            </div>
          )}

          <div
            className={`text-sm text-left ${
              simple ? "hover:text-violet-500" : ""
            }`}
          >
            <div>
              <strong>{el.bold}</strong>
            </div>
            {simple ? "" : <div className="text-gray-500">{el.sm}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};
