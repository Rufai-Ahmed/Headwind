import { FaCube, FaGithub } from "react-icons/fa";
import { MdMenu, MdLightMode } from "react-icons/md";

export const MobileHeader = () => {
  return (
    <div>
      {" "}
      <div className="w-[400px] rounded-md py-4 bg-white px-3 flex items-center border shadow-md ">
        <div className=" flex justify-between items-center w-[95%]">
          <div className="flex items-center gap-5 text-[30px]">
            <div>
              <MdMenu size={25} />
            </div>
            <div className="text-blue-400">
              <FaCube />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="rounded-md text-blue-400 bg-white shadow-md p-2 ">
              <MdLightMode size={20} />
            </div>
            <div>v3.0</div>
            <div>
              <FaGithub size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
