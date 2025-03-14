import { Product } from '../components/ProductCard';

// Generate a unique ID for products
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Create mock product data
export const mockProducts: Product[] = [
  {
    id: generateId(),
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with crystal clear audio.',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Electronics',
    rating: 4.8,
    featured: true,
    inStock: true,
    originalPrice: 299.99,
  },
  {
    id: generateId(),
    name: 'Smart Watch',
    description: 'Track your fitness, receive notifications, and more with this sleek smart watch.',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Electronics',
    rating: 4.5,
    featured: true,
    inStock: true,
    originalPrice: 229.99,
  },
  {
    id: generateId(),
    name: 'Modern Desk Lamp',
    description: 'A sleek and modern desk lamp with adjustable brightness and color temperature.',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Home',
    rating: 4.3,
    featured: false,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Premium Cotton T-Shirt',
    description: 'Soft and comfortable premium cotton t-shirt in a versatile design.',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Clothing',
    rating: 4.6,
    featured: false,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Leather Wallet',
    description: 'Handcrafted genuine leather wallet with multiple card slots and a coin pocket.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Accessories',
    rating: 4.7,
    featured: true,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Electronics',
    rating: 4.4,
    featured: false,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Stainless Steel Water Bottle',
    description: 'Eco-friendly insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    price: 34.99,
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Home',
    rating: 4.9,
    featured: true,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Minimalist Backpack',
    description: 'Stylish and functional backpack with laptop compartment and multiple pockets.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Accessories',
    rating: 4.6,
    featured: false,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Scented Candle Set',
    description: 'Set of 3 premium scented candles in elegant glass jars.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1608571423868-f0440a1c33c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1608571423868-f0440a1c33c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Home',
    rating: 4.5,
    featured: false,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with deep bass and 20-hour battery life.',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1589003077984-898c72103c22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1589003077984-898c72103c22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Electronics',
    rating: 4.7,
    featured: true,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Denim Jacket',
    description: 'Classic denim jacket with a modern fit and premium hardware.',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Clothing',
    rating: 4.8,
    featured: false,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Ceramic Coffee Mug',
    description: 'Handcrafted ceramic coffee mug with an ergonomic handle and minimalist design.',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    category: 'Home',
    rating: 4.4,
    featured: false,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Chanel N°5 Eau de Parfum',
    description: 'The iconic floral-aldehyde fragrance in its purest form. A bouquet of abstract flowers with notes of rose and jasmine.',
    price: 135.00,
    imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fragrances',
    rating: 4.9,
    featured: true,
    inStock: true,
    originalPrice: 150.00,
  },
  {
    id: generateId(),
    name: 'Dior Sauvage Eau de Parfum',
    description: 'A radically fresh composition with powerful woody and spicy notes, enhanced by the freshness of Calabrian bergamot.',
    price: 155.00,
    imageUrl: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fragrances',
    rating: 4.8,
    featured: true,
    inStock: true,
    originalPrice: 175.00,
  },
  {
    id: generateId(),
    name: 'Tom Ford Black Orchid',
    description: 'A luxurious and sensual fragrance of rich dark accords and alluring potion of black orchids and spice.',
    price: 134.00,
    imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fragrances',
    rating: 4.7,
    featured: true,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Jo Malone London Wood Sage & Sea Salt',
    description: 'Fresh and energizing fragrance combining woody earthiness with fresh sea salt notes.',
    price: 144.00,
    imageUrl: 'https://images.unsplash.com/photo-1588405748880-8565e9b11161?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1588405748880-8565e9b11161?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fragrances',
    rating: 4.6,
    featured: false,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Yves Saint Laurent Black Opium',
    description: 'The seductively intoxicating feminine fragrance with notes of black coffee, white flowers, and vanilla.',
    price: 128.00,
    imageUrl: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fragrances',
    rating: 4.8,
    featured: true,
    inStock: true,
  },
  {
    id: generateId(),
    name: 'Creed Aventus',
    description: 'A sophisticated blend for men featuring notes of bergamot, blackcurrant leaves, apple, and pineapple.',
    price: 325.00,
    imageUrl: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Fragrances',
    rating: 4.9,
    featured: true,
    inStock: true,
    originalPrice: 375.00,
  },
];
