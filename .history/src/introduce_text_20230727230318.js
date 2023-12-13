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
        
            
        
    const pStyle  =  {
            padding: '10px 0',
            fontSize: '20px',
            color: '#333333'
        }
    
    return(
        <div className="text_title" style={text_title}>
            <h3 style={h3Style}>{h3Text}</h3>
            <p style={pStyle}>{pText}</p>
        </div>
    )
}
export default IntroduceText;