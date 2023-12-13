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
import { useEffect } from "react";
import "./navigation.css";

function Navigation() {
  const list_menu = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px'
  };
  const listyle = {
    listStyle: "none"
  };

  useEffect(() => {
    // Lấy tất cả các phần tử có class "btn-a"
    const btns = document.querySelectorAll(".btn-a");

    // Lấy phần tử đầu tiên và thêm class "change_color" vào nó
    const firstBtn = btns[0];
    firstBtn.classList.add("change_color");

    // Hàm thay đổi màu sẽ được gọi khi người dùng click vào
    const changeColorOnClick = (event) => {
      const clickedBtn = event.target;

      // Loại bỏ class "change_color" khỏi các phần tử khác
      btns.forEach(btn => {
        btn.classList.remove("change_color");
      });

      // Thêm class "change_color" vào phần tử đang được click
      clickedBtn.classList.add("change_color");
    };

    // Thêm event listener cho từng phần tử "btn-a"
    btns.forEach(btn => {
      btn.addEventListener("click", changeColorOnClick);
    });

    // Cleanup: Xóa event listener khi component unmount
    return () => {
      btns.forEach(btn => {
        btn.removeEventListener("click", changeColorOnClick);
      });
    };
  }, []);

  return (
    <ul style={list_menu}>
      <li style={listyle}>
        <a className="btn-a change_color" href="#">Home</a>
      </li>
      <li style={listyle}>
        <a className="btn-a" href="#introduce">About</a>
      </li>
      <li style={listyle}>
        <a className="btn-a" href="#main">Tech Stack</a>
      </li>
      <li style={listyle}>
        <a className="btn-a" href="#footer">Projects</a>
      </li>
      <li style={listyle}>
        <a className="btn-a" href="#">Contact</a>
      </li>
    </ul>
  );
}

export default Navigation;
function 