
function ContactFrame(props) {
    const { icon, pText } = props;
    return (
        <div>
                 {icon}
                <p> {pText} </p>
        </div>
    )
}
export default ContactFrame;