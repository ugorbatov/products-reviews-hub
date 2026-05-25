import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogType?: string;
    structuredData?: object;
  };
}

export default function Layout({ children, seo = {} }: LayoutProps) {
  const title = seo.title || "Amazon Reviews Hub";
  const description = seo.description || "Discover the best Amazon products";
  const keywords = seo.keywords || ["amazon", "products", "reviews"];
  const canonical = seo.canonical || "https://amazon-reviews.example.com";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href={canonical} />
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <span>Amazon Reviews Hub</span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/#categories" className={styles.navLink}>Categories</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Categories</h4>
            <ul>
              <li><Link href="/electronics">Electronics</Link></li>
              <li><Link href="/home-kitchen">Home & Kitchen</Link></li>
              <li><Link href="/sports-outdoors">Sports & Outdoors</Link></li>
              <li><Link href="/fashion">Fashion</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Information</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>About</h4>
            <p>We help you find the best Amazon products by sorting them by real customer ratings and reviews.</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Amazon Reviews Hub. As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </footer>
    </>
  );
}