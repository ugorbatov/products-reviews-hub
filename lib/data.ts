// lib/types.ts

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

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface SubCategory {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
}

// lib/categories.ts
export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Best electronics and gadgets reviewed and ranked by customer ratings',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/electronics/category-icons/electronics_icon.jpg',
  },
  {
    id: '2',
    name: 'Home & Kitchen',
    slug: 'home-kitchen',
    description: 'Top-rated home and kitchen products for modern living',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/home-kitchen/category-icons/home_kitchen_icon.jpg',
  },
  {
    id: '3',
    name: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    description: 'Best sports and outdoor gear recommended by customers',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/sports-outdoors/category-icons/sports_icon.jpg',
  },
  {
    id: '4',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Popular fashion items and accessories with highest ratings',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/fashion/category-icons/fashion_icon.jpg',
  },
  {
    id: '5',
    name: 'Beauty & Personal Care',
    slug: 'beauty-personal-care',
    description: 'Top beauty and personal care products rated by customers',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/beauty/category-icons/beauty_icon.jpg',
  },
  {
    id: '6',
    name: 'Toys & Games',
    slug: 'toys-games',
    description: 'Best toys and games for all ages with customer reviews',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/toys/category-icons/toys_icon.jpg',
  },
  {
    id: '7',
    name: 'Books',
    slug: 'books',
    description: 'Most popular and highly-rated books across all genres',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/books/category-icons/books_icon.jpg',
  },
  {
    id: '8',
    name: 'Office Supplies',
    slug: 'office-supplies',
    description: 'Professional office supplies and equipment rated by users',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/office/category-icons/office_icon.jpg',
  },
  {
    id: '9',
    name: 'Tools & Hardware',
    slug: 'tools-hardware',
    description: 'Top-quality tools and hardware for DIY and professionals',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/tools/category-icons/tools_icon.jpg',
  },
  {
    id: '10',
    name: 'Pet Supplies',
    slug: 'pet-supplies',
    description: 'Best pet products and supplies with excellent ratings',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/pets/category-icons/pets_icon.jpg',
  },
  {
    id: '11',
    name: 'Automotive',
    slug: 'automotive',
    description: 'Top-rated automotive accessories and car care products',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/automotive/category-icons/auto_icon.jpg',
  },
  {
    id: '12',
    name: 'Garden & Outdoor',
    slug: 'garden-outdoor',
    description: 'Best garden tools and outdoor equipment rated by customers',
    image: 'https://images-na.ssl-images-amazon.com/images/G/01/garden/category-icons/garden_icon.jpg',
  },
];

export const subCategories: SubCategory[] = [
  // Electronics
  { id: '1-1', categoryId: '1', name: 'Smartphones', slug: 'smartphones', description: 'Latest smartphones ranked by rating' },
  { id: '1-2', categoryId: '1', name: 'Laptops', slug: 'laptops', description: 'Best laptops for work and gaming' },
  { id: '1-3', categoryId: '1', name: 'Headphones', slug: 'headphones', description: 'Top audio headphones' },
  { id: '1-4', categoryId: '1', name: 'Tablets', slug: 'tablets', description: 'Popular tablets' },
  { id: '1-5', categoryId: '1', name: 'Smart Watches', slug: 'smartwatches', description: 'Wearable tech' },

  // Home & Kitchen
  { id: '2-1', categoryId: '2', name: 'Kitchen Appliances', slug: 'kitchen-appliances', description: 'Top kitchen tools' },
  { id: '2-2', categoryId: '2', name: 'Bedding', slug: 'bedding', description: 'Quality bedding products' },
  { id: '2-3', categoryId: '2', name: 'Cookware', slug: 'cookware', description: 'Best cookware sets' },
  { id: '2-4', categoryId: '2', name: 'Vacuum Cleaners', slug: 'vacuum-cleaners', description: 'High-rated vacuums' },
  { id: '2-5', categoryId: '2', name: 'Furniture', slug: 'furniture', description: 'Home furniture' },

  // Sports & Outdoors
  { id: '3-1', categoryId: '3', name: 'Running Shoes', slug: 'running-shoes', description: 'Best running footwear' },
  { id: '3-2', categoryId: '3', name: 'Camping Gear', slug: 'camping-gear', description: 'Outdoor camping equipment' },
  { id: '3-3', categoryId: '3', name: 'Fitness Equipment', slug: 'fitness-equipment', description: 'Home workout gear' },
  { id: '3-4', categoryId: '3', name: 'Bicycles', slug: 'bicycles', description: 'Quality bikes' },
  { id: '3-5', categoryId: '3', name: 'Sports Apparel', slug: 'sports-apparel', description: 'Athletic clothing' },
];
