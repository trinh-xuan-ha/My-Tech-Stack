import CartLook from "./shopLook/CartLook";
import image_look1 from "https://miona-vinovatheme.myshopify.com/cdn/shop/files/img-1-5_768x.jpg?v=1687334631";
import image_look2 from "https://miona-vinovatheme.myshopify.com/cdn/shop/files/img-1-6_768x.jpg?v=1687334630";
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
