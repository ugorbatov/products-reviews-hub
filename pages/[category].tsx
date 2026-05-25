import { useMemo } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { categories, subCategories } from "@/lib/data";
import { getProductsBySubcategory, sortByReviewsAndRating } from "@/lib/amazonApi";
import styles from "@/styles/Category.module.css";

const domain = "http://localhost:3000";

export default function CategoryPage({ category, subCats, products, seo }) {
  const sortedProducts = useMemo(() => sortByReviewsAndRating(products), [products]);

  return (
    <Layout seo={seo}>
      <div className={styles.header}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{category.name}</span>
        </div>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

      {subCats.length > 0 && (
        <section className={styles.subcategories}>
          <h2>Browse Subcategories</h2>
          <div className={styles.subCatGrid}>
            {subCats.map(subcat => (
              <Link key={subcat.id} href={`/${category.slug}/${subcat.slug}`} className={styles.subCatCard}>
                <h3>{subcat.name}</h3>
                <p>{subcat.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.products}>
        <div className={styles.productHeader}>
          <h2>Top Rated Products</h2>
          <p className={styles.sortInfo}>Sorted by rating and number of reviews</p>
        </div>
        {sortedProducts.length > 0 ? (
          <div className={styles.grid}>
            {sortedProducts.map(product => (
              <ProductCard key={product.asin} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <p>No products found in this category yet.</p>
          </div>
        )}
      </section>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: categories.map(cat => ({ params: { category: cat.slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const categorySlug = params?.category;
  const category = categories.find(cat => cat.slug === categorySlug);

  if (!category) {
    return { notFound: true };
  }

  const subCats = subCategories.filter(sub => sub.categoryId === category.id);
  let allProducts = [];
  for (const subcat of subCats) {
    const products = await getProductsBySubcategory(subcat.slug);
    allProducts = [...allProducts, ...products];
  }

  return {
    props: { category, subCats, products: allProducts, seo: {} },
    revalidate: 3600,
  };
};