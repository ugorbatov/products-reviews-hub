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

const mockProducts: { [key: string]: any[] } = {
  "smartphones": [
    { asin: "B0D4F5K1X9", title: "Samsung Galaxy S24 Ultra", price: 1199, rating: 4.7, reviewCount: 2341, image: "https://m.media-amazon.com/images/I/51YQPA6TFQL._AC_SY580_.jpg" },
    { asin: "B0CWK9W5YJ", title: "iPhone 15 Pro Max", price: 1199, rating: 4.8, reviewCount: 3456, image: "https://m.media-amazon.com/images/I/71D7xJJ2FzL._AC_SY580_.jpg" },
    { asin: "B0D1F3JXKL", title: "Google Pixel 8 Pro", price: 999, rating: 4.6, reviewCount: 1876, image: "https://m.media-amazon.com/images/I/51A7c5fhPnL._AC_SY580_.jpg" },
  ],
  "laptops": [
    { asin: "B0D7KM2XZV", title: "MacBook Pro 16 M3 Max", price: 3499, rating: 4.8, reviewCount: 2156, image: "https://m.media-amazon.com/images/I/41EKzQ5KNXL._AC_SY580_.jpg" },
    { asin: "B0D4KZ8XLP", title: "Dell XPS 15 Plus", price: 1699, rating: 4.6, reviewCount: 1234, image: "https://m.media-amazon.com/images/I/81zx5D-sVhL._AC_SY580_.jpg" },
  ],
  "headphones": [
    { asin: "B0D8MQ5KLZ", title: "Sony WH-1000XM5", price: 399, rating: 4.7, reviewCount: 4231, image: "https://m.media-amazon.com/images/I/61N5GFcqFaL._AC_SY580_.jpg" },
    { asin: "B0DKWQ4ZVN", title: "Bose QuietComfort 45", price: 349, rating: 4.5, reviewCount: 3456, image: "https://m.media-amazon.com/images/I/61O-p9NPypL._AC_SY580_.jpg" },
  ],
};

export async function getProductsBySubcategory(slug: string): Promise<Product[]> {
  const products = mockProducts[slug] || mockProducts["smartphones"] || [];
  
  return products.map(p => ({
    ...p,
    url: `https://www.amazon.com/dp/${p.asin}?tag=ugorbatov-20`,
    description: `High-quality product with ${p.reviewCount.toLocaleString()} customer reviews and ${p.rating}/5 rating.`,
  }));
}

export function sortByReviewsAndRating(products: Product[]): Product[] {
  return [...products].sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }
    return b.reviewCount - a.reviewCount;
  });
}

export function generateAffiliateLink(asin: string, partnerTag: string = "ugorbatov-20"): string {
  return `https://www.amazon.com/dp/${asin}?tag=ugorbatov-20`;
}