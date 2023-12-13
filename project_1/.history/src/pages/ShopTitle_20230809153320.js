import { useState } from "react";
import ShopTitleCart from "./mainLayout/shoptitle/ShopTitleCart";
function ShopTitle() {
  // const [currenGroup, setCurrenGroup] = useState(1);
  const groupList = [
    {
      Comment:
        "Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!!",
      user: "Christina M. - From Canada",
    },
    {
      Comment:
        "Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!!",
      user: "David Jame. - From America",
    },
    {
      Comment:
        "Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!!",
      user: "Taylor S - From Germany",
    },
  ];
  // const handleButtonClick = (groupNumber) => {
  //   setCurrenGroup(groupNumber);
  // };
  return (
    <div className="shop-title-Cart">
      <h5>TESTIMONIAL</h5>
      <div className="main-shop-title">
        {groupList.map((comment, index) => (
          <ShopTitleCart
            key={index}
            comment={comment.Comment}
            user={comment.user}
          />
        ))}
      </div>
      <div className="shoptitle_btn">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
}
export default ShopTitle;
