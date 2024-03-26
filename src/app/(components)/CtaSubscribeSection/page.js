import styles from "./page.module.scss";

const CtaSubscribeSection = () => {
    return (
        <section className={styles.CtaSubscribeContainer}>
            <header className="">
                <h1>Register now so you don&apos;t miss our programs</h1>
            </header>
            <footer className={styles.Footer}>
                <label for="ctaSubscribe">Enter your email</label>
                <form>
                    <input id="ctaSubscribe" type="text" placeholder="Enter your email" />
                    <input type="submit" value="Subcribe Now" />
                </form>
            </footer>
        </section>
    )
}

export default CtaSubscribeSection;