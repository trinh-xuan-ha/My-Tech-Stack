import CartLook from "./shopLook/CartLook";
import image_look1 from "../../assets/images/1_066d9152-8837-4f30-ae4d-583c3a1a95e7_720x_5.1.webp";
import image_look2 from "../../assets/images/look_shop_2.webp";
import image_2 from "../../assets/images/3_cf3a35ed-254a-4d62-9a2e-24254e42c60f_720x_2.1.webp";
import image_3 from "../../assets/images/1_62d94e0a-e49c-4fb1-8a64-2b11e633e54d_720x_2.2.webp";
import "../../styles/lookShop.css";
function LookShop() {
  return (
    <nav className="look-shop">
      <div className="look-title">
        <h3>Shop The Look</h3>
        <p>Trending Outfits Of Summer</p>
      </div>
      <div className="look-shop-cart">
        <CartLook logo={image_2} />
        <CartLook logo={image_3} />
      </div>
    </nav>
  );
}

export default LookShop;
