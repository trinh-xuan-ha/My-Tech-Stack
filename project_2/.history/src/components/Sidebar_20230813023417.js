import { FcBusinessman } from "react-icons/fc";
import React from "react";
import { BsCircle } from "react-icons/bs"; //hình tròn
import { VscCircleSmall } from "react-icons/vsc";
import SidebarItem from "./sidebar/SidebarItem";
import groupList from "./sidebar/groupList";
import "../styles/sidebar.css";
function SideBar() {
  let navClick = document.querySelector(".nav_list");
  let blockClick = document.querySelector("nav-group-children");
  let handerclick = () => {
    blockClick.style.display = "block";
  };
  return (
    <aside className="sidebar">
      <div className="sidebar_list">
        <div className="logo-sidebar">
          <FcBusinessman></FcBusinessman>
          <h1>Vuexy</h1>
          <BsCircle></BsCircle>
        </div>

        <ul className="nav_list" onClick={handerclick}>
          {groupList.map((group, index) => (
            <React.Fragment key={index}>
              <SidebarItem
                icon={group.icon}
                title={group.title}
                arrow={group.arrow}
                className={group.className ? group.className : ""}
              />
              {index === 6 && ( // Kiểm tra nếu là vị trí số 6
                <div className="nav-group-children">
                  <ul>
                    <li>
                      <a>
                        <VscCircleSmall></VscCircleSmall> List
                      </a>
                    </li>
                    <li>
                      <a>
                        <VscCircleSmall></VscCircleSmall> View
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </aside>
  );
}
export default SideBar;
