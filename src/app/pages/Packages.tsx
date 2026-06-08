import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Check, Plane, Hotel, Utensils, Camera } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function Packages() {
  const packages = [
    {
      name: "Budget Explorer",
      price: "$999",
      duration: "5 Days / 4 Nights",
      category: "budget",
      popular: false,
      features: [
        "Round-trip economy flights",
        "3-star hotel accommodation",
        "Daily breakfast included",
        "Airport transfers",
        "Basic travel insurance",
        "City tour guide"
      ]
    },
    {
      name: "Premium Traveler",
      price: "$1,899",
      duration: "7 Days / 6 Nights",
      category: "premium",
      popular: true,
      features: [
        "Round-trip business class flights",
        "4-star hotel accommodation",
        "All meals included",
        "Private airport transfers",
        "Comprehensive travel insurance",
        "Personal tour guide",
        "Spa & wellness access",
        "Adventure activities"
      ]
    },
    {
      name: "Luxury Experience",
      price: "$3,499",
      duration: "10 Days / 9 Nights",
      category: "luxury",
      popular: false,
      features: [
        "Round-trip first class flights",
        "5-star luxury resort",
        "Gourmet dining experiences",
        "Private chauffeur service",
        "Premium travel insurance",
        "Personal concierge",
        "Exclusive VIP experiences",
        "All activities included",
        "Photography service",
        "Spa & wellness package"
      ]
    }
  ];

  const allInclusive = [
    {
      icon: Plane,
      title: "Flights",
      description: "Round-trip airfare included"
    },
    {
      icon: Hotel,
      title: "Accommodation",
      description: "Handpicked hotels & resorts"
    },
    {
      icon: Utensils,
      title: "Meals",
      description: "Breakfast & selected meals"
    },
    {
      icon: Camera,
      title: "Activities",
      description: "Guided tours & experiences"
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Travel Packages</h1>
          <p className="text-xl">
            Choose the perfect package for your dream vacation
          </p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">All-Inclusive Packages</h2>
          <p className="text-gray-600 text-lg">
            Everything you need for a worry-free vacation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allInclusive.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Choose Your Package</h2>
            <p className="text-gray-600 text-lg">
              Select a package that fits your style and budget
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="budget">Budget</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <PackageCard key={index} package={pkg} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="budget">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages
                  .filter((pkg) => pkg.category === "budget")
                  .map((pkg, index) => (
                    <PackageCard key={index} package={pkg} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="premium">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages
                  .filter((pkg) => pkg.category === "premium")
                  .map((pkg, index) => (
                    <PackageCard key={index} package={pkg} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="luxury">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages
                  .filter((pkg) => pkg.category === "luxury")
                  .map((pkg, index) => (
                    <PackageCard key={index} package={pkg} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Can I customize my package?",
              a: "Yes! We offer fully customizable packages. Contact our team to create a personalized itinerary."
            },
            {
              q: "What's your cancellation policy?",
              a: "Free cancellation up to 30 days before departure. See our terms for more details."
            },
            {
              q: "Are group discounts available?",
              a: "Yes, we offer special rates for groups of 8 or more travelers."
            }
          ].map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
                <CardDescription className="text-base">{faq.a}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function PackageCard({ package: pkg }: { package: any }) {
  return (
    <Card className={`relative ${pkg.popular ? "border-blue-500 border-2 shadow-lg" : ""}`}>
      {pkg.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{pkg.name}</CardTitle>
        <CardDescription>{pkg.duration}</CardDescription>
        <div className="pt-4">
          <span className="text-4xl font-bold">{pkg.price}</span>
          <span className="text-gray-500"> / person</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {pkg.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
