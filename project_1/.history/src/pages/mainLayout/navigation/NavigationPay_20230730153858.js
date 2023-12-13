import { MdSearch } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";


import { RxPerson } from "react-icons/rx";
function PaySearch() {
    return(
        <div className="paysearch">
            <ul>
                <li>
                    <a href="#">
                        <MdSearch></MdSearch>
                        Search
                    </a>
                    </li>
                <li>
                    <a href="#">
                        <RxPerson></RxPerson>
                        Account
                    </a>
                    </li>
                <li>
                    <a href="#">
                        <AiOutlineHeart></AiOutlineHeart>
                        wishlisy
                    </a>
                    </li>
                <li>
                    <a href="#">
                        <FaShoppingCart></FaShoppingCart>
                        Cart
                        </a>
                        </li>
                <li>
                    <a href="#">

                    </a>
                </li>
            </ul>
        </div>
    )
}
export default PaySearch;