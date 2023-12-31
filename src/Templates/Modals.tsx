import { FC } from "react";
import { iModal } from "../utils/interfaces";
import { TbAlertHexagon } from "react-icons/tb";
import { GlobalButton } from "./GlobalButton";
import { FaCheck } from "react-icons/fa6";
import { BsX } from "react-icons/bs";

export const Modals: FC<iModal> = ({
  center,
  dismiss,
  greyFoot,
  left,
  wideBtns,
}) => {
  return (
    <div>
      <div
        className={`bg-white relative rounded-md min-w-md w-[90%]   ${
          center && !wideBtns
            ? "md:w-[400px]"
            : wideBtns && center
            ? "md:w-[520px]"
            : "md:w-[550px]"
        }`}
      >
        {dismiss ? (
          <div className="absolute right-3 cursor-pointer top-3">
            <BsX size={30} />
          </div>
        ) : (
          ""
        )}
        <div
          className={`p-10 flex  gap-3 ${
            center
              ? "flex-col text-center items-center"
              : "flex-col items-center md:flex-row md:flex"
          }`}
        >
          <div
            className={`rounded-full  flex items-center text-[20px] justify-center w-[40px] h-[40px] ${
              center ? "text-green-500 bg-green-200" : "text-red-600 bg-red-200"
            }`}
          >
            {center ? <FaCheck /> : <TbAlertHexagon />}
          </div>
          <div className="w-[90%] text-center md:text-start ">
            <div className="text-[18px] text-center mb-4">
              {center ? (
                <strong>Payment successful</strong>
              ) : (
                <strong>Deactivate account</strong>
              )}
            </div>
            {center ? (
              <div className="text-[14px] text-center text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur amet labore.
              </div>
            ) : wideBtns ? (
              <div className="text-[14px] text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                aliquam laudantium explicabo pariatur iste dolorem animi vitae
                error totam. At sapiente aliquam accusamus facere veritatis.
              </div>
            ) : (
              <div className="text-[14px] text-gray-500">
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </div>
            )}
          </div>
        </div>

        <div
          className={`w-full gap-3 flex rounded-b-md md:flex-row  flex-col  items-center py-5 ${
            center
              ? "justify-center"
              : !greyFoot && !left
              ? "justify-end md:pr-3"
              : left
              ? "md:pl-10"
              : "bg-gray-100 md:pr-3  justify-end"
          } `}
        >
          {center && !wideBtns ? (
            <GlobalButton
              choice={"sec"}
              className="bg-violet-600 text-white justify-center w-[90%] py-2"
              text="Go back to dashboard"
            />
          ) : wideBtns && center ? (
            <div className="flex w-[90%] flex-wrap md:flex-nowrap gap-4">
              <GlobalButton choice={"bare"} className="w-full" text="Cancel" />
              <GlobalButton
                className="bg-violet-500 justify-center w-[100%]  py-3 md:py-2 text-white"
                text="Deactivate"
              />
            </div>
          ) : (
            <>
              <GlobalButton
                choice={"bare"}
                text="Cancel"
                className="bg-white justify-center w-[90%] md:w-auto py-3 md:py-2 "
              />
              <GlobalButton
                className="bg-red-500 justify-center w-[90%] md:w-auto py-3 md:py-2 text-white"
                text="Deactivate"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
