import { FC } from "react";
import { iToggle } from "../utils/interfaces";
import { Description } from "./Description";
import { Toggle } from "./Toggle";

export const ToggleDisplay: FC<iToggle> = ({
  short,
  icon,
  label,
  rLabel,
  head,
}) => {
  return (
    <div>
      {head ? (
        <Description
          head={true}
          text="Simple toggle
  "
        />
      ) : short ? (
        <Description text="Short toggle" />
      ) : icon ? (
        <Description text="Toggle with icon" />
      ) : label ? (
        <Description text="With left label and description" />
      ) : rLabel ? (
        <Description text="With right label" />
      ) : (
        ""
      )}

      <div className="w-full rounded-md border shadow-md flex items-center justify-center h-[120px] bg-white mb-20">
        {short ? (
          <Toggle short={true} onBg="black" size={40} />
        ) : head ? (
          <Toggle size={40} />
        ) : label ? (
          <div className="flex gap-10 text-sm">
            <div>
              <strong className="">Available to hire</strong>
              <br />
              <div className="text-gray-400 ">
                Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
              </div>
            </div>
            <Toggle size={40} />
          </div>
        ) : rLabel ? (
          <div className="flex text-sm items-center gap-5">
            <Toggle size={40} />

            <div>
              <strong>Annual billing</strong> (Save 10%)
            </div>
          </div>
        ) : (
          <Toggle size={40} onIcon={true} offIcon={true} />
        )}
      </div>
    </div>
  );
};
