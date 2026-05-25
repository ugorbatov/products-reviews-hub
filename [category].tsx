// pages/[category].tsx
import { useMemo } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { categories, subCategories, Product } from '@/lib/data';
import { getProductsBySubcategory, sortByReviewsAndRating } from '@/lib/amazonApi';
import { generateCategorySEO } from '@/lib/seo';
import styles from '@/styles/Category.module.css';

const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://amazon-reviews.example.com';

interface CategoryPageProps {
  category: typeof categories[0];
  subCats: typeof subCategories;
  products: Product[];
  seo: any;
}

export default function CategoryPage({ category, subCats, products, seo }: CategoryPageProps) {
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
              <Link
                key={subcat.id}
                href={`/${category.slug}/${subcat.slug}`}
                className={styles.subCatCard}
              >
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
          <p className={styles.sortInfo}>
            Sorted by rating and number of reviews
          </p>
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

      <section className={styles.info}>
        <h2>About {category.name}</h2>
        <p>
          This page showcases the best {category.name.toLowerCase()} products available on Amazon,
          sorted by customer ratings and number of reviews. All products displayed here have been
          reviewed by real Amazon customers, and we've organized them to help you find exactly
          what you're looking for.
        </p>
        <p>
          We use Amazon's affiliate links to support this site. When you click "View on Amazon"
          and make a purchase, we may earn a small commission at no extra cost to you.
        </p>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: categories.map(cat => ({
      params: { category: cat.slug },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categorySlug = params?.category as string;
  const category = categories.find(cat => cat.slug === categorySlug);

  if (!category) {
    return { notFound: true };
  }

  const subCats = subCategories.filter(sub => sub.categoryId === category.id);
  
  // Fetch products for all subcategories
  let allProducts: Product[] = [];
  for (const subcat of subCats) {
    const products = await getProductsBySubcategory(subcat.slug);
    allProducts = [...allProducts, ...products];
  }

  const seo = generateCategorySEO(category, domain, allProducts.length);

  return {
    props: {
      category,
      subCats,
      products: allProducts,
      seo,
    },
    revalidate: 3600, // Revalidate every hour
  };
};
