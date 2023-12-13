import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import ContactFrame from "./ContactFrame";

function Infomation() {
    return (
        <div className="infomation">
            <ContactFrame className="lh"></ContactFrame>
            <div className="lh_email">
                <MdEmail></MdEmail>
                <p className="email_text">github@gmail.com</p>
            </div>
           
        </div>
    )
}
export default Infomation;