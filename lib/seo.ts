// lib/seo.ts
import { Product, Category } from './data';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  structuredData: object;
}

export function generateHomeSEO(domain: string): SEOMetadata {
  return {
    title: 'Amazon Product Reviews - Best Rated Products Sorted by Rating & Reviews',
    description: 'Discover the best Amazon products ranked by customer ratings and review count. Find top-rated electronics, home goods, sports equipment, and more with honest reviews.',
    keywords: [
      'amazon products',
      'product reviews',
      'best rated products',
      'amazon reviews',
      'top products',
      'customer ratings',
    ],
    canonical: domain,
    ogTitle: 'Amazon Product Reviews - Top Rated Products',
    ogDescription: 'Find the best Amazon products ranked by real customer ratings and reviews.',
    ogImage: `${domain}/og-image.jpg`,
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Amazon Reviews Hub',
      url: domain,
      description: 'Discover and compare the best Amazon products sorted by customer ratings.',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${domain}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  };
}

export function generateCategorySEO(
  category: Category,
  domain: string,
  productCount: number
): SEOMetadata {
  return {
    title: `${category.name} - Best Rated Products on Amazon`,
    description: `Browse the best ${category.name.toLowerCase()} products on Amazon. ${productCount} top-rated items sorted by customer reviews and ratings.`,
    keywords: [
      `best ${category.name.toLowerCase()}`,
      `top rated ${category.name.toLowerCase()}`,
      `amazon ${category.name.toLowerCase()}`,
      category.name.toLowerCase(),
    ],
    canonical: `${domain}/${category.slug}`,
    ogTitle: `Best ${category.name} on Amazon - Top Rated`,
    ogDescription: `Discover the ${productCount} highest-rated ${category.name.toLowerCase()} products on Amazon.`,
    ogImage: category.image,
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${category.name} Reviews`,
      url: `${domain}/${category.slug}`,
      description: category.description,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: category.name,
            item: `${domain}/${category.slug}`,
          },
        ],
      },
    },
  };
}

export function generateProductSEO(
  product: Product,
  domain: string
): SEOMetadata {
  return {
    title: `${product.title} - Reviews & Price on Amazon`,
    description: `Read reviews for ${product.title}. ${product.reviewCount.toLocaleString()} customer ratings, ${product.rating.toFixed(1)}⭐ on Amazon. Price: $${product.price.toFixed(2)}.`,
    keywords: [
      product.title,
      `${product.title} reviews`,
      `${product.title} price`,
      `buy ${product.title}`,
    ],
    canonical: `${domain}/product/${product.asin}`,
    ogTitle: `${product.title}`,
    ogDescription: `⭐ ${product.rating}/5 (${product.reviewCount.toLocaleString()} reviews) - $${product.price}`,
    ogImage: product.image,
    ogType: 'product',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.title,
      image: product.image,
      description: product.description,
      sku: product.asin,
      offers: {
        '@type': 'Offer',
        url: product.url,
        priceCurrency: 'USD',
        price: product.price.toString(),
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating.toString(),
        reviewCount: product.reviewCount.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      brand: {
        '@type': 'Brand',
        name: 'Amazon',
      },
    },
  };
}

export function generateSubcategorySEO(
  categorySlug: string,
  subcategoryName: string,
  domain: string,
  productCount: number
): SEOMetadata {
  return {
    title: `${subcategoryName} Reviews - Best Rated on Amazon`,
    description: `Top ${productCount} ${subcategoryName.toLowerCase()} products on Amazon ranked by customer ratings and reviews. Find the best option for you.`,
    keywords: [
      `best ${subcategoryName.toLowerCase()}`,
      `${subcategoryName.toLowerCase()} reviews`,
      `top ${subcategoryName.toLowerCase()}`,
    ],
    canonical: `${domain}/${categorySlug}/${subcategoryName.toLowerCase().replace(/\s+/g, '-')}`,
    ogTitle: `Best ${subcategoryName} - Amazon Reviews`,
    ogDescription: `Discover the best ${subcategoryName.toLowerCase()} on Amazon.`,
    ogImage: `${domain}/og-image.jpg`,
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${subcategoryName} Reviews`,
      description: `Top rated ${subcategoryName.toLowerCase()} on Amazon`,
    },
  };
}
