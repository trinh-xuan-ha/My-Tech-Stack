import { SiGooglemaps } from "react-icons/si";
import PayLu from "./PayLanguage";

function Address() {
    return(
        <div className="address">
            <SiGooglemaps></SiGooglemaps>
            <p className="address_text">15 West 21th Street, Miami FL, USA</p>
        </div>
        <div></div>
    )
}
export default Address;