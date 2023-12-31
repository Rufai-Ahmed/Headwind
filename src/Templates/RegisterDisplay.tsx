import { FC } from "react";
import { Description } from "./Description";
import { iRegister } from "../utils/interfaces";
import { Register } from "./Register";

export const RegisterDisplay: FC<iRegister> = ({
  head,
  light,
  dark,
  label,
  card,
  split,
}) => {
  return (
    <div>
      {head && light ? (
        <Description text="Simple" head={true} />
      ) : dark ? (
        <Description text="Simple on dark" />
      ) : !label ? (
        <Description text="Simple no labels" />
      ) : split ? (
        <Description text="Split screen" />
      ) : card ? (
        <Description text="Simple card" />
      ) : (
        ""
      )}

      <div
        className={
          dark
            ? "mb-20 w-full min-h-[700px] flex items-center justify-center rounded-md border bg-[#111827] "
            : `mb-20 w-full min-h-[700px] flex items-center justify-center rounded-md border  ${
                card ? "bg-gray-200 py-20" : "bg-white "
              }`
        }
      >
        <Register dark={dark} label={label} split={split} card={card} />
      </div>
    </div>
  );
};
