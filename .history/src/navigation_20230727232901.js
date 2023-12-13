
function Navigation() {
    const list_menu = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px'
    };
    const listyle = {
        listStyle: "none"
    }
    const buttom = {
        letterSpacing: '0.5px',
        position: 'relative',
        color: '#666666',
        fontSize: '20px',
        textDecoration: 'none'
       
    }
    return (
        <ul style={list_menu}>
                <li style={listyle}>
                    <a style={buttom} href="#">Home</a>
                    </li>
                <li style={listyle}>
                    <a style={buttom} href="#">About</a>
                    </li>
                <li style={listyle}>
                    <a style={buttom} href="#">Tech Stack</a>
                    </li>
                <li style={listyle}>
                    <a style={buttom} href="#">Projects</a>
                    </li>
                <li style={listyle}>
                    <a style={buttom} href="#">Contact</a>
                </li>
        </ul>
    )
};
export default Navigation;