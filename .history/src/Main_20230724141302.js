import IntroduceText from "./Introduce_text";
import "./main.css"
import MainProject from "./Main_project"
function Mains() {
    const { imageSrc, description, courseInfo, TechStack, faLink, githubLink, image2, image3}
    const  courses = [
        {
            
        }
        imageSrc
    ]
    return (
        <div id="main_1">
            <div className="Main_title">
            <IntroduceText h3Text = "Projects" pText = "Things I’ve built so far" />
            </div>
            <div className="main_project">
            <MainProject />
            </div>
            
        </div>
        
    )
}
export default Mains;