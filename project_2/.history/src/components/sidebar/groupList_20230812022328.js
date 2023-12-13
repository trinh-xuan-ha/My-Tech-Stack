import React from "react";
import {
  RiHomeSmileLine,
  HiOutlineMail,
  HiOutlineChatBubbleOvalLeft,
  CiCalendarDate,
  FaFileInvoiceDollar,
  FaUserGroup,
  GoGear,
  AiOutlineFile,
  CiLock,
} from "react-icons";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const groupList = [
  {
    icon: <RiHomeSmileLine />,
    title: "Dashboards",
    arrow: <MdOutlineKeyboardArrowRight />,
  },
  {
    title: "APP & PAGES",
  },
  {
    icon: <HiOutlineMail />,
    title: "Email",
  },
  {
    icon: <HiOutlineChatBubbleOvalLeft />,
    title: "Chat",
  },
  {
    icon: <CiCalendarDate />,
    title: "Calendar",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Invoice",
    arrow: <MdOutlineKeyboardArrowRight />,
  },
  {
    icon: <FaUserGroup />,
    title: "User",
    arrow: <MdOutlineKeyboardArrowRight />,
  },
  {
    icon: <GoGear />,
    title: "Roles & Permissions",
    arrow: <MdOutlineKeyboardArrowRight />,
  },
  {
    icon: <AiOutlineFile />,
    title: "Pages",
    arrow: <MdOutlineKeyboardArrowRight />,
  },
  {
    icon: <CiLock />,
    title: "Authentication",
    arrow: <MdOutlineKeyboardArrowRight />,
  },
];
export default groupList;
