function SidebarItem(props) {
  const { icon, title, arrow, classname } = props;
  return (
    <li className="nav_link">
      <div className="nav_grops">
        <a href="#" className={classname}>
          {icon}
          <span>{title}</span>
          {arrow}
        </a>
      </div>
    </li>
  );
}
export default SidebarItem;
