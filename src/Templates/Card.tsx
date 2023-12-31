import { FC } from "react";
import { iCard } from "../utils/interfaces";

export const Card: FC<iCard> = ({ type, img, num }) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col gap-4 transition-all duration-300 cursor-pointer rounded-md hover:bg-gray-50 group p-3">
        <div>
          <img className="rounded-md" src={img} alt="" />
        </div>
        <div className="text-[16px] group-hover:text-purple-500 duration-300 transition-all -mb-3">
          {type}
        </div>
        <div className="text-[14px] font-bold ">{num} components</div>
      </div>
    </div>
  );
};
