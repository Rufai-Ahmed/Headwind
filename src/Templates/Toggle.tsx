import { FC, useState } from "react";
import { FaCheck, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { iToggle } from "../utils/interfaces";
import {
  BsToggle2Off,
  BsToggle2On,
  BsToggleOff,
  BsToggleOn,
} from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";

export const Toggle: FC<iToggle> = ({
  size,
  short,
  onBg,
  offBg,
  onIcon,
  offIcon,
}) => {
  const Document: any = document;

  const [state, setState] = useState(false);

  const onToggle = () => {
    if (!Document.startViewTransition) {
      setState(!state);
    } else {
      Document.startViewTransition(() => {
        setState(!state);
      });
    }
  };

  return (
    <div>
      {state ? (
        onIcon ? (
          <>
            <div className="relative" onClick={onToggle}>
              <BsToggleOn
                className="text-purple-500 cursor-pointer"
                size={size}
                style={{ color: onBg }}
              />

              <div className="absolute top-[14px] cursor-pointer text-emerald-600  right-[5px]">
                <FaCheck size={12} />
              </div>
            </div>
          </>
        ) : short ? (
          <BsToggle2On
            className="text-purple-500 cursor-pointer"
            onClick={onToggle}
            size={size}
            style={{ color: onBg }}
          />
        ) : (
          <FaToggleOn
            className="text-purple-500 cursor-pointer"
            onClick={onToggle}
            size={size}
            style={{ color: onBg }}
          />
        )
      ) : offIcon ? (
        <>
          <div className="relative" onClick={onToggle}>
            <BsToggleOff
              className="text-purple-500 cursor-pointer"
              size={size}
              style={{ color: onBg }}
            />

            <div className="absolute top-[14px] cursor-pointer text-red-600  left-[7px]">
              <FaXmark size={12} />
            </div>
          </div>
        </>
      ) : short ? (
        <BsToggle2Off
          className="text-purple-500 cursor-pointer"
          onClick={onToggle}
          size={size}
          style={{ color: onBg }}
        />
      ) : (
        <FaToggleOff
          className="text-gray-700 cursor-pointer"
          onClick={onToggle}
          size={size}
          style={{ color: offBg }}
        />
      )}
    </div>
  );
};
