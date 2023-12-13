import { FcBusinessman } from "react-icons/fc";
import { BsCircle } from "react-icons/bs"; //hình tròn

import SidebarItem from "./sidebar/SidebarItem";
import groupList from "./sidebar/groupList";
function SideBar() {
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
