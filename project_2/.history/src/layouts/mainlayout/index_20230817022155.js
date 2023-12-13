import SideBar from "../../components/Sidebar";
import MainSearch from "../../components/main/MainSearch";
import Footer from "../../components/Footer";
function Mainlayout() {
  return (
    <div className="main-html">
      <div>
        <SideBar />
      </div>
      <nav className="main-cart">
        <div>
          <header>
            <MainSearch />
          </header>
          <main>
            <h3>sadasdasd</h3>
          </main>
          <div>
            <Footer />
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Mainlayout;
