import ProductCard from "../ProductCard/page";
import styles from "./page.module.scss";
import { FaAngleRight } from "react-icons/fa6";

const ProductCardList = () => {
    return (
        <>
            <div className={styles.ProductListSection}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className={styles.ViewMore}>
                <button>View More <FaAngleRight /></button>
            </div>
        </>
    )
}

export default ProductCardList;