import { FcBusinessman } from "react-icons/fc";
import { BsCircle } from "react-icons/bs"; //hình tròn
import SidebarItem from "./sidebar/SidebarItem";
import groupList from "./sidebar/groupList";
import "../styles/sidebar.css";
function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_list">
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
              className={group.className ? group.className : ""} // Sử dụng tên class nếu có, hoặc không gán class
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}
export default SideBar;
