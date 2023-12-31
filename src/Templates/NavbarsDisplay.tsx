import { FC } from "react";
import { iNavBar } from "../utils/interfaces";
import { Description } from "./Description";
import { Navbar } from "./Navbar";

export const NavbarsDisplay: FC<iNavBar> = ({
  dark,
  button,
  search,
  head,
  light,
}) => {
  return (
    <div>
      {head ? (
        <Description
          head={true}
          text="Simple dark with menu button on mobile"
        />
      ) : button && !light ? (
        <Description text="Dark with quick action" />
      ) : light && !button && !search ? (
        <Description text="Simple with menu button on mobile" />
      ) : light && button ? (
        <Description text="With quick action" />
      ) : light && search && !button ? (
        <Description text="With search" />
      ) : dark && search ? (
        <Description text="Dark with search" />
      ) : (
        ""
      )}

      <div
        className={`h-[20vh] mb-20 rounded-md w-full  bg-gray-100 ${
          dark ? "dark" : ""
        } `}
      >
        <div className="w-full rounded-t-md pt-4 bg-white shadow-md border dark:bg-[#1f2937] h-[70px] flex justify-center ">
          <div className="w-[95%] ">
            <Navbar light={light} dark={dark} search={search} button={button} />
          </div>
        </div>
      </div>
    </div>
  );
};
