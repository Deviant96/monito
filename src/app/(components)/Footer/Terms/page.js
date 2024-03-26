import styles from "./page.module.scss";

const Terms = () => {
    
    return (
        <div>
            <ul className={styles.TermsMenu}>
                <li><a href="/home">Terms of Service</a></li>
                <li><a href="/category">Privacy Policy</a></li>
            </ul>
        </div>
    )
}

export default Terms;