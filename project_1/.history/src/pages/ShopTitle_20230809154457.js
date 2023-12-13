import { useState } from "react";
import ShopTitleCart from "./mainLayout/shoptitle/ShopTitleCart";

function ShopTitle() {
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

  const [currentGroup, setCurrentGroup] = useState(0);

  return (
    <div className="shop-title-Cart">
      <h5>TESTIMONIAL</h5>
      <div className="main-shop-title">
        <ShopTitleCart
          comment={groupList[currentGroup].Comment}
          user={groupList[currentGroup].user}
        />
      </div>
      <div className="shoptitle_btn">
        <button onClick={() => setCurrentGroup(0)}>1</button>
        <button onClick={() => setCurrentGroup(1)}>2</button>
        <button onClick={() => setCurrentGroup(2)}>3</button>
      </div>
    </div>
  );
}

export default ShopTitle;
