import { GlobalButton } from "../Templates/GlobalButton";
import { chatData, heroBtnData } from "../utils/data/data";
import { ChatBox } from "../Templates/ChatBox";
import { Toggle } from "../Templates/Toggle";
import { BookmarkBtn } from "../Templates/BookmarkBtn";
import { AudioComp } from "../Templates/AudioComp";
import { MoreComp } from "./MoreComp";
import comp from "../Assets/comp1.png";

export const Hero = () => {
  return (
    <div>
      <div className="w-full flex justify-between overflow-hidden relative flex-wrap items-center pt-32 min-h-[calc(100vh-80px)]">
        <div className="w-[100%] flex flex-col items-center lg:items-start lg:w-[50%]  lg:mb-0 ">
          <div className="text-blue-500 text-[20px] text-start w-full lg:w-auto   ">
            By the makers of Task Guardian
          </div>

          <div className="text-[#0f1011] my-6 font-[900] lg:text-[50px] text-[37px] text-center lg:text-start leading-tight w-full  ">
            Build your next idea even faster.
          </div>

          <div className="text-[17px] w-[100%] lg:w-[70%] text-[#0f1011]  ">
            Beautifully designed, expertly crafted components and templates,
            built by the makers of Tailwind CSS. The perfect starting point for
            your next project.
          </div>

          <div className=" w-full flex gap-4 my-8 flex-wrap">
            {heroBtnData.map((el) => (
              <>
                <GlobalButton
                  text={el.text}
                  icon={el.icon}
                  choice={el.choice}
                  className="w-full justify-center py-3 lg:py-2 lg:w-auto"
                />
              </>
            ))}
          </div>
        </div>

        <div className="w-[100%] lg:w-[50%] lg:relative hidden  lg:flex flex-col items-end ">
          <div className=" flex items-end gap-3 justify-end">
            <div className="flex flex-col items-end">
              <Toggle size={50} />

              <div className="flex gap-4 items-center mb-4">
                <Toggle size={40} offBg="grey" />
                <GlobalButton text="Button A" className="bg-purple-500" />
              </div>

              <BookmarkBtn num="12k" />
            </div>

            <div className="shadow-lg bg-white b rounded-md flex flex-col items-center ">
              {chatData.map((el) => (
                <div>
                  <ChatBox name={el.name} img={el.img} at={el.at} />
                </div>
              ))}
              <GlobalButton
                choice={"bare"}
                className="w-[95%] my-2"
                text="View all"
                size={"lg"}
              />
            </div>
          </div>

          <AudioComp />
        </div>

        <div>
          <img src={comp} className="w-full lg:hidden " alt="" />
        </div>
        <MoreComp />
      </div>
    </div>
  );
};
