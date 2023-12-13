function MainCart(props) {
  const { image1, image2, h4Text, pText, spanText } = props;
  return (
    <div className="main_cart">
      <div className="cart-img">
        <img className="image_1" src={image1} alt="error" />
        <img className="image_2" src={image2} alt="error" />
      </div>
      <div className="cart-title">
        <h4>{h4Text}</h4>
        <p>{pText}</p>
        <span>{spanText}</span>
      </div>
    </div>
  );
}
export default MainCart;
