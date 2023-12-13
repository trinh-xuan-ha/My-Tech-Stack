import MainCart from "./maincart/MainCart";
import { FiUser } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";

function MainCartList() {
  const carts = [
    {
      title: "Session",
      number: 21.459,
      hundredths: 29,
      hadtag: "Total Users",
      icon: <FiUser></FiUser>,
    },
    {
      title: "Session",
      number: 21.459,
      hundredths: 29,
      hadtag: "Total Users",
      icon: <FiUserPlus></FiUserPlus>,
    },
    {
      title: "Session",
      number: 21.459,
      hundredths: 29,
      hadtag: "Total Users",
      icon: <FiUserX></FiUserX>,
    },
  ];
  return (
    <div className="main-cart">
      {carts.map((cart, index) => {
        <MainCart
          key={index}
          title={cart.title}
          number={cart.number}
          hundredths={`(+ ${cart.hundredths} %)`}
          hadtag={cart.hadtag}
          icon={cart.icon}
        />;
      })}
    </div>
  );
}
export default MainCartList;
