function MainCart(props) {
  const { title, number, hundredths, hadtag, icon } = props;
  return (
    <div className="cart-title">
      <div className="cart-title_padding">
        <div className="cart-text">
          <span>{title}</span>
          <div className="cart-center">
            <h5>{number}</h5>
            <span>{hundredths}</span>
          </div>
          <span>{hadtag}</span>
        </div>
        <div className="cart-icon">{icon}</div>
      </div>
    </div>
  );
}
export default MainCart;
