import SideBar from "../../components/Sidebar";
import MainSearch from "../../components/main/MainSearch";
import Footer from "../../components/Footer";

import "../../styles/mainlayout.css";
import { Outlet } from "react-router-dom";
function Mainlayout() {
  return (
    <div className="main-html">
      <SideBar />

      <nav className="main-cart">
        <MainSearch />
        <div className="main-in">
          <main>
            <Outlet />
          </main>

          <Footer />
        </div>
      </nav>
    </div>
  );
}
export default Mainlayout;
