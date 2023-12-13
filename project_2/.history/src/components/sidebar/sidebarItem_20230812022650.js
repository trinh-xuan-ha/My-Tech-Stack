function SidebarItem(props) {
  const { icon, title, arrow } = props;
  return (
    <li className="nav_link">
      <div className="nav_grops">
        <a href="#">
          {icon}
          <span>{title}</span>
          {arrow}
        </a>
      </div>
    </li>
  );
}
export default SidebarItem;