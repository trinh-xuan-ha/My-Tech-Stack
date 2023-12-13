function ShopTitleCart(props) {
  const { comment, user } = props;
  //   const { image1, image2, h4Text, pText, spanText } = props;

  return (
    <div className="title_comment">
      <h4>{comment}</h4>
      <span>{user}</span>
    </div>
  );
}
export default ShopTitleCart;
