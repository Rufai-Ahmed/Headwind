import { FC } from "react";
import { iInput } from "../utils/interfaces";
import { Input } from "./Input";
import { Description } from "./Description";

export const InputDisplay: FC<iInput> = ({
  icon,
  placeholder,
  drpDwn,
  dText,
  error,
  disable,
  label,
  head,
}) => {
  return (
    <div>
      {head ? (
        <Description
          head={true}
          text="Input with inline leading add-on and trailing dropdown"
        />
      ) : label && !icon && !dText && !error && !disable ? (
        <Description text="Input with label" />
      ) : label && dText ? (
        <Description text="Input with label and help text" />
      ) : label && error ? (
        <Description text="Input with validation error" />
      ) : label && disable && !dText ? (
        <Description text="Input with disabled state" />
      ) : (
        <Description text="Input" />
      )}

      <div className="w-full mb-20 rounded-md shadow-md bg-white border py-10 flex justify-center ">
        <div className="w-[400px] ">
          <Input
            icon={icon}
            dText={dText}
            error={error}
            drpDwn={drpDwn}
            disable={disable}
            placeholder={placeholder}
            label={label}
            msg={error ? "Abracadabra" : ""}
          />
        </div>
      </div>
    </div>
  );
};
