function SidebarItem(props) {
  const { icon, title, arrow, className } = props;
  return (
    <li className={`nav_link ${className ? className : ""}`}>
      <div className="nav_group">
        <a href="#">
          <nav>
            {icon}
            <span>{title}</span>
          </nav>
          {arrow}
        </a>
      </div>
    </li>
  );
}
export default SidebarItem;
