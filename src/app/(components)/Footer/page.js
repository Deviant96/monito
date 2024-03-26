import FooterNav from "./FooterNav/page";
import Logo from "../Logo/page";
import Copyright from "./Copyright/page";
import Terms from "./Terms/page";
import styles from "./page.module.scss";
import CtaSubscribeSection from "./CtaSubscribeSection/page";

const Footer = () => {
    return (
        <footer className={styles.FooterSection}>
            <CtaSubscribeSection />
            
            <FooterNav />

            <hr />

            <div className={styles.BottomPart}>
                <div className={styles.FooterLogo}>
                    <Logo />
                </div>

                <div className={styles.Terms}>
                    <Terms />
                </div>

                <div className={styles.Copy}>
                    <Copyright />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
