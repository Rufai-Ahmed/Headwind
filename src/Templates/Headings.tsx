import { FC } from "react";
import { Description } from "./Description";
import { GlobalButton } from "./GlobalButton";
import { FaCheck, FaPencil } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";
import { iHeadings } from "../utils/interfaces";
import { headingsBtn } from "../utils/data/headingsData";
import { FaAngleRight } from "react-icons/fa";

export const Headings: FC<iHeadings> = ({
  long,
  dark,
  allBtn,
  breadcrumbs,
  head,
  meta,
  light,
}) => {
  return (
    <div>
      {head ? (
        <Description head={true} text="With meta and actions" />
      ) : light && !breadcrumbs ? (
        <Description text="With actions" />
      ) : dark && !breadcrumbs && !long ? (
        <Description text="With actions on dark" />
      ) : breadcrumbs && light ? (
        <Description text="With actions and breadcrumbs" />
      ) : allBtn && !breadcrumbs && meta && long ? (
        <Description text="With meta and actions on dark" />
      ) : breadcrumbs && dark ? (
        <Description text="With actions and breadcrumbs on dark" />
      ) : (
        ""
      )}

      <div
        className={
          long
            ? `w-full ${
                dark ? "bg-[#1f2937] text-white" : "bg-white"
              }  mb-10 rounded-md border pt-5 flex justify-center items-start  h-[400px] `
            : `w-full  mb-10 ${
                breadcrumbs ? "h-[130px]" : "h-[100px]"
              } rounded-md border flex justify-center   ${
                dark ? "bg-[#1f2937] text-white" : "bg--400 "
              } `
        }
      >
        <div className="w-[95%] text-[36px] font-bold flex items-center justify-between flex-wrap ">
          <div>
            {breadcrumbs ? (
              <div className="flex items-center gap-4 mb-3">
                <GlobalButton
                  text="Jobs"
                  icon={<FaAngleRight />}
                  className={` text-gray-400 border-none gap-5 p-0 ${
                    light ? "hover:text-black" : "hover:text-white"
                  }`}
                  choice={"bare"}
                />
                <GlobalButton
                  text="Engineering"
                  icon={<FaAngleRight />}
                  className={` text-gray-400 border-none gap-5 p-0 ${
                    light ? "hover:text-black" : "hover:text-white"
                  }`}
                  choice={"bare"}
                />
                <GlobalButton
                  text="Front End Developer"
                  className={` text-gray-400 border-none gap-5 p-0 ${
                    light ? "hover:text-black" : "hover:text-white"
                  }`}
                  choice={"bare"}
                />
              </div>
            ) : (
              ""
            )}
            <div>Front End Developer</div>
            {meta ? (
              <div className="flex items-center w-[240px] md:w-auto flex-wrap mb-5 gap-5">
                {headingsBtn.map((el) => (
                  <GlobalButton
                    text={el.text}
                    choice={"bare"}
                    icon={el.icon}
                    className={`border-none p-0 text-gray-400 flex-row-reverse `}
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex items-center gap-3">
            <GlobalButton
              choice={"bare"}
              size={"md"}
              text="Edit"
              icon={<FaPencil size={16} />}
              className={`flex-row-reverse shadow-sm hover:bg-[#434f5e] ${
                dark ? "text-white border-none bg-[#363f4b]" : ""
              }`}
            />
            {allBtn ? (
              <GlobalButton
                choice={"bare"}
                size={"md"}
                text="View"
                icon={<TbExternalLink size={16} />}
                className={`flex-row-reverse shadow-sm hover:bg-gray-100 ${
                  dark ? "text-white border-none bg-[#363f4b]" : ""
                }`}
              />
            ) : (
              ""
            )}
            <GlobalButton
              text="Publish"
              icon={<FaCheck size={16} />}
              className={`flex-row-reverse shadow-sm bg-[#6366f1] hover:bg-[#6d6fff] ${
                dark ? "" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
