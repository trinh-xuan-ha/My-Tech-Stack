import { MdSearch } from "react-icons/md";
import { IconName } from "react-icons/ai";


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

                    </a>
                    </li>
                <li>
                    <a href="#">
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