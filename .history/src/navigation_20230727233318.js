import "./navigation.css";
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
        
        
        color: '#666666',
        fontSize: '20px',
        textDecoration: 'none'
       
    }
    return (
        <ul style={list_menu}>
                <li style={listyle}>
                    <a style={buttom} className="btn-a" href="#">Home</a>
                    </li>
                <li style={listyle}>
                    <a style={buttom} className="btn-a" href="#">About</a>
                    </li>
                <li style={listyle}>
                    <a style={buttom} className="btn-a" href="#">Tech Stack</a>
                    </li>
                <li style={listyle}>
                    <a style={buttom} className="btn-a" href="#">Projects</a>
                    </li>
                <li style={listyle}>
                    <a style={buttom} className="btn-a" href="#">Contact</a>
                </li>
        </ul>
    )
};
export default Navigation;