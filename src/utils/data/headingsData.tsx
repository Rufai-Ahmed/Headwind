import { AiFillDollarCircle } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { TbCalendar } from "react-icons/tb";

export const headingsBtn = [
  { text: "Full-time", icon: <FaBriefcase /> },
  { text: "Remote", icon: <MdLocationPin /> },
  { text: "$120k – $140k", icon: <AiFillDollarCircle /> },
  { text: "Closing on January 9, 2020", icon: <TbCalendar /> },
];

export const headingsData = [
  {
    head: true,
    light: true,
    long: true,
    allBtn: true,
    meta: true,
  },
  {
    light: true,
    long: false,
    allBtn: false,
    meta: false,
  },
  {
    dark: true,
    long: false,
    allBtn: false,
    meta: false,
  },
  {
    light: true,
    breadcrumbs: true,
    long: false,
    allBtn: false,
    meta: false,
  },
  {
    dark: true,
    breadcrumbs: true,
    long: false,
    allBtn: false,
    meta: false,
  },
  {
    dark: true,
    breadcrumbs: false,
    allBtn: true,
    long: true,
    meta: true,
  },
];
