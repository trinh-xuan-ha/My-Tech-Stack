import Menu from "./navigation/NavigationMenu";
import PaySearch from "./navigation/NavigationPay";
import logo_1 from "../../assets/images/logo-1.webp"



import ("../../styles/Navigation.css")
function Navigation() {
    return(
        
        <div id="navigation">
            <Menu></Menu>
            <div className="navigation_img">
            <img src={logo_1} alt="error"/>
            </div>
            <PaySearch></PaySearch>

        </div>
    )
}
export default Navigation;