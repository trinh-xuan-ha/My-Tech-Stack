import InputSelectCart from "./maincontent/InputSelectCart.js/InputSelectCart";
function MainSearch() {
  const option = [
    {
      select1: 10,
      select2: 25,
      select3: 50,
      select4: 100,
      select5: "All",
    },
  ];
  return (
    <div className="main-search-option">
      <div className="option-number">
        {option.map((input, index) => (
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
      </div>
    </div>
  );
}
export default MainSearch;
