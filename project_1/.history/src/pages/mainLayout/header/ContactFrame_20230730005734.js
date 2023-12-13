
function ContactFrame(props) {
    const { icon, aText, classname } = props;
    return (
        <div children = >
                 {icon}
                <a href="#" > {aText} </a>
        </div>
    )
}
export default ContactFrame;