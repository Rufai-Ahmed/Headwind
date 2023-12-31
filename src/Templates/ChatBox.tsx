import { iChat } from "../utils/interfaces";
import { GlobalButton } from "./GlobalButton";
import { FC } from "react";

export const ChatBox: FC<iChat> = ({ name, at, img }) => {
  return (
    <div className="w-[400px] rounded-md bg-white ">
      <div className="flex w-full items-center px-5 py-3 border-b justify-between ">
        <div className="flex ">
          <div>
            <img
              src={img}
              className="w-[50px] h-[50px] rounded-full mr-5 "
              alt=""
            />
          </div>
          <div>
            <div>{name}</div>
            <div>@{at}</div>
          </div>
        </div>
        <div>
          <GlobalButton
            text="View"
            className="hover:bg-gray-100 transition-all duration-300"
            choice={"bare"}
          />
        </div>
      </div>
    </div>
  );
};
