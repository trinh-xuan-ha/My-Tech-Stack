import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import ContactFrame from "./ContactFrame";

function Infomation() {
    return (
        <div className="infomation">
            <ContactFrame   icon = {<MdPhoneInTalk />} aText = "+0123-456-789"></ContactFrame>
            <ContactFrame icon = { <MdEmail /> }  aText = "github@gmail.com" classname="lh_email"></ContactFrame>
        </div>
    )
}
export default Infomation;