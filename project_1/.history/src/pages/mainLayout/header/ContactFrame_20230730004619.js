
function ContactFrame(props) {
    const { icon, pText } = props;
    return (
        <div>
                 {icon}
                <a> {pText} </a>
        </div>
    )
}
export default ContactFrame;