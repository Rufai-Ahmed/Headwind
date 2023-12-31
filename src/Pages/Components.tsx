import { FaArrowRight } from "react-icons/fa";
import { CompNav } from "../Templates/CompNav";
import { NavLink } from "react-router-dom";
import { compData, mainCompData } from "../utils/data/data";
import { Card } from "../Templates/Card";

export const Components = () => {
  return (
    <div id="comp">
      <div className="pb-20 pt-40 w-[100%] lg:w-[70%] xl:w-[55%] ">
        <div>
          <strong className="text-purple-500">Components</strong>
        </div>

        <div className="my-5">
          <strong className="text-[40px] leading-tight ">
            Beautifully crafted UI components, ready for your next project.
          </strong>
        </div>

        <div className="text-[20px] mb-5">
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize to your heart’s content.
        </div>

        <strong className="flex gap-5 items-center text-purple-500">
          <div>Browse all components</div>
          <div>
            <FaArrowRight />
          </div>
        </strong>
      </div>
      <div className="grid w-full gap-2 grid-cols-3 mb-10">
        {compData.map((el) => (
          <NavLink
            to={`/`}
            style={({ isActive }) => {
              return {
                color: isActive ? "purple" : "black",
              };
            }}
          >
            <CompNav className="" text={el.text} about={el.about} />
          </NavLink>
        ))}
      </div>

      <div className="w-full grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  ">
        {mainCompData.map((el) => (
          <NavLink
            to={`/applications/${el.type.split(" ").join("").toLowerCase()}`}
          >
            <Card type={el.type} img={el.img} num={el.num} key={el.type} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
