
import "./themify-icons/themify-icons.css";

function Icon() {
    const listyle = {
        listStyle: "none"
        width: 30px;
        height: 30px;
        border-radius: 50%;
            background-color: var(--text-color);
        text-align: center;
        line-height: 30px;
    cursor: pointer;
    }
    const ulstyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '15px'
    }
    const buttom = {
        letterSpacing: '0.5px',
        position: 'relative',
        color: 'black',
        fontSize: '20px',
        textDecoration: 'none'
    }
    return (
        <ul style={ulstyle}>
                <li style={listyle}>
                    <a style={buttom} href="#"><i className="ti-github"></i></a>
                    </li>
                <li style={listyle}>
                    <a style={buttom} href="#"><i className="ti-twitter-alt"></i></a>
                    </li>
                <li style={listyle}>
                    <a style={buttom} href="#"><i className="ti-linkedin"></i></a>
                    </li>
                    
                
            </ul>
            

    )
};
export default Icon;