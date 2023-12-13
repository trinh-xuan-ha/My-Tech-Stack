import InputSelectCart from "./InputSelectCart.js/InputSelectCart";
import React from "react";
const { describe, select1, select2, select3, select4, select5 } = props;
function InputSelect() {
  const inputSelect = [
    {
      describe: "Select Role",
      select1: "Admin",
      select2: "Author",
      select3: "Editor",
      select4: "Maintainer",
      select5: "Subscriber",
    },
    {
      describe: "Select Plan",
      select1: "Basic",
      select2: "Company",
      select3: "Enterprise",
      select4: "Team",
    },
    {
      describe: "Select Status",
      select1: "Pending",
      select2: "Active",
      select3: "Inactive",
    },
  ];
  <div className="header-main-content">
    {inputSelect.map((input, index) => (
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
