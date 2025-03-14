
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductDetailComponent from '../components/ProductDetail';
import { Product } from '../components/ProductCard';
import { mockProducts } from '../data/mockData';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching product data
    setIsLoading(true);
    setTimeout(() => {
      const foundProduct = mockProducts.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        // If product not found, navigate to 404
        navigate('/not-found', { replace: true });
      }
      setIsLoading(false);
    }, 500);
  }, [id, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted rounded aspect-square"></div>
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-6 bg-muted rounded w-1/4 mt-6"></div>
                <div className="h-24 bg-muted rounded w-full mt-6"></div>
                <div className="h-12 bg-muted rounded w-full mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) return null;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductDetailComponent product={product} />
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
