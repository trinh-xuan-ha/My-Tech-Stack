import React from "react";
function SidebarItem(props) {
  const { icon, title, arrow, className, isArrowRotated } = props;
  return (
    <li className={`nav_link ${className ? className : ""}`}>
      <div className="nav_group">
        <a href="#">
          <nav>
            {icon}
            <span>{title}</span>
          </nav>
          {React.cloneElement(arrow, {
            className: `${arrow.props.className} ${
              isArrowRotated ? "rotated" : ""
            }`,
          })}
        </a>
      </div>
    </li>
  );
}
export default SidebarItem;
