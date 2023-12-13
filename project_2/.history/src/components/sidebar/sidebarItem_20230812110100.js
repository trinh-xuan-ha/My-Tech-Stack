function SidebarItem(props) {
  const { icon, title, arrow, className } = props;
  return (
    <li className={`nav_link ${className ? className : ""}`}>
      <div className="nav_grops">
        <a href="#">
          <span>
            {icon}
            <span>{title}</span>
          </span>
          {arrow}
        </a>
      </div>
    </li>
  );
}
export default SidebarItem;
