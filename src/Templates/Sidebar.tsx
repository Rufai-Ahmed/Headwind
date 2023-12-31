import { MdSettings } from "react-icons/md";
import { SideNav } from "../Components/SideNav";
import darkLogo from "../Assets/wind.png";
import logo from "../Assets/whitelogo.png";
import person from "../Assets/person.avif";
import { FC } from "react";
import { iSideBar } from "../utils/interfaces";
import { sideNavData } from "../utils/data/sidebarData";
export const Sidebar: FC<iSideBar> = ({
  light,
  dark,
  normNoHead,
  darkNoHead,
  lightNoHead,
}) => {
  return (
    <div>
      <div
        className={
          dark || darkNoHead
            ? "bg-[#111827] w-full rounded-l-lg flex flex-col  min-h-[90vh] border items-center 2xl:h-[90vh] "
            : `w-full rounded-l-lg bg-[#4f46e5] flex flex-col  min-h-[90vh] border items-center 2xl:h-[90vh]  ${
                light || lightNoHead ? "bg-white" : ""
              }`
        }
      >
        <div
          className={
            lightNoHead || darkNoHead || normNoHead
              ? "flex flex-col min-h-[90%] w-[85%]"
              : "flex flex-col min-h-[95%] justify-between w-[85%]"
          }
        >
          <div>
            {light || lightNoHead ? (
              <img className="mt-7 ml-3 mb-7 h-[20px]" src={darkLogo} alt="" />
            ) : (
              <img className="mt-7 ml-3 mb-7 h-[20px]" src={logo} alt="" />
            )}

            <div className="flex flex-col gap-2">
              {sideNavData.map((el) => (
                <SideNav
                  lightNoHead={lightNoHead}
                  darkNoHead={darkNoHead}
                  light={light}
                  dark={dark}
                  head={el.head}
                  icon={el.icon}
                  ini={el.ini}
                  text={el.text}
                  active={el.active}
                />
              ))}
            </div>
          </div>
          {normNoHead || darkNoHead || lightNoHead ? (
            ""
          ) : (
            <div className="mb-5 mt-5 2xl:mt-0">
              <SideNav light={light} icon={<MdSettings />} text="Settings" />
            </div>
          )}
        </div>
        {normNoHead || darkNoHead || lightNoHead ? (
          <div
            className={
              dark || darkNoHead
                ? "hover:bg-[#1f2937] w-full flex gap-3 cursor-pointer transition-all duration-300 items-center py-3 pl-5 mt-10 2xl:mt-0  "
                : ` ${
                    lightNoHead ? "hover:bg-[#f9fafb]" : ""
                  }  w-full flex gap-3 cursor-pointer hover:bg-[#4338ca] transition-all duration-300 items-center py-3 pl-5  mt-10 2xl:mt-0 `
            }
          >
            <div
              style={{
                backgroundImage: `url(${person})`,
              }}
              className="w-[32px] h-[32px]  rounded-full bg-cover bg-center "
            ></div>
            <div
              className={
                lightNoHead
                  ? "text-[#111827] font-bold text-[15px]"
                  : "text-white font-bold text-[15px]"
              }
            >
              Tom Cook
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
