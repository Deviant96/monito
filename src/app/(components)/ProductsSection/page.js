// import styles from "./page.module.scss";
import ProductCardList from "./ProductCardList/page";

const ProductsSection = () => {
    
    return (
        <div>
            <section>
                <header className="">
                    <h2>Whats new?</h2>
                    <h1>Take a look at some of our pets</h1>
                </header>
                <ProductCardList />
            </section>
        </div>
    )
}

export default ProductsSection;