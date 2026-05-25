export function generateAffiliateLink(asin: string, partnerTag: string = "ugorbatov-20"): string {
  return `https://www.amazon.com/dp/${asin}?tag=ugorbatov-20`;
}

export async function getProductsBySubcategory(slug: string) {
  const products = mockProducts[slug] || mockProducts["smartphones"] || [];
  
  return products.map(p => ({
    ...p,
    url: `https://www.amazon.com/dp/${p.asin}?tag=ugorbatov-20`,
    description: `High-quality product with ${p.reviewCount.toLocaleString()} customer reviews and ${p.rating}/5 rating.`,
  }));
}

export function sortByReviewsAndRating(products: any[]) {
  return [...products].sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }
    return b.reviewCount - a.reviewCount;
  });
}

const mockProducts = {
  "smartphones": [
    { asin: "B0CWK9W5YJ", title: "iPhone 15 Pro Max", price: 1199, rating: 4.8, reviewCount: 3456, image: "https://m.media-amazon.com/images/I/71D7xJJ2FzL._AC_SY580_.jpg" },
  ],
};