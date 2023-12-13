function MainProject(props) {
    const { imageSrc, description, courseInfo, TechStack, faLink, githubLink} = props;
    return (
        <div className="project_cart">
            <div className="projects-img">
                <img src = {imageSrc} alt="error"
                
                />
            </div>
            <div className="project_text">
                <h4>{description}</h4>
                <p>courseInfo</p>
            </div>
        </div>
    )
}