import Image from "next/image";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
    return (
        <div>
            <section>
                <header className="">
                    <h1>One more friend</h1>
                    <h2>Thousands more fun!</h2>
                </header>

                <div>
                    Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                </div>

                <footer className="ctaContainer">
                    <a className="#">View Intro <FaRegCirclePlay /></a>
                    <a className="#">Explore Now</a>
                </footer>

                <div className="heroImage">
                    <Image src="/heroImage.png" alt="A woman lifting a dog" width={200} height={300} />
                </div>
            </section>
        </div>
    )
}

export default Hero;