function Navigation() {
    const list_menu = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px'
    };
    const listyle = {
        liststyle: "none"
    }
    const buttom = {
        letterspacing: '0.5px',
        position: 'relative',
        color: 'black',
        fontsize: '20px'
    }
    return (
        <ul style={list_menu}>
                <li >
                    <a style={buttom} href="#">Home</a>
                    </li>
                <li>
                    <a href="#">About</a>
                    </li>
                <li>
                    <a href="#">Tech Stack</a>
                    </li>
                <li>
                    <a href="#">Projects</a>
                    </li>
                <li>
                    <a href="#">Contact</a>
                </li>
        </ul>
    )
};
export default Navigation;