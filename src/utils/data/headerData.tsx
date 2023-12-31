import { BsPieChart, BsGrid1X2Fill } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import { TbHandClick, TbRotateClockwise } from "react-icons/tb";

export const headerData = [
  {
    head: true,
    drpDwn: true,
    light: true,
  },
  {
    dark: true,
  },
  {
    light: true,
    twoBtns: true,
  },
  {
    light: true,
    left: true,
  },
  {
    light: true,
    right: true,
  },
  {
    light: true,
    center: true,
  },
];

export const headNav = [
  {
    bold: "Analytics",
    sm: "Get a better understanding",
    icon: <BsPieChart />,
  },
  {
    bold: "Engagement",
    sm: "Speak directly to your customers",
    icon: <TbHandClick />,
  },
  {
    bold: "Security",
    sm: "Your customer's data will be safe and secure",
    icon: <FaFingerprint />,
  },
  {
    bold: "Integrations",
    sm: "Connect with third-party tools",
    icon: <BsGrid1X2Fill />,
  },
  {
    bold: "Automations",
    sm: "Build strategic funnels that will convert",
    icon: <TbRotateClockwise />,
  },
];
