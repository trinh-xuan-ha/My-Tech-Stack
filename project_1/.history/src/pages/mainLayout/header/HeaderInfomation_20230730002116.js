import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Infomation() {
    return (
        <div className="infomation">
            <div className="lh_phone">
                 <MdPhoneInTalk></MdPhoneInTalk>
                <p className="phone_text">+0123-456-789</p>
            </div>
            <div className="lh_email">
                <MdEmail></MdEmail>
                <p className=""></p>
            </div>
           
        </div>
    )
}
export default Infomation;