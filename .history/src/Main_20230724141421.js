import IntroduceText from "./Introduce_text";
import "./main.css"
import MainProject from "./Main_project"
function Mains() {
    const { imageSrc, description, courseInfo, TechStack, faLink, githubLink, image2, image3}
    const  courses = [
        {
            imageSrc:"https://www.bing.com/images/search?view=detailV2&ccid=%2fwQ5Yn7O&id=C4115DF6345FD0359C21074A03B22BF990D85D35&thid=OIP._wQ5Yn7Oy_1MzUVTUTa-hgHaEK&mediaurl=https%3a%2f%2fedu2review.com%2fupload%2farticle-images%2f2019%2f05%2f10883%2f1920x1080_du-hoc-my-nganh-khoa-hoc-may-tinh.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ff0439627ececbfd4ccd45535136be86%3frik%3dNV3YkPkrsgNKBw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=khoas+h%e1%bb%8dc&simid=608054485032646888&FORM=IRPRST&ck=59E5D7F8F368F186716D9644FC5D2FA3&selectedIndex=0"
        }
        
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