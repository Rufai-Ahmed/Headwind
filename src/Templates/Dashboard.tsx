import { FC } from "react";
import { iDashboard } from "../utils/interfaces";
import { GlobalInput } from "./GlobalInput";
import { Description } from "./Description";
import { Shade } from "./Shade";
import { Navbar } from "./Navbar";

export const Dashboard: FC<iDashboard> = ({
  light,
  dark,
  compact,
  overlap,
  twoRow,
  head,
}) => {
  return (
    <>
      {head ? (
        <Description text="Dark nav with white page header" head={true} />
      ) : (
        ""
      )}

      {light ? (
        <Description head={false} text="Light nav with bottom border" />
      ) : compact ? (
        <Description text="Branded nav with compact white page header" />
      ) : overlap ? (
        <Description text="Dark nav with overlap" />
      ) : twoRow ? (
        <Description text="Two-row navigation with overlap" />
      ) : (
        ""
      )}

      <div
        className={`rounded-md shadow-md mb-10 ${
          overlap ? "h-[80vh] mb-20" : ""
        } ${twoRow ? "bg-slate-100 mt-0 lg:h-[80vh] h-[140vh]" : ""}`}
      >
        <div
          className={
            dark
              ? "flex bg-[#1f2937] rounded-t-md items-center justify-center"
              : light
              ? "flex bg-[white]  border-b rounded-t-md items-center justify-center"
              : compact
              ? "flex bg-[#2c286e] rounded-t-md items-center justify-center"
              : twoRow
              ? "flex bg-[#2c286e] h-[40%]  relative rounded-t-md items-center justify-start border-b flex-col"
              : overlap
              ? "flex bg-[#1f2937] h-[50%] rounded-t-md items-center justify-start relative border-b flex-col "
              : "flex bg-[#1f2937] rounded-t-md items-center justify-center"
          }
        >
          <div
            className={`w-[90%] py-4  flex items-center justify-between ${
              overlap || twoRow ? "mt-10 border-b pb-4 border-[#b0b0b0]" : ""
            }`}
          >
            <div className="w-full">
              <Navbar light={light} twoRow={twoRow} />
            </div>
          </div>

          {twoRow ? (
            <div className="w-[95%] mt-20 gap-10 grid grid-cols-5 absolute top-[40%] lg:top-[30%]">
              <div className="col-span-5 lg:col-span-3">
                <div className="gap-5 hidden lg:flex text-white my-5">
                  <div>Home</div>
                  <div>Profile</div>
                  <div>Resources</div>
                  <div>Company Directory</div>
                  <div>Openings</div>
                </div>
                <div className=" shadow-md bg-white rounded-md  h-[50vh] ">
                  <Shade className="h-[50vh]" />
                </div>
              </div>

              <div className="col-span-5 lg:col-span-2">
                <div className="hidden lg:block">
                  <GlobalInput className="my-5 mt-0 bg-white" />
                </div>

                <div className="w-full  h-[50vh] bg-white rounded-md shadow-md ">
                  <Shade className="h-[50vh]" />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {overlap ? (
            <div className="w-[90%] absolute top-1/2">
              <div className="text-white text-[30px] font-bold">Dasboard</div>
              <div className="w-full h-[45vh] bg-white rounded-md shadow-md mt-5">
                <Shade className="h-[45vh]" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {overlap || twoRow ? (
          ""
        ) : (
          <div
            className={`shadow-sm py-6 bg-white text-[35px] flex justify-center font-bold ${
              compact ? "text-[15px]" : ""
            } `}
          >
            <div className="w-[90%]">Dashboard</div>
          </div>
        )}

        {overlap || twoRow ? (
          ""
        ) : (
          <div className="bg-gray-100 mb-32 h-[60vh] ">
            <Shade className="h-[60vh]" />
          </div>
        )}
      </div>
    </>
  );
};
