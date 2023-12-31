import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import logo from "../Assets/wind.png";
import { headNav } from "../utils/data/headerData";
import { FC, useState } from "react";
import { iHeader } from "../utils/interfaces";
import { GlobalButton } from "./GlobalButton";
import { MdMenu } from "react-icons/md";
import { BsX } from "react-icons/bs";

export const Header: FC<iHeader> = ({
  state,
  setState,
  twoBtns,
  left,
  right,
  center,
}) => {
  const Document: any = document;

  const [open, setOpen] = useState(false);

  const toggle = () => {
    if (!Document.startViewTransition) {
      setState!(!state);
    } else {
      Document.startViewTransition(() => {
        setState!(!state);
      });
    }
  };

  return (
    <div
      className="relative"
      onClick={() => {
        setState!(false);
      }}
    >
      <div className="w-[95%]  h-[80px] flex items-center justify-between">
        {left ? (
          <div className="flex items-center gap-10">
            <div className="h-[30px] cursor-pointer">
              <img className="h-[30px]" src={logo} alt="" />
            </div>

            <div className="items-center h-full gap-10 hidden lg:flex ">
              <nav
                className="flex dark:text-white h-full relative items-center gap-2 cursor-pointer"
                onClick={() => {
                  toggle();
                }}
              >
                <strong>Product</strong>
                <div className="text-gray-400 dark:hidden">
                  <FaAngleDown />
                </div>
                {state ? (
                  <div className="absolute dark:hidden transition-all duration-300  flex flex-col gap-5 p-5 top-16 w-[400px] rounded-md border shadow-md">
                    {headNav.map((el) => (
                      <div className="flex hover:bg-slate-100 group transition-all duration-300 p-4 py-3 items-center gap-3">
                        <div className="p-3 text-[20px] group-hover:text-violet-600 duration-300 transition-all bg-white rounded-md ">
                          {el.icon}
                        </div>

                        <div className="text-sm text-left">
                          <div>
                            <strong>{el.bold}</strong>
                          </div>
                          <div className="text-gray-500">{el.sm}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </nav>

              <nav className="flex dark:text-white items-center gap-2 cursor-pointer">
                <strong>Features</strong>
              </nav>

              <nav className="flex dark:text-white items-center gap-2 cursor-pointer">
                <strong>Marketplace</strong>
              </nav>

              <nav className="flex dark:text-white items-center gap-2 cursor-pointer">
                <strong>Company</strong>
              </nav>
            </div>
          </div>
        ) : (
          <>
            {center ? (
              ""
            ) : (
              <div className="h-[30px] cursor-pointer">
                <img className="h-[30px]" src={logo} alt="" />
              </div>
            )}

            {right ? (
              ""
            ) : (
              <div className="items-center h-full gap-10 hidden lg:flex ">
                <nav
                  className="flex dark:text-white h-full relative items-center gap-2 cursor-pointer"
                  onClick={() => {
                    toggle();
                  }}
                >
                  <strong>Product</strong>
                  <div className="text-gray-400 dark:hidden">
                    <FaAngleDown />
                  </div>
                  {state ? (
                    <div className="absolute dark:hidden transition-all duration-300  flex flex-col gap-5 p-5 top-16 w-[400px] rounded-md border shadow-md">
                      {headNav.map((el) => (
                        <div className="flex hover:bg-slate-100 group transition-all duration-300 p-4 py-3 items-center gap-3">
                          <div className="p-3 text-[20px] group-hover:text-violet-600 duration-300 transition-all bg-white rounded-md ">
                            {el.icon}
                          </div>

                          <div className="text-sm text-left">
                            <div>
                              <strong>{el.bold}</strong>
                            </div>
                            <div className="text-gray-500">{el.sm}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </nav>

                <nav className="flex dark:text-white items-center gap-2 cursor-pointer">
                  <strong>Features</strong>
                </nav>

                {center ? (
                  ""
                ) : (
                  <nav className="flex dark:text-white items-center gap-2 cursor-pointer">
                    <strong>Marketplace</strong>
                  </nav>
                )}

                <nav className="flex dark:text-white items-center gap-2 cursor-pointer">
                  <strong>Company</strong>
                </nav>
              </div>
            )}
          </>
        )}

        {center ? (
          <div className="h-[30px] cursor-pointer">
            <img className="h-[30px]" src={logo} alt="" />
          </div>
        ) : (
          ""
        )}

        {right ? (
          <div className="flex items-center gap-10">
            <div className="items-center h-full gap-10 hidden lg:flex ">
              <nav
                className="flex dark:text-white h-full relative items-center gap-2 cursor-pointer"
                onClick={() => {
                  toggle();
                }}
              >
                <strong>Product</strong>
                <div className="text-gray-400 dark:hidden">
                  <FaAngleDown />
                </div>
                {state ? (
                  <div className="absolute dark:hidden transition-all duration-300  flex flex-col gap-5 p-5 top-16 w-[400px] rounded-md border shadow-md">
                    {headNav.map((el) => (
                      <div className="flex hover:bg-slate-100 group transition-all duration-300 p-4 py-3 items-center gap-3">
                        <div className="p-3 text-[20px] group-hover:text-violet-600 duration-300 transition-all bg-white rounded-md ">
                          {el.icon}
                        </div>

                        <div className="text-sm text-left">
                          <div>
                            <strong>{el.bold}</strong>
                          </div>
                          <div className="text-gray-500">{el.sm}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </nav>

              <nav className="flex dark:text-white items-center gap-2 cursor-pointer">
                <strong>Features</strong>
              </nav>

              <nav className="flex dark:text-white items-center gap-2 cursor-pointer">
                <strong>Marketplace</strong>
              </nav>

              <nav className="flex dark:text-white items-center gap-2 cursor-pointer">
                <strong>Company</strong>
              </nav>
            </div>

            <div className="lg:flex dark:text-white gap-3 items-center cursor-pointer hidden ">
              <div>Log in </div>
              <div>
                <FaArrowRight size={15} />
              </div>
            </div>
          </div>
        ) : twoBtns ? (
          <div className="flex items-center">
            <GlobalButton
              text="Log in"
              choice={"bare"}
              className="border-none"
            />
            <GlobalButton
              text="Sign up"
              className="border-none bg-violet-500"
            />
          </div>
        ) : (
          <div className="lg:flex dark:text-white gap-3 items-center cursor-pointer hidden ">
            <div>Log in </div>
            <div>
              <FaArrowRight size={15} />
            </div>
          </div>
        )}

        <div
          onClick={() => {
            if (!Document.startViewTransition) {
              setOpen(!state);
            } else {
              Document.startViewTransition(() => {
                setOpen(!state);
              });
            }
          }}
          className="lg:hidden cursor-pointer"
        >
          <MdMenu size={30} />
        </div>
      </div>
      {open ? (
        <div className="w-[300px] h-[79vh] md:flex flex-col hidden lg:hidden absolute top-0 right-0 text-left bg-white border-l px-5 ">
          <div className="flex justify-between my-10 items-center">
            <div>
              <img src={logo} className="h-[30px]" alt="" />
            </div>

            <div
              onClick={() => {
                if (!Document.startViewTransition) {
                  setOpen(false);
                } else {
                  Document.startViewTransition(() => {
                    setOpen(false);
                  });
                }
              }}
            >
              <BsX size={30} />
            </div>
          </div>

          <div className="text-[16px] border-b pb-5 flex flex-col gap-5 font-bold">
            <nav>Product</nav>
            <nav>Feature</nav>
            <nav>Marketplace</nav>
            <nav>Company</nav>
          </div>

          <div className="text-[16px] mt-5 font-bold">Log in</div>
        </div>
      ) : (
        ""
      )}

      <div className="w-full h-[79vh] flex flex-col md:hidden lg:hidden absolute top-0 right-0 text-left bg-white  px-5 ">
        <div className="flex justify-between my-10 items-center">
          <div>
            <img src={logo} className="h-[30px]" alt="" />
          </div>

          <div
            onClick={() => {
              if (!Document.startViewTransition) {
                setOpen(false);
              } else {
                Document.startViewTransition(() => {
                  setOpen(false);
                });
              }
            }}
          >
            <BsX size={30} />
          </div>
        </div>

        <div className="text-[16px] border-b pb-5 flex flex-col gap-5 font-bold">
          <nav>Product</nav>
          <nav>Feature</nav>
          <nav>Marketplace</nav>
          <nav>Company</nav>
        </div>

        <div className="text-[16px] mt-5 font-bold">Log in</div>
      </div>
    </div>
  );
};
