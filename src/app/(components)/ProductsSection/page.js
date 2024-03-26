import styles from "./page.module.scss";
import ProductCardList from "./ProductCardList/page";
import { FaAngleRight } from "react-icons/fa6";

const ProductsSection = () => {
    
    return (
        <section className={styles.ProductSection}>
            <header className="">
                <h2>Whats new?</h2>
                <h1>Take a look at some of our pets</h1>
                <div className={styles.ViewMoreTopContainer}>
                    <button className={styles.ViewMore}>View More <FaAngleRight /></button>
                </div>
            </header>
            <ProductCardList />
        </section>
    )
}

export default ProductsSection;