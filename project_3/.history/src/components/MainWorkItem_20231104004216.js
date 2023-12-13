function MainWorkItem(props) {
  const { Item, Text, number } = props;
  return (
    <div className="logo-item">
      <div className={`item-logo-icon number-${number}`}>
        <img src={Item} alt="error"></img>
      </div>
      <p className="logo-icon-text">{Text}</p>
    </div>
  );
}
export default MainWorkItem;
