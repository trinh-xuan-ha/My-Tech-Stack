import InputSelectCart from "./InputSelectCart.js/InputSelectCart";
import React from "react";

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
export default InputSelect;
