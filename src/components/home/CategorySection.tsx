
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link }) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  
  return (
    <Link to={link} className="group relative overflow-hidden rounded-lg aspect-[3/2] animate-scale-in">
      <div className={isImageLoaded ? 'hidden' : 'image-loading absolute inset-0'} />
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        onLoad={() => setIsImageLoaded(true)}
        style={{ opacity: isImageLoaded ? 1 : 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-medium text-background">{title}</h3>
        <p className="text-background/80 mt-1 flex items-center">
          Shop Now <ArrowRight className="h-4 w-4 ml-2" />
        </p>
      </div>
    </Link>
  );
};

const CategorySection = () => {
  return (
    <section className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <span className="inline-block text-sm text-primary font-medium mb-2">
            Categories
          </span>
          <h2 className="text-3xl font-medium">
            Shop By Category
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard 
            title="Electronics" 
            image="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
            link="/products?category=electronics"
          />
          <CategoryCard 
            title="Clothing" 
            image="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
            link="/products?category=clothing"
          />
          <CategoryCard 
            title="Home" 
            image="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
            link="/products?category=home"
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
