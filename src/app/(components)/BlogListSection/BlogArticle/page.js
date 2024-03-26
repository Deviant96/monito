import Image from "next/image";

const BlogArticle = () => {
    return (
        <article class="item-card">
            <Image src="/dog.jpg" alt="Pomeranian White" width={200} height={200} />
            <div class="item-details">
                <span>Pet knowledge</span>
                <h2>What is a Pomeranian? How to Identify Pomeranian Dogs</h2>
                <summary>
                    The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.
                </summary>
            </div>
        </article>
    )
}

export default BlogArticle;