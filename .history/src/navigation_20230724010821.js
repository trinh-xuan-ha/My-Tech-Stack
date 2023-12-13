function Navigation() {
    const navigationStyle = {
        display: 'flex';
        justify-content: 'center';
        align-items: 'center';
        gap: 50px;

      };
    return (
        <ul>
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