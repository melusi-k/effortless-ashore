import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categories = [
  {
    title: 'Electronics',
    description: 'Discover our range of cutting-edge electronics and gadgets.',
    path: '/products?category=Electronics'
  },
  {
    title: 'Home',
    description: 'Find beautiful items to enhance your living space.',
    path: '/products?category=Home'
  },
  {
    title: 'Clothing',
    description: 'Explore our collection of stylish and comfortable clothing.',
    path: '/products?category=Clothing'
  },
  {
    title: 'Accessories',
    description: 'Complete your look with our curated accessories.',
    path: '/products?category=Accessories'
  },
  {
    title: 'Fragrances',
    description: 'Experience our luxurious collection of perfumes and fragrances.',
    path: '/products?category=Fragrances'
  }
];

const CollectionsMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  to={category.path}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">{category.title}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CollectionsMenu; 