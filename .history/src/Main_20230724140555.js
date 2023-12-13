import IntroduceText from "./Introduce_text";
import "./main.css"
import MainProject from "./Main_project"
function Mains() {
    return (
        <div id="main_1">
            <IntroduceText h3Text = "Projects" pText = "Things I’ve built so far" />
        </div>
        <MainProject />
    )
}
export default Mains;