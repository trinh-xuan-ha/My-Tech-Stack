import Menu from "./navigation/NavigationMenu";
import PaySearch from "./navigation/NavigationPay";
import logo_1 from ""



import ("../../styles/Navigation.css")
function Navigation() {
    return(
        
        <div id="navigation">
            <Menu></Menu>
            <div className="navigation_title">
            
            </div>
            <PaySearch></PaySearch>

        </div>
    )
}
export default Navigation;