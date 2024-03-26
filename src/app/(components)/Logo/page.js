import Image from "next/image";
import styles from "./page.module.scss";

const Logo = () => {
    
    return (
        <div className={styles.LogoContainer}>
            <Image className={styles.Logo} src="/logo.png" alt="" width={100} height={80} />
        </div>
    )
}

export default Logo;