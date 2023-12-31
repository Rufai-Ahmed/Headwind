import { FaDesktop } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const Mode = () => {
  return (
    <div>
      {" "}
      <div className="w-[150px] rounded-md border bg-white p-5 ">
        <div className="flex gap-5 items-center mb-5 bg-gray-50 py-1 rounded-md">
          <div className="p-2 text-blue-400 shadow-md ">
            <MdLightMode />
          </div>
          <div className="text-[14px]">Light</div>
        </div>

        <div className="flex gap-5 items-center mb-5">
          <div className="p-2 text-gray-400 shadow-md ">
            <MdDarkMode />
          </div>
          <div className="text-[14px]">Dark</div>
        </div>

        <div className="flex gap-5 items-center ">
          <div className="p-2 text-gray-400 shadow-md ">
            <FaDesktop />
          </div>
          <div className="text-[14px]">System</div>
        </div>
      </div>
    </div>
  );
};
