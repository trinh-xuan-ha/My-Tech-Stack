import { FaPlay } from "react-icons/fa";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { BiFullscreen } from "react-icons/bi";

function Tiktokvideo (props) {
    const {avatar, nameUser, emailUser, video, } = props
    return(
        <div className="cart_tiktok">
            <div className="name-user-tiktok">
                <div className="user-tiktok">
                    <img src={avatar}/>
                </div>
                <div className="name-user">
                    <h4>{nameUser}</h4>
                    <p>{emailUser}</p>
                </div>
                <a href="#"/>
            </div>
            <div className="main_video">
                <h4>Related videos</h4>
                <video>
                <source src={video} type="video/mp4"/>
                
                </video>
            </div>
        </div>
    )
}
export default Tiktokvideo;