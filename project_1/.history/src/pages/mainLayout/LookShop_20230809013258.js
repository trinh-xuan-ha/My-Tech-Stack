import { Form } from "react-hook-form";
import CartLook from "./shopLook/cartLook";
import image1 from "../../../assets/images/look_shop_1.webp";
import image2 from "../../../assets/images/look_shop_2.webp";
function LookShop() {
  return (
    <nav className="look_shop">
      <div className="look_title">
        <h3>Shop The Look</h3>
        <p>Trending Outfits Of Summer</p>
      </div>
      <CartLook logo={image1}></CartLook>
      <CartLook logo={image2}></CartLook>
    </nav>
  );
}

export default LookShop;
