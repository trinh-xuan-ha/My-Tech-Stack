
import Logo from "./Logo";
import Navigation from "./Navigation";
import Icon from "./Icon";
const Icon_id = createRoot(document.getElementById('icon'));
const Logo_id = createRoot(document.getElementById('logo'));
const Navigation_id = createRoot(document.getElementById('navigation'));

Logo_id.render(
    <StrictMode>
        <Logo/>
    </StrictMode>
);
Navigation_id.render(
    <StrictMode>
        <Navigation/>
        </StrictMode>
);
Icon_id.render(
    <StrictMode>
        <Icon/>
        </StrictMode>  
)
function Header () {
    return (
        
    )
}
export default Header;