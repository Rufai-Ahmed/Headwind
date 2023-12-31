import { FaArrowRight, FaFolder, FaHashtag } from "react-icons/fa";
import example from "../../Assets/775118.jpg";
import { AiFillFileAdd, AiFillFolderAdd } from "react-icons/ai";
import { MdLabel } from "react-icons/md";
import stacked from "../../Assets/Components/stacked.png";
import sidebar from "../../Assets/Components/sidebar.png";
import headings from "../../Assets/Components/headings.png";
import toggle from "../../Assets/Components/toggle.png";
import input from "../../Assets/Components/input.png";
import signin from "../../Assets/Components/signin.png";
import m from "../../Assets/Components/modal.png";
import header from "../../Assets/Components/header.png";
import navbars from "../../Assets/Components/navbars.png";
import { Dashboard } from "../../Templates/Dashboard";
import { SideLayout } from "../../Components/Layouts/SideLayout";
import { Headings } from "../../Templates/Headings";
import { sidebarData } from "./sidebarData";
import { dashboardData } from "./dashboardData";
import { headingsData } from "./headingsData";
import { toggleData } from "./toggleData";
import { ToggleDisplay } from "../../Templates/ToggleDisplay";
import { inputData } from "./inputGroup";
import { InputDisplay } from "../../Templates/InputDisplay";
import { registerData } from "./RegisterData";
import { RegisterDisplay } from "../../Templates/RegisterDisplay";
import { modalData } from "./modalData";
import { ModalDisplay } from "../../Templates/ModalDisplay";
import { headerData } from "./headerData";
import { HeaderDisplay } from "../../Templates/HeaderDisplay";
import { navbarsData } from "./navbarsData";
import { NavbarsDisplay } from "../../Templates/NavbarsDisplay";

export const heroBtnData = [
  { text: "Browse components", icon: <FaArrowRight />, choice: "" },
  {
    text: "Explore templates",
    icon: <FaArrowRight />,
    choice: "bare",
  },
];

export const chatData = [
  { name: "Rufai Ahmed", img: example, at: "AD" },
  { name: "Abbey Rufai", img: example, at: "AR" },
  { name: "Olanrewaju Rufai", img: example, at: "OR" },
];

export const projData = [
  { text: "Headwind Labs/ Website Redesign", icon: <FaFolder /> },
  { text: "Headwind Labs/ Website Redesign", icon: <FaFolder /> },
  { text: "Headwind Labs/ Website Redesign", icon: <FaFolder />, line: "2" },
  { text: "Add new file", icon: <AiFillFileAdd /> },
  { text: "Add new folder", icon: <AiFillFolderAdd /> },
  { text: "Add hashtag", icon: <FaHashtag /> },
  { text: "Add label", icon: <MdLabel /> },
];

export const notifyData = [
  { check: true, time: "an hour ago", users: "621" },
  { check: false, time: "an hour ago", users: "1200" },
];

export const compData = [
  {
    text: "Application UI",
    about:
      "Form layouts, tables, modal dialogs — everything you need to build a beautiful responsive web applications.",
  },
  {
    text: "Marketing",
    about:
      "Form layouts, tables, modal dialogs — everything you need to build a beautiful responsive web applications.",
  },
  {
    text: "Ecommerce",
    about:
      "Form layouts, tables, modal dialogs — everything you need to build a beautiful responsive web applications.",
  },
];
export const tempData = [
  {
    text: "Primer",
    about:
      "We’ve actually published four info products ourselves and this landing page is honestly better than the sites we designed for all of those",
  },
  {
    text: "Transmit",
    about:
      "You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.",
  },
  {
    text: "Syntax",
    about:
      "Writing documentation is enough to make you rip your hair out without worrying about the design. Let us help you keep a few strands.",
  },
  {
    text: "Salient",
    about:
      "Every SaaS marketing site uses the same formula — a hero, feature sections, some testimonials, you know the drill. But some are prettier than others.",
  },
];

export const mainCompData = [
  {
    type: "Stacked Layouts",
    num: dashboardData.length,
    img: stacked,
    component: dashboardData.map((el) => (
      <Dashboard
        head={el.head}
        compact={el.compact}
        dark={el.dark}
        light={el.light}
        overlap={el.overlap}
        twoRow={el.twoRow}
      />
    )),
  },
  {
    type: "Sidebar Layouts",
    num: sidebarData.length,
    img: sidebar,
    component: (
      <div className="flex flex-col ">
        {sidebarData.map((el) => (
          <SideLayout
            dark={el.dark}
            darkNoHead={el.darkNoHead}
            head={el.head}
            light={el.light}
            lightNoHead={el.lightNoHead}
            normNoHead={el.normNoHead}
          />
        ))}
      </div>
    ),
  },
  {
    type: "Page Headings",
    num: headingsData.length,
    img: headings,
    component: headingsData.map((el) => (
      <Headings
        head={el.head}
        light={el.light}
        long={el.long}
        allBtn={el.allBtn}
        dark={el.dark}
        breadcrumbs={el.breadcrumbs}
        meta={el.meta}
      />
    )),
  },
  {
    type: "Toggle",
    num: toggleData.length,
    img: toggle,
    component: toggleData.map((el) => (
      <ToggleDisplay
        head={el.head}
        size={el.size}
        short={el.short}
        icon={el.icon}
        label={el.label}
        rLabel={el.rLabel}
      />
    )),
  },
  {
    type: "Input Groups",
    num: inputData.length,
    img: input,
    component: inputData.map((el) => (
      <InputDisplay
        label={el.label}
        placeholder={el.placeholder}
        head={el.head}
        dText={el.dText}
        error={el.error}
        drpDwn={el.drpDwn}
        icon={el.icon}
        disable={el.disabled}
      />
    )),
  },
  {
    type: "Sign-in and Registration",
    num: registerData.length,
    img: signin,
    component: registerData.map((el) => (
      <RegisterDisplay
        head={el.head}
        light={el.light}
        dark={el.dark}
        label={el.label}
        card={el.card}
        split={el.split}
      />
    )),
  },
  {
    type: "Modal",
    num: modalData.length,
    img: m,
    component: modalData.map((el) => (
      <ModalDisplay
        head={el.head}
        left={el.left}
        center={el.center}
        greyFoot={el.greyFoot}
        dismiss={el.dismiss}
        wideBtns={el.wideBtns}
      />
    )),
  },

  {
    type: "Headers",
    num: headerData.length,
    img: header,
    component: headerData.map((el) => (
      <HeaderDisplay
        light={el.light}
        dark={el.dark}
        left={el.left}
        right={el.right}
        twoBtns={el.twoBtns}
        head={el.head}
        drpDwn={el.drpDwn}
        center={el.center}
      />
    )),
  },
  {
    type: "Navbars",
    num: navbarsData.length,
    img: navbars,
    component: navbarsData.map((el) => (
      <NavbarsDisplay
        light={el.light}
        button={el.button}
        search={el.search}
        dark={el.dark}
        head={el.head}
      />
    )),
  },
];
