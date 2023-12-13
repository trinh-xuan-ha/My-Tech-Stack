import { FaPlay } from "react-icons/fa";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { BiFullscreen } from "react-icons/bi";
import { PiShareFatFill } from "react-icons/pi";
import { AiFillMessage } from "react-icons/ai";

function Tiktokvideo (props) {
    const {avatar, nameUser, emailUser, video, nameMusic} = props
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
                <div className="logo_play">
                    <FaPlay></FaPlay>
                    <HiOutlineSpeakerXMark></HiOutlineSpeakerXMark>
                    <BiFullscreen></BiFullscreen>
                    <PiShareFatFill></PiShareFatFill>

                </div>
                <div className="play-tittok">
                    <AiFillMessage></AiFillMessage>
                    <a className="link-tittok" href="#">Watch more exciting videos on TikTok</a>
                    <a href="#">Watch now</a>

                </div>
                <div className="footer-titok">
                    <h4> @{nameUser}</h4>
                </div>
            </div>
        </div>
    )
}
export default Tiktokvideo;