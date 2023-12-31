import { Project } from "../Templates/Project";
import { Settings } from "../Templates/Settings";
import { Notification } from "../Templates/Notification";
import { notifyData } from "../utils/data/data";
import { Table } from "../Templates/Table";
import { MobileHeader } from "../Templates/MobileHeader";
import { Mode } from "../Templates/Mode";
import { Assign } from "../Templates/Assign";
import comp from "../Assets/comp.png";

export const MoreComp = () => {
  return (
    <div className="w-full justify-end ">
      <div className="lg:flex hidden pb-10 flex-col gap-5  items-end">
        <div className="flex flex-row-reverse items-center gap-5 ">
          <div className="flex flex-col gap-5 mt-5">
            <Project />
            <Settings />
          </div>

          <div className=" flex justify-end flex-col gap-5">
            <div className="flex gap-5 justify-end items-end">
              <div className="flex flex-col items-end gap-5">
                <Table />

                <MobileHeader />
              </div>

              <div className="flex flex-col items-end gap-5">
                {notifyData.map((el) => (
                  <Notification
                    check={el.check}
                    time={el.time}
                    users={el.users}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-5 justify-end items-start ">
              <Mode />
              <Assign />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={comp} className="w-full lg:hidden " alt="" />
      </div>
    </div>
  );
};
