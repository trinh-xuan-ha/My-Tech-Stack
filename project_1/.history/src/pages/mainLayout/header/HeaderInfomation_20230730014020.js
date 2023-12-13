import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillC } from "react-icons/ai";
import ContactFrame from "./ContactFrame";

function Infomation() {
    return (
        <div className="infomation">
            <ContactFrame  icon = {<MdPhoneInTalk />} aText = "+0123-456-789" classname="lh_phone"></ContactFrame>
            <ContactFrame  icon = {<AiFillC />} aText = "+0123-456-789" classname="lh_phone"></ContactFrame>
            <ContactFrame icon = { <MdEmail /> }  aText = "github@gmail.com" classname="lh_email"></ContactFrame>
        </div>
    )
}
export default Infomation;