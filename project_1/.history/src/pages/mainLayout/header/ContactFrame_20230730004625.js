
function ContactFrame(props) {
    const { icon, aText } = props;
    return (
        <div>
                 {icon}
                <a> {aText} </a>
        </div>
    )
}
export default ContactFrame;