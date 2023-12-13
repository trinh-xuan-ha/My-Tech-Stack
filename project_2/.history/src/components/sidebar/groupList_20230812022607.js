import React from "react";
import { RiHomeSmileLine } from "react-icons/ri"; //home
import { HiOutlineMail } from "react-icons/hi"; //email
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { CiCalendarDate } from "react-icons/ci";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { AiOutlineFile } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
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
