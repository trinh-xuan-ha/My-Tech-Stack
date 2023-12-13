import SideBar from "../../components/Sidebar";
import HeaderSearch form "../../components/main/HeaderSearch"
import Footer from "../../components/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "../../styles/mainlayout.css";
import "../../styles/overlay.css";
function Mainlayout() {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  console.log(toggleOverlay);
  return (
    <div className="main-html">
      {showOverlay && <nav className="nav-overlay"></nav>}
      <SideBar />

      <nav className="main-cart">
        {/* <MainSearch onFormToggle={toggleOverlay} /> */}
        <HeaderSearch />
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
