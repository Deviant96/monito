import FooterNav from "./FooterNav/page";
import Logo from "../Logo/page";
import Copyright from "./Copyright/page";
import Terms from "./Terms/page";
import styles from "./page.module.scss";

const Footer = () => {
    return (
        <div className={styles.FooterSection}>
            <FooterNav />

            <hr />

            <div className={styles.FooterLogo}>
                <Logo />
            </div>

            <Terms />

            <Copyright />
        </div>
    )
}

export default Footer;
