import Menu from "./navigation/NavigationMenu";
import PaySearch from "./navigation/NavigationPay";



import ("../../styles/Navigation.css")
function Navigation() {
    return(
        
        <div className="navigation">
            <Menu></Menu>
            <div className="navigation_title">
            coolmate
            </div>
            <PaySearch></PaySearch>

        </div>
    )
}
export default Navigation;