import { VariantProps } from "class-variance-authority";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";
import { btns } from "./cvas";

export interface iButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof btns> {
  text: string;
  nobg?: string;
  icon?: React.ReactNode;
  choice?: any;
}

export interface iChat {
  name?: string;
  img?: string;
  at?: string;
}

export interface iToggle {
  size: number;
  onBg?: string;
  offBg?: string;
  label?: boolean;
  icon?: boolean;
  rLabel?: boolean;
  short?: boolean;
  head?: boolean;
  offIcon?: boolean;
  onIcon?: boolean;
}

export interface iBook {
  num: string;
}

export interface iDrop extends HTMLAttributes<HTMLElement> {
  text: string;
  icon?: React.ReactNode;
  line?: string;
}

export interface iNotify {
  check?: boolean;
  type?: string;
  time?: string;
  users?: string;
}

export interface iNav extends HTMLAttributes<HTMLElement> {
  text: string;
  about?: string;
}

export interface iHead extends HTMLAttributes<HTMLElement> {}

export interface iCard {
  type: string;
  img: string;
  num: number | string;
}

export interface iDashboard {
  light?: boolean;
  dark?: boolean;
  compact?: boolean;
  overlap?: boolean;
  twoRow?: boolean;
  head?: boolean;
}

export interface iShade extends HTMLAttributes<HTMLElement> {}

export interface iSideBar {
  light?: boolean;
  dark?: boolean;
  normNoHead?: boolean;
  darkNoHead?: boolean;
  lightNoHead?: boolean;
}

export interface iSideNav {
  text?: string;
  icon?: React.ReactNode;
  ini?: string;
  head?: string;
  active?: boolean;
  light?: boolean;
  dark?: boolean;
  lightNoHead?: boolean;
  darkNoHead?: boolean;
}

export interface iHeadings {
  long?: boolean;
  dark?: boolean;
  light?: boolean;
  head?: boolean;
  meta?: boolean;
  allBtn?: boolean;
  breadcrumbs?: boolean;
}

export interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  drpDwn?: boolean;
  dText?: boolean | string;
  error?: boolean | string;
  disable?: boolean | string;
  head?: boolean;
  msg?: string;
  uText?: string;
}

export interface iRegister {
  head?: boolean;
  light?: boolean;
  dark?: boolean;
  label?: boolean;
  card?: boolean;
  split?: boolean;
}
export interface iModal {
  wideBtns?: boolean;
  head?: boolean;
  left?: boolean;
  center?: boolean;
  greyFoot?: boolean;
  dismiss?: boolean;
}

export interface iHeader {
  twoBtns?: boolean;
  head?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  drpDwn?: boolean;
  light?: boolean;
  dark?: boolean;
  state?: boolean;
  setState?: (args: boolean) => void | undefined;
}

export interface iDesc {
  text: string;
  head?: boolean;
}

export interface iCode {
  code: string | any;
}

export interface iNavBar {
  light?: boolean;
  dark?: boolean;
  twoRow?: boolean;
  head?: boolean;
  button?: boolean;
  search?: boolean;
  compact?: boolean;
}

export interface iInput2 extends HTMLAttributes<HTMLElement> {
  placeholder?: string;
  dark?: boolean;
  light?: boolean;
}
