import { FC } from "react";
import { iButton } from "../utils/interfaces";
import { cn } from "../utils/cns";
import { btns } from "../utils/cvas";

export const GlobalButton: FC<iButton> = ({
  text,
  className,
  nobg,
  icon,
  choice,
  size,
  ...props
}) => (
  <button {...props} className={cn(btns({ choice, size }), className)}>
    <div>{text}</div>
    <div>{icon}</div>
  </button>
);
