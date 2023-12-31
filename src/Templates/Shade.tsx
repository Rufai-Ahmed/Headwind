import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { iShade } from "../utils/interfaces";

export const Shade: FC<iShade> = ({ className, ...props }) => {
  return (
    <div>
      {" "}
      <div
        className={twMerge(
          "w-full h-[calc(90vh-60px)] justify-center flex items-center ",
          className
        )}
        {...props}
      >
        <div className="bg-gray-50 shadow-md rounded-md border-dashed border w-[90%] h-[90%] border-[silver] ">
          <div className="h-full relative">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100% 100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="bentStripes"
                  patternUnits="userSpaceOnUse"
                  width="5"
                  height="15"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="2"
                    y2="125"
                    stroke="lightgray"
                    strokeWidth="1%"
                  />
                </pattern>
              </defs>
              <rect
                stroke="none"
                fill="url(#bentStripes)"
                width="100%"
                height="100%"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
