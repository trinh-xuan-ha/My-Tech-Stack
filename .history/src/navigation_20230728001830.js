// import "./navigation.css";
// function Navigation() {
//     const list_menu = {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: '50px'
//     };
//     const listyle = {
//         listStyle: "none"
//     }

//     return (
//         <ul style={list_menu}>
//                 <li style={listyle}>
//                     <a  className="btn-a" href="#">Home</a>
//                     </li>
//                 <li style={listyle}>
//                     <a  className="btn-a" href="#">About</a>
//                     </li>
//                 <li style={listyle}>
//                     <a  className="btn-a" href="#">Tech Stack</a>
//                     </li>
//                 <li style={listyle}>
//                     <a  className="btn-a" href="#">Projects</a>
//                     </li>
//                 <li style={listyle}>
//                     <a  className="btn-a" href="#">Contact</a>
//                 </li>
//         </ul>
//     )
// };
// export default Navigation;
import React, { useState } from "react";
import "./navigation.css";
const list_menu = {
            display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             gap: '50px'
         };
         const listyle = {
             listStyle: "none"
        }

function MyButton() {
  const [selected, setSelected] = useState(false);

  function handleOnClicked() {
    setSelected(!selected);
  }

  return (
    <ul style={list_menu}>
      <li style={listyle}>
        <a
          className={`btn-a ${selected $$ onClick={han} "change_color" : ""}`}
          href="#"
          onClick={handleOnClicked}
        >
          Home
        </a>
      </li>
      <li style={listyle}>
        <a
          className={`btn-a ${!selected ? "change_color" : ""}`}
          href="#"
          onClick={handleOnClicked}
        >
          About
        </a>
      </li>
      <li style={listyle}>
        <a
          className={`btn-a ${!selected ? "change_color" : ""}`}
          href="#"
          onClick={handleOnClicked}
        >
          Tech Stack
        </a>
      </li>
      <li style={listyle}>
        <a
          className={`btn-a ${!selected ? "change_color" : ""}`}
          href="#"
          onClick={handleOnClicked}
        >
          Projects
        </a>
      </li>
      <li style={listyle}>
        <a
          className={`btn-a ${!selected ? "change_color" : ""}`}
          href="#"
          onClick={handleOnClicked}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default MyButton;