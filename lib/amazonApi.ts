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