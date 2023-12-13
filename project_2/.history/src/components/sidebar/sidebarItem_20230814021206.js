function SidebarItem(props) {
  const { icon, title, arrow, className } = props;
  return (
    <li className={`nav_link ${className ? className : ""}`}>
      <div className="nav_group">
        <link to="#">
          <nav>
            {icon}
            <span>{title}</span>
          </nav>
          {arrow}
        </link>
      </div>
    </li>
  );
}
export default SidebarItem;
