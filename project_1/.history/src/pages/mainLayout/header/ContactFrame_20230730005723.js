
function ContactFrame(props) {
    const { icon, aText, class } = props;
    return (
        <div>
                 {icon}
                <a href="#" > {aText} </a>
        </div>
    )
}
export default ContactFrame;