
import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-medium mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-background/80 mb-8">
            Stay updated with our latest products, promotions, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-12 flex-1 rounded-md border-0 bg-white/10 backdrop-blur-sm px-4 py-2 text-background ring-1 ring-background/20 placeholder:text-background/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            />
            <button className="h-12 rounded-md bg-background text-foreground px-8 py-2 text-sm font-medium hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/40 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
