import InputSelectCart from "./InputSelectCart.js/InputSelectCart";
const { describe, select1, select2, select3, select4, select5 } = props;
function InputSelect() {
  <div className="header-main-content">
    {InputSelectCart.map((input, index) => (
      <InputSelectCart
        key={index}
        describe={input.describe}
        select1={input.select1}
        select2={input.select2}
        select3={input.select3}
        select4={input.select4}
        select5={input.select5}
      />
    ))}
  </div>;
}
