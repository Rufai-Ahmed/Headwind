import { GlobalInput } from "./GlobalInput";
import logo from "../Assets/wind.png";
import { FC } from "react";
import { iNavBar } from "../utils/interfaces";
import img from "../Assets/775118.jpg";
import { AiOutlineBell } from "react-icons/ai";
import { MdMenu } from "react-icons/md";
import { GlobalButton } from "./GlobalButton";
import { BsPlus } from "react-icons/bs";

export const Navbar: FC<iNavBar> = ({
  light,
  twoRow,
  button,
  search,
  compact,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex  items-center text-[15px] gap-6">
        <div>
          <img className="h-[30px]" src={logo} alt="" />
        </div>
        {twoRow ? (
          <GlobalInput className="lg:hidden" />
        ) : (
          <div className=" hidden lg:flex items-center gap-5">
            <div className="px-2 py-2 cursor-pointer bg-[#131922] rounded-md text-white">
              Dashboard
            </div>
            <div
              className={
                light
                  ? "px-2 py-2 cursor-pointer hover:bg-[#2e3a4a] rounded-md text-[#131922] hover:text-white duration-300 transition-all "
                  : `px-2 py-2 cursor-pointer hover:bg-[#2e3a4a] rounded-md text-white duration-300 transition-all `
              }
            >
              Team
            </div>
            <div
              className={
                light
                  ? "px-2 py-2 cursor-pointer hover:bg-[#2e3a4a] rounded-md text-[#131922] hover:text-white duration-300 transition-all "
                  : `px-2 py-2 cursor-pointer hover:bg-[#2e3a4a] rounded-md text-white duration-300 transition-all `
              }
            >
              Projects
            </div>
            <div
              className={
                light
                  ? "px-2 py-2 cursor-pointer hover:bg-[#2e3a4a] rounded-md text-[#131922] hover:text-white duration-300 transition-all "
                  : `px-2 py-2 cursor-pointer hover:bg-[#2e3a4a] rounded-md text-white duration-300 transition-all `
              }
            >
              Calendar
            </div>
            <div
              className={
                light
                  ? "px-2 py-2 cursor-pointer hover:bg-[#2e3a4a] rounded-md text-[#131922] hover:text-white duration-300 transition-all "
                  : `px-2 py-2 cursor-pointer hover:bg-[#2e3a4a] rounded-md text-white duration-300 transition-all `
              }
            >
              Reports
            </div>
          </div>
        )}
      </div>

      {search ? (
        <div className=" flex items-center justify-center">
          <div className="w-[100%] md:w-[300px]">
            <GlobalInput light={light} placeholder="Search" />
          </div>
        </div>
      ) : (
        ""
      )}

      <div>
        <div className="hidden lg:flex items-center gap-5">
          {button ? (
            <div>
              <GlobalButton
                text="New Job"
                className="flex-row-reverse bg-violet-500"
                icon={<BsPlus size={24} />}
              />
            </div>
          ) : (
            ""
          )}
          <AiOutlineBell
            size={25}
            className={compact || twoRow ? "text-white" : "text-[grey]"}
          />

          <div
            className="rounded-full cursor-pointer bg-contain w-10 h-10"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
        <div
          className={`${
            light ? "text-[#1f2937]" : ""
          } flex text-[30px] lg:hidden text-white`}
        >
          {light ? <MdMenu className="text-[#1f2937]" /> : <MdMenu />}
        </div>
      </div>
    </div>
  );
};
