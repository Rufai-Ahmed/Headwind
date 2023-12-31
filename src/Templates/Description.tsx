import { FC } from "react";
import { FaArrowRight, FaCode, FaEye } from "react-icons/fa";
import { TbClipboard } from "react-icons/tb";
import { iDesc } from "../utils/interfaces";

export const Description: FC<iDesc> = ({ text, head }) => {
  return (
    <>
      {head ? (
        <div className="w-full mt-10">
          <div className="flex items-center justify-between mb-5">
            <div>{text}</div>

            <div className="flex items-center">
              <div className="lg:w-[200px] w-[70px] px-1 h-[40px] rounded-md bg-gray-100 flex justify-between items-center ">
                <div className=" bg-white rounded-md px-2 py-1 flex gap-3 text-[15px] justify-center items-center ">
                  <FaEye className="text-blue-500" />
                  <div className="hidden lg:block ">Preview</div>
                </div>

                <div className="  rounded-md px-2 py-1 flex gap-3 text-[15px] justify-center items-center ">
                  <FaCode className="-blue-500" />
                  <div className="hidden lg:block ">Code</div>
                </div>
              </div>

              <div className="mx-10 h-[30px] w-[1px] bg-gray-300 " />

              <div className="text-[16px] font-bold mr-5">React</div>

              <TbClipboard className="cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div className="mb-5 text-[18px] w-full flex items-center justify-between ">
            <div>{text}</div>
            <div className="flex items-center gap-3 text-[15px] cursor-pointer text-blue-500">
              <div>Get the code</div>
              <div>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
