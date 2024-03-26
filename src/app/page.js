import styles from "./page.module.scss";
import "@/app/styles/main.scss"
import Header from "@/app/(components)/Header/page";
import ProductsSection from "./(components)/ProductsSection/page";
import CtaSection from "./(components)/CtaSection/page";
import BlogListSection from "./(components)/BlogListSection/page";
import CtaSubscribeSection from "./(components)/CtaSubscribeSection/page";
import Footer from "./(components)/Footer/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <ProductsSection />

      <CtaSection />

      <BlogListSection />

      <CtaSubscribeSection />

      <Footer />
    </div>
  );
}
