
function InputSelectCart (props) {
    const { describe ,select1, select2, select3, select4, select5} = props;
    return (
        <form>
            <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <br><br>
  <input type="submit" value="Submit"></input>
        </form>
    )
}
export default InputSelectCart;