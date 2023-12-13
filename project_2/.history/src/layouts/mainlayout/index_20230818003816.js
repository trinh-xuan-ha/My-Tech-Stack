import SideBar from "../../components/Sidebar";
import MainSearch from "../../components/main/MainSearch";
import Footer from "../../components/Footer";
import MainCartList from "../../components/MainCartList";
import "../../styles/mainlayout.css";
function Mainlayout() {
  return (
    <div className="main-html">
      <SideBar />

      <nav className="main-cart">
        <MainSearch />
        <div className="main-in">
          <header>
            <MainCartList />
          </header>
          <main>
            <h3>sadasdasd</h3>
          </main>

          <Footer />
        </div>
      </nav>
    </div>
  );
}
export default Mainlayout;
