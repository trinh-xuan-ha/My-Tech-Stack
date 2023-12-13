
function ContactFrame(props) {
    const { icon, aText, classname } = props;
    return (
        <div c = {classname}>
                 {icon}
                <a href="#" > {aText} </a>
        </div>
    )
}
export default ContactFrame;