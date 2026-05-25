// components/ProductCard.tsx
import Image from 'next/image';
import { Product } from '@/lib/data';
import { generateAffiliateLink } from '@/lib/amazonApi';
import styles from '@/styles/ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  partnerTag?: string;
}

export default function ProductCard({ product, partnerTag = 'your-tag-20' }: ProductCardProps) {
  const affiliateLink = generateAffiliateLink(product.asin, partnerTag);
  const stars = Math.round(product.rating);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.rating}>
          <div className={styles.stars}>
            {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
          </div>
          <span className={styles.ratingValue}>{product.rating.toFixed(1)}</span>
          <span className={styles.reviewCount}>
            ({product.reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceLabel}>Price:</span>
            <span className={styles.priceValue}>${product.price.toFixed(2)}</span>
          </div>

          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            data-asin={product.asin}
          >
            View on Amazon
          </a>
        </div>
      </div>

      {/* Structured data for product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.title,
            image: product.image,
            sku: product.asin,
            offers: {
              '@type': 'Offer',
              url: affiliateLink,
              priceCurrency: 'USD',
              price: product.price.toString(),
              availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: product.rating.toString(),
              reviewCount: product.reviewCount.toString(),
            },
          }),
        }}
      />
    </div>
  );
}
