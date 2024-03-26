

import Image from "next/image";

const ProductCard = () => {
    return (
        <article class="item-card">
            <Image src="/dog.jpg" alt="Pomeranian White" width={200} height={200} />
            <div class="item-details">
                <h2>MO231 - Pomeranian White</h2>
                <p>Gene: Male</p>
                <p>Age: 02 months</p>
                <p>6,900,000 VND</p>
            </div>
        </article>
    )
}

export default ProductCard;