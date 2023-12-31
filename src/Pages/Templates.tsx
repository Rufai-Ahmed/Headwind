import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CompNav } from "../Templates/CompNav";
import { tempData } from "../utils/data/data";
import blue from "../Assets/blue.png";
import pink from "../Assets/pink.png";
import dblue from "../Assets/dblue.png";
import mb from "../Assets/mb.png";

export const Templates = () => {
  return (
    <div>
      <div className="pb-20 pt-40 w-[100%] lg:w-[70%] xl:w-[55%] ">
        <div>
          <strong className="text-sky-500">Templates</strong>
        </div>

        <div className="my-5">
          <strong className="text-[40px] leading-tight ">
            Production-ready website templates, built the way you want them.
          </strong>
        </div>

        <div className="text-[20px] mb-5">
          Visually-stunning, easy to customize site templates built with React
          and Next.js. The perfect starting point for your next project and the
          ultimate resource for learning how experts build real websites with
          Tailwind CSS.
        </div>

        <strong className="flex gap-5 items-center text-sky-500">
          <div>Explore all templates</div>
          <div>
            <FaArrowRight />
          </div>
        </strong>
      </div>
      <div className="grid w-full gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
        {tempData.map((el) => (
          <NavLink
            to={`/`}
            style={({ isActive }) => {
              return {
                color: isActive ? "#20a9ea" : "black",
              };
            }}
          >
            <CompNav className="" text={el.text} about={el.about} />
          </NavLink>
        ))}
      </div>
      <div className=" flex overflow-hidden hover:overflow-x-auto cursor-pointer transition-all duration-300 gap-5 my-20">
        {[pink, dblue, blue, mb].map((el) => (
          <img
            src={el}
            className="rounded-md h-[300px] w-full object-cover  "
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
