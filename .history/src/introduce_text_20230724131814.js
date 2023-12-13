function IntroduceText(props) {
    const { h3Text, pText } = props;
    const text_title = {
         
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '40px'
    }
    const h3Style = {
        fontSize: '3rem',
        color: '#42446E',
        textTransform: 'capitalize'
    }
        
            
        
    const pStyle   =  {
            padding: 10px 0;
            font-size: 20px;
            color: #333333;
        }
    
    return(
        <div className="text_title">
            <h3>{h3Text}</h3>
            <p>{pText}</p>
        </div>
    )
}
export default IntroduceText;