// lib/amazonApi.ts
import axios from 'axios';

export interface Product {
  asin: string;
  title: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  url: string;
  description: string;
}

const mockProducts = {
  'smartphones': [
    { asin: 'B0D4F5K1X9', title: 'Samsung Galaxy S24 Ultra', price: 1199, rating: 4.7, reviewCount: 2341, image: 'https://m.media-amazon.com/images/I/51YQPA6TFQL._AC_SY580_.jpg' },
    { asin: 'B0CWK9W5YJ', title: 'iPhone 15 Pro Max', price: 1199, rating: 4.8, reviewCount: 3456, image: 'https://m.media-amazon.com/images/I/71D7xJJ2FzL._AC_SY580_.jpg' },
  ],
  'laptops': [
    { asin: 'B0D7KM2XZV', title: 'MacBook Pro 16 M3 Max', price: 3499, rating: 4.8, reviewCount: 2156, image: 'https://m.media-amazon.com/images/I/41EKzQ5KNXL._AC_SY580_.jpg' },
  ],
  'headphones': [
    { asin: 'B0D8MQ5KLZ', title: 'Sony WH-1000XM5', price: 399, rating: 4.7, reviewCount: 4231, image: 'https://m.media-amazon.com/images/I/61N5GFcqFaL._AC_SY580_.jpg' },
  ],
};

export async function getProductsBySubcategory(slug) {
  const products = mockProducts[slug] || mockProducts['smartphones'] || [];
  return products.map(p => ({ ...p, url: 'https://amazon.com/dp/' + p.asin, description: 'Great product' }));
}

export function sortByReviewsAndRating(products) {
  return [...products].sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
}

export function generateAffiliateLink(asin, tag = 'your-tag-20') {
  return 'https://www.amazon.com/dp/' + asin + '?tag=' + tag;
}
