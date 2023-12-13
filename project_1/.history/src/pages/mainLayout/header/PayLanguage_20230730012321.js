
function PayLu(props) {
    const { aText, icon, className } = props;
    return(
        <div className = {className}>
            <p>{aText}</p>
            {icon}
        </div>
    )
}
export default PayLu;