import Image from "next/image";
import styles from "./page.module.scss";

const BlogArticle = ({image, alt, title, summary, category}) => {
    return (
        <article className={styles.BlogItem}>
            <Image src={image} alt={alt} width={365} height={244} />
            <div className={styles.BlogDetails}>
                <span className={styles.CategoryName}>{category}</span>
                <h2>{title}</h2>
                <summary>
                    {summary}
                </summary>
            </div>
        </article>
    )
}

export default BlogArticle;