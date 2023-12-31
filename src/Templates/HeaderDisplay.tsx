import { FC, useState } from "react";
import { iHeader } from "../utils/interfaces";
import { Description } from "./Description";
import { Header } from "./Header";

export const HeaderDisplay: FC<iHeader> = ({
  head,
  center,
  dark,
  left,
  right,
  twoBtns,
}) => {
  const [state, setState] = useState(false);

  return (
    <div>
      {head ? (
        <Description head={true} text="With stacked flyout menu" />
      ) : dark ? (
        <Description text="On dark background" />
      ) : twoBtns ? (
        <Description text="With call-to-action" />
      ) : left ? (
        <Description text="With left-aligned nav" />
      ) : right ? (
        <Description text="With right-aligned nav" />
      ) : center ? (
        <Description text="With centered logo" />
      ) : (
        ""
      )}

      <div
        onClick={() => {
          setState(false);
        }}
        className={
          dark
            ? "w-full dark bg-[#111827] rounded-md border h-[80vh] mb-20"
            : "w-full bg-white rounded-md border h-[80vh] mb-20"
        }
      >
        <center>
          <Header
            state={state}
            left={left}
            right={right}
            center={center}
            setState={setState}
            twoBtns={twoBtns}
          />
        </center>
      </div>
    </div>
  );
};
