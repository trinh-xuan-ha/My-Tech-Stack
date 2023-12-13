import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import ContactFrame from "./ContactFrame";

function Infomation() {
    return (
        <div className="infomation">
            <ContactFrame icon = {} pText = "+0123-456-789" className="lh_phone"></ContactFrame>
            <ContactFrame icon = "MdEmail"  pText = "github@gmail.com" className="lh_email"></ContactFrame>
            
           
        </div>
    )
}
export default Infomation;