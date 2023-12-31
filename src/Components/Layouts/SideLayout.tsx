import { FC } from "react";
import { Sidebar } from "../../Templates/Sidebar";
import { SideComp } from "../SideComp";
import { Description } from "../../Templates/Description";

interface iLayout {
  head?: boolean;
  light?: boolean;
  dark?: boolean;
  normNoHead?: boolean;
  darkNoHead?: boolean;
  lightNoHead?: boolean;
  offwhite?: boolean;
}

export const SideLayout: FC<iLayout> = ({
  head,
  light,
  dark,
  normNoHead,
  darkNoHead,
  lightNoHead,
  offwhite,
}) => {
  return (
    <>
      {head ? (
        <Description head={true} text="Brand sidebar with header" />
      ) : (
        <Description
          text={
            light
              ? "Light sidebar with header"
              : dark
              ? "Dark sidebar with header"
              : normNoHead
              ? "Brand sidebar"
              : darkNoHead
              ? "Dark sidebar"
              : lightNoHead
              ? "Light sidebar"
              : offwhite
              ? "Light sidebar with off-white background"
              : ""
          }
        />
      )}

      <div className="flex mb-16  rounded-lg overflow-y-auto w-full">
        <div className="w-[350px] hidden xl:block  ">
          <Sidebar
            light={light}
            dark={dark}
            normNoHead={normNoHead}
            darkNoHead={darkNoHead}
            lightNoHead={lightNoHead}
          />
        </div>
        <div className="w-full bg-white shadow-lg overflow-hidden border rounded-r-md">
          <SideComp
            light={light}
            dark={dark}
            normNoHead={normNoHead}
            darkNoHead={darkNoHead}
            lightNoHead={lightNoHead}
          />
        </div>
      </div>
    </>
  );
};
