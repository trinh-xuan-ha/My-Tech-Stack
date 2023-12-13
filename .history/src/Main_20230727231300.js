import IntroduceText from "./Introduce_text";
import logo1 from "./images/pj1.png";
import logo2 from "./images/pj2.png";
import logo3 from "./images/pj3.png";
import logo4 from "./images/pj4.png";
import logo5 from "./images/pj5.png";
import logo6 from "./images/pj6.png";
import logo7 from "./images/livelogo.png";
import logo8 from "./images/githublogo.png";

import "./main.css"
import MainProjects from "./Main_project"
function Mains() {
    
    const  courses = [
        {
            imageSrc:logo1,
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:logo7,
            image3:logo8

        },
        {
            imageSrc:logo2,
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:logo7,
            image3:logo8

        },
        {
            imageSrc:logo3,
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:logo7,
            image3:logo8

        },
        {
            imageSrc:logo4,
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:logo7,
            image3:logo8

        },
        {
            imageSrc:logo5,
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:logo7,
            image3:logo8

        },
        {
            imageSrc:logo6,
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png",
            image3:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png"

        },

        
    ]
    return (
        <div id="main_1">
            <div className="Main_title">
            <IntroduceText h3Text = "Projects" pText = "Things I’ve built so far" />
            </div>
            <div className="main_project">
            {courses.map((MainProject, index) => (
                <MainProjects 
                key = {index}
                imageSrc = {MainProject.imageSrc}
                description = {MainProject.description}
                courseInfo = {MainProject.courseInfo}
                TechStack = {MainProject.TechStack}
                faLink = {MainProject.faLink}
                githubLink = {MainProject.githubLink}
                image2 = {MainProject.image2}
                image3 = {MainProject.image3}
                
                />
            )
            )}
            </div>
            
        </div>
        
    );
}
export default Mains;