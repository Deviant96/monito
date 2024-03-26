import styles from "./page.module.scss";
import Image from "next/image";

const ProductCard = ({name, gene, age, price, image}) => {
    return (
        <article className={styles.ItemCard}>
            <Image src={image} alt="Pomeranian White" width={170} height={170} />
            <div className={styles.ItemDetails}>
                <h2 className={styles.Title}>{name}</h2>
                <p className={styles.Gender}>Gene: <span className={styles.Bold}>{gene}</span></p>
                <p className={styles.Age}>Age: <span className={styles.Bold}>{age}</span></p>
                <p className={styles.Price}>{price}</p>
            </div>
        </article>
    )
}

export default ProductCard;