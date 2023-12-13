function ContainerCartFrame(props) {
  const { image, h3Text, pText, aText } = props;
  return (
    <div className="container_cart">
      <div className="cart_image">
        <img src={image} alt="error" />
      </div>
      <div className="cart_text">
        <h3>{h3Text}</h3>
        <p>{pText}</p>
        <a href="#">{aText}</a>
      </div>
    </div>
  );
}
export default ContainerCartFrame;
