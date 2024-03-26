import Image from "next/image";
import styles from "./page.module.scss";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Logo/page";

const NavBar = () => {
    
    return (
        <div className={styles.NavContainer}>
            <div className={styles.NavBar}>
                <div className={styles.MenuList}>
                    <RxHamburgerMenu />
                </div>
                <Logo />
                <div className={styles.Search}>
                    <IoSearch />
                </div>
            </div>
        </div>
    )
}

export default NavBar;