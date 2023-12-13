function IntroduceText(props) {
    const { h3Text, bText } = props;
    return(
        <div className="text_title">
            <h3>{h3Text}</h3>
            <p>{p}</p>
        </div>
    )
}
export default IntroduceText;