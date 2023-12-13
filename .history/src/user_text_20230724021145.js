function userText() {
    const h3Style = {
        padding: '5px 0',
        fontSize: '2.5rem',
        color: '#42446E'
    }
    return(
        <div className="user_text">
            <h3 style={h3Style}>HI</h3>
            <h3 style={h3Style}>My name is</h3>
            <h3 className="color_name">Trinh Xuan Ha</h3>
            <h3>I build things for web</h3>
        </div>
    )
}