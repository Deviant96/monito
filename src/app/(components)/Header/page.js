import NavBar from "@/app/(components)/Header/NavBar/page";
import Hero from "./Hero/page";
import styles from "./page.module.scss";

const Header = () => {
    return (
        <header className={styles.HeaderSection}>
            <NavBar />
            <Hero />
        </header>
    )
}

export default Header;