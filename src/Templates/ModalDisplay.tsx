import { FC } from "react";
import { iModal } from "../utils/interfaces";
import { Description } from "./Description";
import { Modals } from "./Modals";

export const ModalDisplay: FC<iModal> = ({
  wideBtns,
  head,
  left,
  center,
  greyFoot,
  dismiss,
}) => {
  return (
    <div>
      {head ? (
        <Description head={true} text="Simple with gray footer" />
      ) : wideBtns ? (
        <Description text="Centered with wide buttons" />
      ) : center ? (
        <Description text="Centered with single action" />
      ) : dismiss ? (
        <Description text="Simple with dismiss button" />
      ) : left ? (
        <Description text="Simple alert with left-aligned buttons" />
      ) : (
        <Description text="Simple alert" />
      )}

      <div className="w-full p-5 rounded-md bg-slate-600 flex md:items-center items-end h-[80vh] mb-20 justify-center">
        <Modals
          wideBtns={wideBtns}
          left={left}
          center={center}
          dismiss={dismiss}
          greyFoot={greyFoot}
        />
      </div>
    </div>
  );
};
