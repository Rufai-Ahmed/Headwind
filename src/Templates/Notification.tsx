import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { iNotify } from "../utils/interfaces";

export const Notification: FC<iNotify> = ({ check, type, time, users }) => {
  return (
    <div>
      {" "}
      <div
        className={`w-[350px] p-5 bg-white  rounded-md border-[3px] shadow-md ${
          check ? "border-purple-500" : "border-[1px]  "
        } `}
      >
        <div className="flex w-full items-center justify-between">
          <strong>{type ? type : "Newsletter"}</strong>
          {check && <FaCheckCircle className="text-purple-500" />}
        </div>
        <div className="text-[13px]">Last message sent {time}</div>

        <div className="font-semibold text-[14px] mt-5 ">{users} users</div>
      </div>
    </div>
  );
};
