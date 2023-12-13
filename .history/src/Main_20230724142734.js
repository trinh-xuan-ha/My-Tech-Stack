import IntroduceText from "./Introduce_text";
import "./main.css"
import MainProject from "./Main_project"
function Mains() {
    
    const  courses = [
        {
            imageSrc:"https://www.bing.com/images/search?view=detailV2&ccid=%2fwQ5Yn7O&id=C4115DF6345FD0359C21074A03B22BF990D85D35&thid=OIP._wQ5Yn7Oy_1MzUVTUTa-hgHaEK&mediaurl=https%3a%2f%2fedu2review.com%2fupload%2farticle-images%2f2019%2f05%2f10883%2f1920x1080_du-hoc-my-nganh-khoa-hoc-may-tinh.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ff0439627ececbfd4ccd45535136be86%3frik%3dNV3YkPkrsgNKBw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=khoas+h%e1%bb%8dc&simid=608054485032646888&FORM=IRPRST&ck=59E5D7F8F368F186716D9644FC5D2FA3&selectedIndex=0",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://th.bing.com/th/id/OIP.H8H4hbmZpCZfXyUDd2rKxQAAAA?pid=ImgDet&rs=1",
            image3:"https://pngimg.com/uploads/github/github_PNG40.png"

        },
        {
            imageSrc:"https://www.bing.com/images/search?view=detailV2&ccid=%2fwQ5Yn7O&id=C4115DF6345FD0359C21074A03B22BF990D85D35&thid=OIP._wQ5Yn7Oy_1MzUVTUTa-hgHaEK&mediaurl=https%3a%2f%2fedu2review.com%2fupload%2farticle-images%2f2019%2f05%2f10883%2f1920x1080_du-hoc-my-nganh-khoa-hoc-may-tinh.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ff0439627ececbfd4ccd45535136be86%3frik%3dNV3YkPkrsgNKBw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=khoas+h%e1%bb%8dc&simid=608054485032646888&FORM=IRPRST&ck=59E5D7F8F368F186716D9644FC5D2FA3&selectedIndex=0",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://th.bing.com/th/id/OIP.H8H4hbmZpCZfXyUDd2rKxQAAAA?pid=ImgDet&rs=1",
            image3:"https://pngimg.com/uploads/github/github_PNG40.png"

        },
        {
            imageSrc:"https://www.bing.com/images/search?view=detailV2&ccid=%2fwQ5Yn7O&id=C4115DF6345FD0359C21074A03B22BF990D85D35&thid=OIP._wQ5Yn7Oy_1MzUVTUTa-hgHaEK&mediaurl=https%3a%2f%2fedu2review.com%2fupload%2farticle-images%2f2019%2f05%2f10883%2f1920x1080_du-hoc-my-nganh-khoa-hoc-may-tinh.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ff0439627ececbfd4ccd45535136be86%3frik%3dNV3YkPkrsgNKBw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=khoas+h%e1%bb%8dc&simid=608054485032646888&FORM=IRPRST&ck=59E5D7F8F368F186716D9644FC5D2FA3&selectedIndex=0",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://th.bing.com/th/id/OIP.H8H4hbmZpCZfXyUDd2rKxQAAAA?pid=ImgDet&rs=1",
            image3:"https://pngimg.com/uploads/github/github_PNG40.png"

        },
        {
            imageSrc:"https://www.bing.com/images/search?view=detailV2&ccid=%2fwQ5Yn7O&id=C4115DF6345FD0359C21074A03B22BF990D85D35&thid=OIP._wQ5Yn7Oy_1MzUVTUTa-hgHaEK&mediaurl=https%3a%2f%2fedu2review.com%2fupload%2farticle-images%2f2019%2f05%2f10883%2f1920x1080_du-hoc-my-nganh-khoa-hoc-may-tinh.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ff0439627ececbfd4ccd45535136be86%3frik%3dNV3YkPkrsgNKBw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=khoas+h%e1%bb%8dc&simid=608054485032646888&FORM=IRPRST&ck=59E5D7F8F368F186716D9644FC5D2FA3&selectedIndex=0",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://th.bing.com/th/id/OIP.H8H4hbmZpCZfXyUDd2rKxQAAAA?pid=ImgDet&rs=1",
            image3:"https://pngimg.com/uploads/github/github_PNG40.png"

        },
        {
            imageSrc:"https://www.bing.com/images/search?view=detailV2&ccid=%2fwQ5Yn7O&id=C4115DF6345FD0359C21074A03B22BF990D85D35&thid=OIP._wQ5Yn7Oy_1MzUVTUTa-hgHaEK&mediaurl=https%3a%2f%2fedu2review.com%2fupload%2farticle-images%2f2019%2f05%2f10883%2f1920x1080_du-hoc-my-nganh-khoa-hoc-may-tinh.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ff0439627ececbfd4ccd45535136be86%3frik%3dNV3YkPkrsgNKBw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=khoas+h%e1%bb%8dc&simid=608054485032646888&FORM=IRPRST&ck=59E5D7F8F368F186716D9644FC5D2FA3&selectedIndex=0",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://th.bing.com/th/id/OIP.H8H4hbmZpCZfXyUDd2rKxQAAAA?pid=ImgDet&rs=1",
            image3:"https://pngimg.com/uploads/github/github_PNG40.png"

        },
        {
            imageSrc:"https://www.bing.com/images/search?view=detailV2&ccid=%2fwQ5Yn7O&id=C4115DF6345FD0359C21074A03B22BF990D85D35&thid=OIP._wQ5Yn7Oy_1MzUVTUTa-hgHaEK&mediaurl=https%3a%2f%2fedu2review.com%2fupload%2farticle-images%2f2019%2f05%2f10883%2f1920x1080_du-hoc-my-nganh-khoa-hoc-may-tinh.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ff0439627ececbfd4ccd45535136be86%3frik%3dNV3YkPkrsgNKBw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=khoas+h%e1%bb%8dc&simid=608054485032646888&FORM=IRPRST&ck=59E5D7F8F368F186716D9644FC5D2FA3&selectedIndex=0",
            description:"Project Tile goes here",
            courseInfo:"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            TechStack:"Tech stack : HTML , JavaScript, SASS, React",
            faLink:"https://git-scm.com/download/win",
            githubLink:"https://git-scm.com/download/win",
            image2:"https://th.bing.com/th/id/OIP.H8H4hbmZpCZfXyUDd2rKxQAAAA?pid=ImgDet&rs=1",
            image3:"https://pngimg.com/uploads/github/github_PNG40.png"

        },

        
    ]
    return (
        <div id="main_1">
            <div className="Main_title">
            <IntroduceText h3Text = "Projects" pText = "Things I’ve built so far" />
            </div>
            <div className="main_project">
            {courses.map((MainProject, index) => (
                <MainProject 
                key = {index}
                imageSrc = {course.imageSrc}
                description = {course.description}
                courseInfo = {course.courseInfo}
                TechStack = {course.TechStack}
                faLink = {course.faLink}
                githubLink = {course.githubLink}
                image2 = {course}
                
                />
            )
            )}
            </div>
            
        </div>
        
    )
}
export default Mains;