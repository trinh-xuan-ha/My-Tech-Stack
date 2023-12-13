function userText() {
    const h3Style = {
        padding: '5px 0',
        fontSize: '2.5rem',
        color: '#42446E'
    }
    const color = {
        color:"RGB(19,176,"
    }

    return(
        <div className="user_text">
            <h3 style={h3Style}>HI         👋 </h3>
            <h3 style={h3Style}>My name is</h3>
            <h3 style={h3Style} className="color_name">Trinh Xuan Ha</h3>
            <h3 style={h3Style}> I build things for web</h3>
        </div>
    )
}
export default userText;