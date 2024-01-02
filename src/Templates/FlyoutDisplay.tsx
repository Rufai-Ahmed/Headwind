import { FC, useState } from "react";
import { iFlyout } from "../utils/interfaces";
import { Description } from "./Description";
import { Flyout } from "./Flyout";
import { FaAngleDown } from "react-icons/fa";

export const FlyoutDisplay: FC<iFlyout> = ({
  full,
  head,
  simple,
  simpleDesc,
  stacked,
  twoCol,
}) => {
  const [state, setState] = useState(false);
  const Document: any = document;

  const toggle = () => {
    if (state === false) {
      if (!Document.startViewTransition) {
        setState!(true);
      } else {
        Document.startViewTransition(() => {
          setState!(true);
        });
      }
    }
  };

  return (
    <div>
      {head && stacked ? (
        <Description text="Stacked with icons" head={true} />
      ) : full ? (
        <Description text="Full-width" />
      ) : simpleDesc ? (
        <Description text="Simple with descriptions" />
      ) : twoCol ? (
        <Description text="Two-column" />
      ) : simple ? (
        <Description text="Simple" />
      ) : (
        ""
      )}

      <div
        className="border mb-20 w-full bg-white flex justify-center rounded-md h-[80vh]"
        onClick={() => {
          if (state) {
            if (!Document.startViewTransition) {
              setState(false);
            } else {
              Document.startViewTransition(() => {
                setState(false);
              });
            }
          }
        }}
      >
        <div className="h-[70px] w-full justify-center flex gap-1 items-center relative text-[18px] font-bold">
          <div className="cursor-pointer" onClick={toggle}>
            Solution
          </div>
          <FaAngleDown className="text-gray-400" />
          {state && (
            <div
              onClick={() => {
                setState(true);
              }}
              className="absolute top-20 w-full flex justify-center "
            >
              <Flyout
                full={full}
                simple={simple}
                simpleDesc={simpleDesc}
                twoCol={twoCol}
                stacked={stacked}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
