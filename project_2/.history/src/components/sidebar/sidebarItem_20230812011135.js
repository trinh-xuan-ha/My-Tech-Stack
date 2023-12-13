function SidebarItem(props) {
  const { icon, title, arrow } = props;
  return (
    <li>
      <div>
        <a>
          {icon}
          {title}
          {arrow}
        </a>
      </div>
    </li>
  );
}
export default SidebarItem;
