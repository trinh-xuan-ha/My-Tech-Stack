import Menu from "./navigation/NavigationMenu";




import ("../../styles/Navigation.css")
function Navigation() {
    return(
        
        <div className="navigation">
            <Menu></Menu>
            <div className="navigation_title"></div>
        </div>
    )
}
export default Navigation;