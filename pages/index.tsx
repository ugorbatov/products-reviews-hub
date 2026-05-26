import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { categories } from '@/lib/data';
import { generateHomeSEO } from '@/lib/seo';
import styles from '@/styles/Home.module.css';

const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://amazon-reviews.example.com';
const seo = generateHomeSEO(domain);

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="nhTm8EaCVeDejllmwLpJpXLnsmc0XY6keRKjbtA9POE" />
      </Head>
      <Layout seo={seo}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Find the Best Products</h1>
            <p>
              Discover top-rated products sorted by customer reviews and ratings.
              Make informed purchasing decisions with real reviews from thousands of customers.
            </p>
            
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>
        </section>

        <section id="categories" className={styles.section}>
          <h2>Browse Categories</h2>
          
          <div className={styles.grid}>
            {filteredCategories.map(category => (
              <Link key={category.id} href={`/${category.slug}`} className={styles.categoryCard}>
                <div className={styles.categoryImage}>
                  <img src={category.image} alt={category.name} />
                </div>
                <div className={styles.categoryInfo}>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className={styles.link}>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        

        <section className={styles.cta}>
          <h2>Ready to Find the Best Products?</h2>
          <p>Browse our categories above or search for specific product types.</p>
          <button className="primary">
            <Link href="/#categories" style={{ color: 'inherit' }}>
              Start Exploring
            </Link>
          </button>
        </section>
      </Layout>
    </>
  );
}