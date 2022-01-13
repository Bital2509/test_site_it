import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVk} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

function SocialNetworks() {
    return (
        <div className='social-networks-block'>
            <ul className='social-networks'>
                <li>
                    <a href="">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FontAwesomeIcon icon={faVk}/></span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FontAwesomeIcon icon={faInstagram}/></span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FontAwesomeIcon icon={faTelegramPlane}/></span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span><FontAwesomeIcon icon={faWhatsapp}/></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialNetworks;