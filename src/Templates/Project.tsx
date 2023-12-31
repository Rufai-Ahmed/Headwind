import { FaSearch } from "react-icons/fa";
import { Drop } from "../Templates/Drop";
import { projData } from "../utils/data/data";
import { useState } from "react";

export const Project = () => {
  const [state, setState] = useState(0);
  return (
    <div className="w-[400px] bg-white rounded-md border shadow-md ">
      <div className="w-full border-b py-2 px-4 flex text-[15px] items-center  gap-3">
        <FaSearch size={17} className="" />

        <input
          type="text"
          className=" outline-none bg-transparent flex-1 "
          placeholder="Search projects"
          id=""
        />
      </div>
      <div className="px-3 my-3  ">
        <div className="text-[12px] text-[grey]">Recent searches</div>
        {projData.map((el, i) => (
          <Drop
            key={i}
            onMouseEnter={() => {
              setState(i);
            }}
            onMouseLeave={() => {
              setState(i);
            }}
            className={state === i ? "bg-purple-500 text-white " : ""}
            text={el.text}
            icon={el.icon}
            line={el.line}
          />
        ))}
      </div>
    </div>
  );
};
