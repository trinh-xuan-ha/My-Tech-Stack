function Navigation() {
    const list_menu = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px'
      }
    coust listyle = {
        liststyle: "none";
    }
    return (
        <ul style={list_menu}>
                <li>
                    <a href="#">Home</a>
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