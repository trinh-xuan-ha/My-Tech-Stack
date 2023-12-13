function ContainerFrame(props) {
  const { icon, h3Text, pText } = props;
  return (
    <div className="container_cart">
      {icon}
      <div className="cart_title">
        <h3>{h3Text}</h3>
        <p>{pText}</p>
      </div>
    </div>
  );
}
export default ContainerFrame;
