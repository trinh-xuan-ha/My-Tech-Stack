import IntroduceIcon from "./Introduce_icon";
import IntroduceText from "./Introduce_text";
import "./introduce.css";
function Introduces() {
    return (
        <div id="introduce_1">
            <IntroduceText h3Text = "My Tech Stack"  pText = "Technologies I’ve been working with recently"/>
            <IntroduceIcon />
        </div>
    )
}
export default Introduces;