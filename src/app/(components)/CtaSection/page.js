import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";
import styles from "./page.module.scss";

const CtaSection = () => {
    return (
        <section className={styles.CtaSection}>
            <div className={styles.textSection}>
                <header>
                    <h1>One more friend</h1>
                    <h2>Thousands more fun!</h2>
                </header>
                <div className={styles.textContent}>
                    Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                </div>
                <footer className={styles.ctaContainer}>
                    <a className={styles.primaryButton} href="/intro">View Intro <FaRegCirclePlay /></a>
                    <a className={styles.secondaryButton} href="/explore">Explore Now</a>
                </footer>
            </div>

            <div className={styles.ctaImageContainer}>
                <Image className={styles.ctaImage} src="/ctaImage.png" alt="A woman lifting a dog" width={200} height={300} />
            </div>

            <div>
                <div className={styles.RectangleCta1}></div>
                <div className={styles.RectangleCta2}></div>
            </div>
        </section>
    )
}

export default CtaSection;