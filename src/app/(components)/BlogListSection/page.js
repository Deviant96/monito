import BlogArticle from "./BlogArticle/page";
import { FaAngleRight } from "react-icons/fa6";

const BlogListSection = () => {
    return (
        <section>
            <header className="">
                <h2>You already know ?</h2>
                <h1>Useful pet knowledge</h1>
            </header>

            <div>
                <BlogArticle />
                <BlogArticle />
                <BlogArticle />
            </div>

            <div className="">
                <button>View More <FaAngleRight /></button>
            </div>
        </section>
    )
}

export default BlogListSection;