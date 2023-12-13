function IntroduceText(props) {
    const { h3Text, pText } = props;
    const text_title = 
    return(
        <div className="text_title">
            <h3>{h3Text}</h3>
            <p>{pText}</p>
        </div>
    )
}
export default IntroduceText;