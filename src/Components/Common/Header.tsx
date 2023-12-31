import {
  FaAngleRight,
  FaArrowRight,
  FaSearch,
  FaStarAndCrescent,
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../Assets/logo.png";
import { GlobalButton } from "../../Templates/GlobalButton";
import { Link } from "react-scroll";
import { FC } from "react";
import { iHead } from "../../utils/interfaces";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Header: FC<iHead> = ({ ...props }) => {
  const url = useLocation().pathname;

  return (
    <div
      {...props}
      className={
        url === "/"
          ? "w-full h-[80px] flex justify-between items-center "
          : "w-full h-[80px] flex justify-between items-center border-b"
      }
    >
      <div className="flex gap-4 items-center">
        <div className="">
          <NavLink to={"/"}>
            <img src={logo} className="h-[30px]" alt="" />
          </NavLink>
        </div>

        <div className="px-2 py-1 hidden text-[13px] xl:flex items-center border rounded-md">
          <div>
            <FaStarAndCrescent size={15} className="mr-2 text-blue-500" />
          </div>
          <strong>Introducing Catalyst</strong>
          <div className="w-1 h-1 rounded-full mx-2 bg-black " />
          <div>A modern application UI kit for React</div>
          <FaAngleRight className="ml-2" size={13} />
        </div>
      </div>

      <div className="flex lg:hidden items-center gap-5">
        <div className="">
          <FaSearch size={22} />
        </div>

        <div>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className="lg:flex items-center hidden font-bold text-[14px] ">
        <div className="flex items-center gap-5">
          <Link to="comp" className="cursor-pointer" smooth={true}>
            Components
          </Link>
          <div>Templates</div>
          <div>Docs</div>
          <div>
            <FaSearch size={22} />
          </div>
        </div>
        <div className="h-[30px] w-[1px] bg-gray-600 mx-10 " />

        <div className="gap-3 flex">
          <GlobalButton
            text="Sign in"
            choice={"bare"}
            size={"md"}
            className=" ml-0 border-none "
          />
          <GlobalButton
            text="Get all-access"
            size={"md"}
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </div>
  );
};
