import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import ContactFrame from "./ContactFrame";

function Infomation() {
    return (
        <div className="infomation">
            <ContactFrame icon, pTextclassName="lh_phone"></ContactFrame>
            <ContactFrame  className="lh_email"></ContactFrame>
            
           
        </div>
    )
}
export default Infomation;