import IntroduceText from "./Introduce_text";
import "./main.css"
import MainProjects from "./Main_project"
function Mains() {
    
    const  courses = [
        {
            imageSrc:"https://th.bing.com/th/id/OIP.QjwDdRFz_TbbmMGgQYOR-wHaEd?pid=ImgDet&rs=1",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png",
            image3:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png"

        },
        {
            imageSrc:"https://th.bing.com/th/id/OIP.QjwDdRFz_TbbmMGgQYOR-wHaEd?pid=ImgDet&rs=1",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png",
            image3:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png"

        },
        {
            imageSrc:"https://th.bing.com/th/id/OIP.QjwDdRFz_TbbmMGgQYOR-wHaEd?pid=ImgDet&rs=1",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png",
            image3:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png"

        },
        {
            imageSrc:"https://th.bing.com/th/id/OIP.QjwDdRFz_TbbmMGgQYOR-wHaEd?pid=ImgDet&rs=1",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png",
            image3:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png"

        },
        {
            imageSrc:"https://th.bing.com/th/id/OIP.QjwDdRFz_TbbmMGgQYOR-wHaEd?pid=ImgDet&rs=1",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://th.bing.com/th/id/OIP.dsWGMpqtgvW5590uuJ7JkQHaHa?pid=ImgDet&rs=1",
            image3:"https://cdn.iconscout.com/icon/free/png-512/github-3691248-3073768.png"

        },
        {
            imageSrc:"https://th.bing.com/th/id/OIP.QjwDdRFz_TbbmMGgQYOR-wHaEd?pid=ImgDet&rs=1",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://th.bing.com/th/id/OIP.dsWGMpqtgvW5590uuJ7JkQHaHa?pid=ImgDet&rs=1",
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