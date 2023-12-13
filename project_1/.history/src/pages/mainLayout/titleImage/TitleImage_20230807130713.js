import { useEffect } from "react";
import logo1 from "../../../assets/images/checkin_1.webp";

function TitleImage(props) {
  const { pText, h2Text_1, h2Text_2, buttonText, imageUrl, setComponents } =
    props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComponents((prevComponents) =>
        prevComponents.filter((component) => component !== props)
      );
    }, 5000);

    return () => clearTimeout(timeout);
  }, [setComponents]);

  return (
    <div className="img_title">
      <div className="image_main">
        <img src={imageUrl} alt="error" />
      </div>
      <div className="image_text">
        <p>{pText}</p>
        <h2>{h2Text_1}</h2>
        <h2>{h2Text_2}</h2>
        <a href="#">{buttonText}</a>
      </div>
      <nav className="nav-overlay"></nav>
      <div className="form_checkin">
        <div className="checkin">
          <div className="image_checkin">
            <img src={logo1} alt="error" />
          </div>
          <div className="product_checkin">
            <div className="title_form">
              <h3>NEWSLETTER</h3>
              <p>
                Get 15% off your first purchaxse! Plus, be the first to know
                about sales, new product launches and exclusive offers!
              </p>
            </div>
            <section className="main_form">
              <h4>Product Preferences:</h4>
              <form className="form">
                <section className="form_option">
                  <input
                    type="radio"
                    className="input_men"
                    name="gender"
                    value="men"
                  />
                  <label for="men">Men's</label>
                  <input
                    type="radio"
                    className="input_women"
                    name="gender"
                    value="woment"
                  />
                  <label for="woment">Woment's</label>
                  <input
                    type="radio"
                    className="input_wait"
                    name="gender"
                    value="wait"
                  />
                  <label for="men">I Wait is all</label>
                </section>
                <input
                  type="email"
                  placeholder="YOUR EMAIL ADDRESS"
                  className="input_email"
                />
                <button>SUBSCRIBE</button>
              </form>
            </section>
            <div className="footer_form"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleImage;
