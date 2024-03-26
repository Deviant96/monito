import ProductCard from "../ProductCard/page";
import styles from "./page.module.scss";
import { FaAngleRight } from "react-icons/fa6";
import dogData from "@/app/data/dogs.json"

const ProductCardList = () => {
    return (
        <>
            <div className={styles.ProductListSection}>
                {dogData.map((dog, index) => (
                    <ProductCard key={index} {...dog} />
                ))}
            </div>
            <div>
                <button className={styles.ViewMore}>View More <FaAngleRight /></button>
            </div>
        </>
    )
}

export default ProductCardList;