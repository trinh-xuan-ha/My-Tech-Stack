function InputSelectCart(props) {
  const { describe, select1, select2, select3, select4, select5 } = props;
  return (
    <form>
      <label for="cart">{describe}</label>
      <select name="carts" id="carts">
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
