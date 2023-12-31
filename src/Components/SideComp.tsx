import { FaAngleDown, FaSearch } from "react-icons/fa";
import { TbBell } from "react-icons/tb";
import person from "../Assets/person.avif";
import { MdMenu } from "react-icons/md";
import { Shade } from "../Templates/Shade";
import { FC, useState } from "react";
import { iSideBar } from "../utils/interfaces";

export const SideComp: FC<iSideBar> = ({
  normNoHead,
  darkNoHead,
  lightNoHead,
}) => {
  const [state, setState] = useState(false);

  return (
    <div
      onClick={() => {
        if (state) {
          setState(false);
        }
      }}
    >
      {normNoHead || darkNoHead || lightNoHead ? (
        ""
      ) : (
        <div className="w-full h-[60px] border-b flex items-center justify-between px-5 lg:px-10 ">
          <div className="flex gap-5 w-[60%] items-center text-[grey] ">
            <MdMenu size={24} className="lg:hidden" />

            <FaSearch size={18} />
            <input
              type="search"
              className="flex-[1] h-[40px] outline-none placeholder:text-[grey] flex w-  "
              placeholder="Search..."
            />
          </div>

          <div className="flex items-center ">
            <div className="text-[25px] text-[grey] px-5 border-none  lg:border-r lg:mr-5 ">
              <TbBell />
            </div>

            <div
              className="flex items-center gap-3 cursor-pointer relative"
              onClick={() => {
                setState(!state);
              }}
            >
              {state ? (
                <div className="absolute w-[150px] bg-white rounded-md shadow-md -bottom-16 z-10 py-2 ">
                  <div className="w-full py-1 text-sm hover:bg-gray-50 cursor-pointer transition-all px-2 duration-300">
                    Your profile
                  </div>
                  <div className="w-full py-1 text-sm hover:bg-gray-50 cursor-pointer transition-all px-2 duration-300">
                    Sign out
                  </div>
                </div>
              ) : (
                ""
              )}

              <div
                style={{
                  backgroundImage: `url(${person})`,
                }}
                className="w-[40px] h-[40px] bg rounded-full bg-cover bg-center "
              >
                {" "}
              </div>
              <div className="hidden lg:block">Tom Cook</div>
              <div className="hidden lg:block">
                <FaAngleDown />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full">
        {normNoHead || darkNoHead || lightNoHead ? (
          <Shade className="h-[90vh]" />
        ) : (
          <Shade />
        )}
      </div>
    </div>
  );
};
