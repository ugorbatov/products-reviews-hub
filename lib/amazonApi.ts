export function generateAffiliateLink(asin: string, partnerTag: string = process.env.NEXT_PUBLIC_AMAZON_PARTNER_TAG || "your-tag-20"): string {
  return `https://www.amazon.com/dp/${asin}?tag=${partnerTag}`;
}

export async function getProductsBySubcategory(slug: string) {
  const products = mockProducts[slug] || mockProducts["smartphones"] || [];
  const tag = process.env.NEXT_PUBLIC_AMAZON_PARTNER_TAG || "your-tag-20";
  
  return products.map(p => ({
    ...p,
    url: `https://www.amazon.com/dp/${p.asin}?tag=${tag}`,
    description: `High-quality product with ${p.reviewCount.toLocaleString()} customer reviews and ${p.rating}/5 rating.`,
  }));
}