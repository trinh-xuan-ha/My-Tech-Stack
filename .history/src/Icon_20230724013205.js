
import "./themify-icons/themify-icons.css";

function Icon() {
    const listyle = {
        listStyle: "none"
    }
    const ulstyle = {
        display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    }
    return (
        <ul>
                <li style={listyle}>
                    <a href="#"><i className="ti-github"></i></a>
                    </li>
                <li style={listyle}>
                    <a href="#"><i className="ti-twitter-alt"></i></a>
                    </li>
                <li style={listyle}>
                    <a href="#"><i className="ti-linkedin"></i></a>
                    </li>
                    
                
            </ul>
            

    )
};
export default Icon;