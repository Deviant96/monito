import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";
import styles from "./page.module.scss";

const Hero = () => {
    return (
        <section className={styles.HeroSection}>
            <header className="">
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

            <div>
                <Image 
                    className={styles.HeroImage} 
                    src="/hero.png" 
                    alt="A smiling woman lifting a dog" 
                    width={400} 
                    height={380}
                    style={{
                        height: "100%"
                    }}
                />
            </div>

            <div>
                <div className={styles.Rectangles1}></div>
            </div>
        </section>
    )
}

export default Hero;