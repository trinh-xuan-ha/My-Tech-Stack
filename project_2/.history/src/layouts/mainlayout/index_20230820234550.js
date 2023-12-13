import SideBar from "../../components/Sidebar";
import MainSearch from "../../components/main/MainSearch";
import Footer from "../../components/Footer";
// import "../../styles/overlay.css";
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
      {setShowOverlay && <nav className="nav-overlay"></nav>}
      {/* <nav className="nav-overlay"></nav> */}
      <SideBar />

      <nav className="main-cart">
        <MainSearch onFormToggle={toggleOverlay} />
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
