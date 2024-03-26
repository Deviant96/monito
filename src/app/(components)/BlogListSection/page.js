import BlogArticle from "./BlogArticle/page";
import { FaAngleRight } from "react-icons/fa6";
import styles from "./page.module.scss";
import blogData from "@/app/data/blog.json"

const BlogListSection = () => {
    return (
        <section className={styles.BlogListSection}>
            <header>
                <h2>You already know ?</h2>
                <h1>Useful pet knowledge</h1>
            </header>

            <div className={styles.BlogList}>
                {blogData.map((blog, index) => (
                    <BlogArticle key={index} {...blog} />
                ))}
            </div>

            <div>
                <button className={styles.ViewMore}>View More <FaAngleRight /></button>
            </div>
        </section>
    )
}

export default BlogListSection;