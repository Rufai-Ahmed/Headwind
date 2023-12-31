import { FaHome, FaFolder, FaCalendar, FaFileArchive } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

export const sideNavData = [
  {
    text: "Dashboard",
    icon: <FaHome />,
    active: true,
  },
  {
    text: "Team",
    icon: <MdGroup />,
  },
  {
    text: "Projects",
    icon: <FaFolder />,
  },
  {
    text: "Calendar",
    icon: <FaCalendar />,
  },
  {
    text: "Documents",
    icon: <FaFileArchive />,
  },
  {
    text: "Reports",
    icon: <FaFileArchive />,
  },
  {
    text: "Heroicons",
    head: "Your teams",
    ini: "H",
  },
  {
    text: "Headwind Labs",
    ini: "T",
  },
  {
    text: "Workation",
    ini: "W",
  },
];

export const sidebarData = [
  {
    head: true,
  },
  {
    light: true,
  },
  {
    normNoHead: true,
  },
  {
    darkNoHead: true,
  },
  {
    lightNoHead: true,
  },
  {
    dark: true,
  },
];
