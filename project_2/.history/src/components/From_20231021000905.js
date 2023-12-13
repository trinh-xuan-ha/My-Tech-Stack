import InputSelectCart from "./maincontent/InputSelectCart.js/InputSelectCart";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

import "../styles/form.css";
function From(props) {
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
  const [offFrom, setOffFrom] = useState(false);

  const handleOffClick = () => {
    setOffFrom(true);
    props.onClose();
  };

  if (offFrom) {
    return null;
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(props.handleCreateForm); // Log để kiểm tra xem đó có phải là một hàm
    props.handleCreateForm();
    props.handleCreateForm();
  };

  return (
    <section class="container">
      <header className="title-form">
        <span>Add User</span>
        <div className="btn-clone" onClick={handleOffClick}>
          <AiOutlineClose />
        </div>
      </header>
      <form action="#" class="form" name="studentForm">
        <div class="input_box" id="idformstudent">
          <label for="student_text">Full Name</label>
          <input
            type="text"
            class="control"
            name="student_input"
            id="student_input"
          />
        </div>
        <div class="input_box" id="nameformstudent">
          <label for="name_text">Email</label>
          <input
            type="text"
            class="control"
            name="name_input"
            id="name_input"
            maxlength="200"
          />
        </div>
        <div class="input_box" id="dateform">
          <label for="date_text">Company</label>

          <input
            type="text"
            maxlength="100"
            class="control"
            name="date_input"
            id="date_input"
          />
          <span class="error_text"></span>
        </div>
        <div class="input_box" id="addressstudent">
          <label for="address_text">Country</label>
          <input
            type="text"
            class="control"
            name="address_input"
            id="address_input"
          />
          <span class="error_text"></span>
        </div>
        <div class="input_box" id="idphonestudent">
          <label for="phone_text">Contact</label>
          <input
            type="text"
            class="control"
            name="phone_input"
            id="phone_input"
          />
          <span class="error_text" id="phone_error"></span>
        </div>
        {/* <!-- <button type="submit" class="form_btn" id="continue_button">Continue</button> --> */}
        <div class="input_box" id="iddiemstudent">
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
        </div>
        <div className="from-btn-code">
          <button
            type="submit"
            className="form_btn btn-submit"
            id="submit_button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          <button
            type="submit"
            className="form_btn btn-cancel"
            id="cancel_button"
          >
            Cancel
          </button>
        </div>

        <span class="error_text" id="error_message"></span>
      </form>
    </section>
  );
}
export default From;
