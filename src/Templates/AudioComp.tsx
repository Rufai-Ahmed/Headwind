import { FaPlayCircle } from "react-icons/fa";
import { FaVolumeLow } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";
import { TbRewindBackward15, TbRewindForward15 } from "react-icons/tb";

export const AudioComp = () => {
  return (
    <div className="w-[600px] border bg-white flex items-center rounded-md shadow-md h-[70px] mt-5 px-5 ">
      <div className="flex gap-5 text-[30px]">
        <div>
          <TbRewindBackward15 className="text-[grey]" />
        </div>
        <div>
          <FaPlayCircle />
        </div>
        <div>
          <TbRewindForward15 className="text-[grey]" />
        </div>
      </div>

      <div className="h-[100%] bg-gray-300 w-[1px] mx-4 " />

      <div className="flex items-center">
        <div>00:51</div>
        <div className="relative w-[240px] h-[10px] mx-3 bg-purple-500 rounded-md ">
          <div className="h-[25px] bg-purple-500 rounded-sm border-l border-white  w-[5px] -top-2 z-10 absolute left-[40%] " />
          <div className="flex bg-gray-200 rounded-md h-full absolute right-0 w-[60%] " />
        </div>
        <div>55:43</div>
      </div>

      <div className="w-full flex justify-evenly">
        <FaVolumeLow />
        <MdMoreVert />
      </div>
    </div>
  );
};
