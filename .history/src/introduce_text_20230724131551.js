function IntroduceText(props) {
    const { h3Text, pText } = props;
    const text_title = {
         
            display: 'flex',
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 40px;
        
        .text_title h3 {
            font-size: 3rem;
            color: #42446E;
            text-transform: capitalize;
        }
        .text_title p {
            padding: 10px 0;
            font-size: 20px;
            color: #333333;
        }
    }
    return(
        <div className="text_title">
            <h3>{h3Text}</h3>
            <p>{pText}</p>
        </div>
    )
}
export default IntroduceText;