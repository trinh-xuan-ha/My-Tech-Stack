import CartLook from "./shopLook/CartLook";
import image_look1 from "../../assets/images/look_shop_1.webp";
import image_look2 from "../../assets/images/look_shop_2.webp";

import "../../styles/lookShop.css";
function LookShop() {
  return (
    <nav className="look-shop">
      <div className="look-title">
        <h3>Shop The Look</h3>
        <p>Trending Outfits Of Summer</p>
      </div>
      <div className="look-shop-cart">
        <CartLook logo={image_look1} />
        <CartLook logo={image_look2} />
      </div>
    </nav>
  );
}

export default LookShop;
