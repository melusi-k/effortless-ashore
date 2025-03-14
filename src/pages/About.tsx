import React from 'react';
import { MapPin, Star } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the journey of Shop, a proudly South African fragrance and lifestyle retailer.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Proudly South African
            </h2>
            <p className="text-lg text-muted-foreground">
              Shop is wholly owned by Sparkles, bringing luxury fragrances and lifestyle products to South African consumers. Our journey began with a vision to make premium fragrances accessible while maintaining the highest standards of quality and authenticity.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="h-5 w-5 text-primary" />
              <span>Committed to authenticity and excellence</span>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80"
              alt="Luxury perfume display"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Locations Section */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bloemfontein</h3>
                  <p className="text-muted-foreground">
                    Our roots in the heart of South Africa, serving the Free State with a carefully curated collection of fragrances.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cape Town</h3>
                  <p className="text-muted-foreground">
                    Our coastal presence in the Mother City, bringing international fragrances to the Western Cape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-muted-foreground">
                We ensure every product meets the highest standards of excellence.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Authenticity</h3>
              <p className="text-muted-foreground">
                Every fragrance in our collection is genuine and carefully sourced.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Service</h3>
              <p className="text-muted-foreground">
                We're committed to providing exceptional customer experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About; 