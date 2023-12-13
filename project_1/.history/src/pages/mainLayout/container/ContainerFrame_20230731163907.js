function ContainerFrame(props) {
  const { icon, h3Text, pText } = props;
  return (
    <div className="container_item">
      {icon}
      <div className="cart_title">
        <h3>{h3Text}</h3>
        {pText}
      </div>
    </div>
  );
}
export default ContainerFrame;
