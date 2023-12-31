import { mainCompData } from "../utils/data/data";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Applications = () => {
  const path = useLocation().pathname.split("/")[2];

  const choice = mainCompData.find(
    (el: { type: string; num: number; img: string }) => {
      return el.type.split(" ").join("").toLowerCase() === path;
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="pt-20">
        <div className="text-[16px] text-[grey] my- ">
          Application UI / Application Shells
        </div>

        <div className="font-bold text-[34px]">{choice?.type}</div>

        {choice?.component}
      </div>
    </div>
  );
};
