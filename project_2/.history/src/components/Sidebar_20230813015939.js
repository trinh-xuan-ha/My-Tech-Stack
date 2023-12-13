import { FcBusinessman } from "react-icons/fc";
import { BsCircle } from "react-icons/bs"; //hình tròn
import { VscCircleSmall } from "react-icons/vsc";
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
          <div className="nav-group-children">
            <ul>
              <li>
                <a>List</a>
              </li>
              <li>
                <a>
                  <VscCircleSmall></VscCircleSmall> View
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </aside>
  );
}
export default SideBar;
