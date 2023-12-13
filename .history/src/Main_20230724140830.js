import IntroduceText from "./Introduce_text";
import "./main.css"
import MainProject from "./Main_project"
function Mains() {
    return (
        <div id="main_1">
            <div className="Main_title">
            <IntroduceText h3Text = "Projects" pText = "Things I’ve built so far" />
            </div>
            <div >

            </div>
            <MainProject />
        </div>
        
    )
}
export default Mains;