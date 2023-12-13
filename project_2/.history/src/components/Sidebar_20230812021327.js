import { FcBusinessman } from "react-icons/fc";
import { BsCircle } from "react-icons/bs"; //hình tròn
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
import SidebarItem from "./sidebar/SidebarItem";
function SideBar() {
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
  return (
    <aside className="sidebar">
      <div className="logo-sidebar">
        <FcBusinessman></FcBusinessman>
        <h1>Vuexy</h1>
        <BsCircle></BsCircle>
      </div>
      {/* const { icon, title, arrow } = props; */}
      <ul className="nav_list">
        {groupList.map((group, index) => (
          <SidebarItem
            key={index}
            icon={group.icon}
            title={group.title}
            arrow={group.arrow}
          />
        ))}
      </ul>
    </aside>
  );
}
export default SideBar;
