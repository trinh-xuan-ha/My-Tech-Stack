import SideBar from "../../components/Sidebar";
import MainSearch from "../../components/main/MainSearch";
import Footer from "../../components/Footer";
// import "../../styles/overlay.css";
import From from "../../components/From";
import { useState } from "react";

import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../../styles/mainlayout.css";
function Mainlayout() {
  return (
    const [offFrrom, setOffFrom] = useState(false);
    <div className="main-html">
      <nav className="nav-overlay"></nav>
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
