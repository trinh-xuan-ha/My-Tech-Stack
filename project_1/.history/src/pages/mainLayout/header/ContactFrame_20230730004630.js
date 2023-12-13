
function ContactFrame(props) {
    const { icon, aText } = props;
    return (
        <div>
                 {icon}
                <a h> {aText} </a>
        </div>
    )
}
export default ContactFrame;