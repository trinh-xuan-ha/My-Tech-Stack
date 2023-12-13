function SidebarItem(props) {
  const { icon, title, arrow } = props;
  return (
    <li>
      <div>
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
