import SideBar from "../../components/Sidebar";
import MainSearch from "../../components/main/MainSearch";
import Footer from "../../components/Footer";
function Mainlayout() {
  <div>
    <div>
      <SideBar />
    </div>
    <nav className="main-cart">
      <div>
        <header>
          <MainSearch />
        </header>
        <main></main>
        <div>
          <Footer />
        </div>
      </div>
    </nav>
  </div>;
}
export default Mainlayout;
