import { FaDollarSign } from "react-icons/fa6";

export const inputData = [
  {
    label: "Price",
    head: true,
    drpDwn: true,
    placeholder: "0.00",
    icon: <FaDollarSign size={18} />,
  },
  {
    label: "Email",
    placeholder: "you@example.com",
  },
  {
    label: "Email",
    dText: "We'll only use this for spam.",
    placeholder: "you@example.com",
  },
  {
    label: "Email",
    error: "Not a valid email address",
  },
  {
    label: "Email",
    disabled: true,
  },
];
