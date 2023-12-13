function MainWorkItem(props) {
  const { Item, Text } = props;
  return (
    <div className="logo-item">
      <div className="item-logo-icon">
        <img src={Item} alt="error" />
      </div>
      <p className="logo-icon-text">{Text}</p>
    </div>
  );
}
export default MainWorkItem;
