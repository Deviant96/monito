import styles from "./page.module.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterNav = () => {
    
    return (
        <div className={styles.FooterNavContainer}>
            <ul className={styles.MenuList}>
                <li><a href="/home">Home</a></li>
                <li><a href="/category">Category</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <ul className={styles.SocialList}>
                <li><a href="/Facebook" aria-label="Visit Monito's Facebook page"><FaFacebook /></a></li>
                <li><a href="/Twitter" aria-label="Visit Monito's Twitter page"><FaTwitter /></a></li>
                <li><a href="/Instagram" aria-label="Visit Monito's Instagram page"><FaInstagram /></a></li>
                <li><a href="/YouTube" aria-label="Visit Monito's YouTube page"><FaYoutube /></a></li>
            </ul>
        </div>
    )
}

export default FooterNav;