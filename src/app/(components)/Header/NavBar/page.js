import Image from "next/image";
import styles from "./page.module.scss";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../Logo/page";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {
    
    return (
        <nav className={styles.NavContainer}>
            <div className={styles.NavBar}>
                <div className={styles.MenuListContainer}>
                    <RxHamburgerMenu />
                    <ul className={styles.MenuList}>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/category">Category</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <Logo />
                <div className={styles.NavActions}>
                    <div className={styles.Search}>
                        <IoSearch />
                        <input type="text" placeholder="Search something here!"></input>
                    </div>
                    <div className={styles.Join}>
                        <a href="/join" className={styles.secondaryButton}>Join the community</a>
                    </div>
                    <div className={styles.ChangeLanguage}>
                        <span className={styles.ChangeLanguage__Flag}>
                            <Image src="https://hatscripts.github.io/circle-flags/flags/vn.svg" alt="" width={24} height={24} />
                        </span>
                        <span className={styles.ChangeLanguage__CountryCode}>
                            VND
                        </span>
                        <span className={styles.ChangeLanguage__Arrow}>
                            <MdKeyboardArrowDown />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;