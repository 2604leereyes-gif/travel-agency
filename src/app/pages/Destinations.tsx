import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Clock, Users } from "lucide-react";

export function Destinations() {
  const destinations = [
    {
      name: "Tropical Beach Paradise",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzc5MzAxMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "7 Days",
      groupSize: "2-8 People",
      category: "Beach",
      price: "$1,299",
      description: "Experience crystal clear waters and white sandy beaches in the Maldives."
    },
    {
      name: "Paris & French Riviera",
      location: "France",
      image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc3OTM0ODk3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "10 Days",
      groupSize: "2-12 People",
      category: "Culture",
      price: "$1,899",
      description: "Explore the city of lights and the stunning Mediterranean coastline."
    },
    {
      name: "Tokyo & Kyoto",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1551322120-c697cf88fbdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3OTQxNzExMXww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "12 Days",
      groupSize: "2-10 People",
      category: "Culture",
      price: "$2,199",
      description: "Discover the perfect blend of ancient traditions and modern innovation."
    },
    {
      name: "Mountain Adventure",
      location: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NzkzNjc5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "8 Days",
      groupSize: "4-12 People",
      category: "Adventure",
      price: "$1,599",
      description: "Hike through stunning mountain landscapes and charming alpine villages."
    },
    {
      name: "Santorini Sunset",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1676730056228-7e38cbb88edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzc5Mzc2MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "6 Days",
      groupSize: "2-8 People",
      category: "Romance",
      price: "$1,499",
      description: "Experience magical sunsets and iconic white-washed buildings."
    },
    {
      name: "Dubai Luxury",
      location: "UAE",
      image: "https://images.unsplash.com/photo-1773829126358-1e5f4e5aa532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBtb2Rlcm58ZW58MXx8fHwxNzc5MzYzMzI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5 Days",
      groupSize: "2-6 People",
      category: "Luxury",
      price: "$1,799",
      description: "Experience world-class luxury and futuristic architecture."
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Explore Our Destinations</h1>
          <p className="text-xl">
            Discover breathtaking locations around the world
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-56 overflow-hidden relative">
                <ImageWithFallback
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-blue-600">
                  {dest.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{dest.location}</span>
                </div>
                <CardTitle className="text-xl">{dest.name}</CardTitle>
                <CardDescription>{dest.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{dest.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{dest.groupSize}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-500">From</span>
                    <p className="text-2xl font-semibold text-blue-600">{dest.price}</p>
                  </div>
                  <Button>View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to create a custom travel package tailored to your preferences
          </p>
          <Button size="lg">Contact Our Travel Experts</Button>
        </div>
      </section>
    </div>
  );
}
