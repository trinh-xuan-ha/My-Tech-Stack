
function ContactFrame(props) {
    const { icon, pText } = props;
    return (
        <div className="lh_phone">
                 {icon}
                <p className="phone_text">+0123-456-789</p>
            </div>
    )
}
export default ContactFrame;