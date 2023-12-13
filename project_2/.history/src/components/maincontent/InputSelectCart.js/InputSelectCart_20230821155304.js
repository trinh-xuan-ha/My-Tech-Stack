import React from "react";

function InputSelectCart(props) {
  const {
    name,
    describe,
    select1,
    select2,
    select3,
    select4,
    select5,
    value,
    onChange,
  } = props;

  return (
    <form>
      <label htmlFor="cart">{describe}</label>
      <select name={name} id="carts" value={value} onChange={onChange}>
        <option value={select1}>{select1}</option>
        <option value={select2}>{select2}</option>
        <option value={select3}>{select3}</option>
        <option value={select4}>{select4}</option>
        <option value={select5}>{select5}</option>
      </select>
    </form>
  );
}

export default InputSelectCart;
