
function ContactFrame(props) {
    const { icon, pText } = props;
    return (
        <div className="lh_phone">
                 {icon}
                <p> {pText} </p>
            </div>
    )
}
export default ContactFrame;