import React, { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { BsCircle } from "react-icons/bs";
import { VscCircleSmall } from "react-icons/vsc";
import SidebarItem from "./sidebar/SidebarItem";
import groupList from "./sidebar/groupList";
import "../styles/sidebar.css";

function SideBar() {
  const [isGroupChildrenVisible, setIsGroupChildrenVisible] = useState(false);

  const toggleGroupChildren = () => {
    setIsGroupChildrenVisible(!isGroupChildrenVisible);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar_list">
        <div className="logo-sidebar">
          <FcBusinessman />
          <h1>Vuexy</h1>
          <BsCircle />
        </div>

        <ul className="nav_list" onClick={toggleGroupChildren}>
          {groupList.map((group, index) => (
            <React.Fragment key={index}>
              <SidebarItem
                icon={group.icon}
                title={group.title}
                arrow={group.arrow}
                className={group.className ? group.className : ""}
                onClick={toggleGroupChildren}
              />
              {index === 6 && isGroupChildrenVisible && (
                <div className="nav-group-children">
                  <ul>
                    <li>
                      <a>
                        <VscCircleSmall /> List
                      </a>
                    </li>
                    <li>
                      <a>
                        <VscCircleSmall /> View
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
