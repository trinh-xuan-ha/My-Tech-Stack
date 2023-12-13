
function ContactFrame(props) {
    const { icon, pText } = props;
    return (
        <div className="lh_phone">
                 {icon}
                <p className="phone_text"></p>
            </div>
    )
}
export default ContactFrame;