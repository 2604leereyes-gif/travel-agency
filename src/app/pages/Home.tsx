import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, MapPin, Calendar, Users, Star, Award, HeadphonesIcon, Shield } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  const destinations = [
    {
      name: "Tropical Paradise",
      image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzc5MzAxMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Relax on pristine beaches",
      price: "$1,299"
    },
    {
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc3OTM0ODk3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Experience the city of lights",
      price: "$1,899"
    },
    {
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1551322120-c697cf88fbdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3OTQxNzExMXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Discover ancient and modern",
      price: "$2,199"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Best Price Guarantee",
      description: "Find a lower price? We'll match it and give you 10% off."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our travel experts are available around the clock."
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Your information is protected with top-level security."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">Explore the World with Us</h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover amazing destinations and create unforgettable memories
          </p>

          {/* Search Bar */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <Input
                    placeholder="Where to?"
                    className="border-0 p-0 h-auto focus-visible:ring-0"
                  />
                </div>
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <Input
                    type="date"
                    className="border-0 p-0 h-auto focus-visible:ring-0"
                  />
                </div>
                <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                  <Users className="h-5 w-5 text-gray-500" />
                  <Input
                    placeholder="Guests"
                    type="number"
                    className="border-0 p-0 h-auto focus-visible:ring-0"
                  />
                </div>
                <Button className="w-full">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Popular Destinations</h2>
          <p className="text-gray-600 text-lg">
            Explore our handpicked destinations for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{dest.name}</CardTitle>
                <CardDescription>{dest.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-500">Starting from</span>
                    <p className="text-2xl font-semibold text-blue-600">{dest.price}</p>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/destinations">
            <Button size="lg">View All Destinations</Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose WanderWorld?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">What Our Travelers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "Amazing experience! The trip was perfectly organized and exceeded all our
                  expectations. Highly recommend WanderWorld for your next adventure."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">New York, USA</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Book your dream vacation today and create memories that last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages">
              <Button size="lg" variant="secondary">
                Browse Packages
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
