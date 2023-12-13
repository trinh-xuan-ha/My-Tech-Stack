function ShopTitleCart(props) {
  const { comment, use } = props;
  //   const { image1, image2, h4Text, pText, spanText } = props;

  return (
    <div className="title_comment">
      <h4>{comment}</h4>
      <span>{use}</span>
    </div>
  );
}
export default ShopTitleCart;
