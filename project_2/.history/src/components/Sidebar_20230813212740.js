import React, { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { BsCircle } from "react-icons/bs";
import { VscCircleSmall } from "react-icons/vsc";
import SidebarItem from "./sidebar/SidebarItem";
import groupList from "./sidebar/groupList";
import "../styles/sidebar.css";

function SideBar() {
  const [isGroupChildrenVisible, setIsGroupChildrenVisible] = useState(false);
  const [isSidebarItemsRotated, setIsSidebarItemsRotated] = useState(false);
  const roted = document.querySelector(".sidebar_item");

  const toggleGroupChildren = () => {
    setIsGroupChildrenVisible(!isGroupChildrenVisible);
    setIsSidebarItemsRotated(!isSidebarItemsRotated);
  };
  const handleChildItemClick = (e) => {
    e.stopPropagation();
    // Handle anything else you want to do when clicking child items
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
                additionalClassName={isSidebarItemsRotated ? "rotated" : ""}
              />
              {index === 6 && isGroupChildrenVisible && (
                <div className="nav-group-children">
                  <ul>
                    <li onClick={handleChildItemClick}>
                      <a>
                        <VscCircleSmall /> List
                      </a>
                    </li>
                    <li onClick={handleChildItemClick}>
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
