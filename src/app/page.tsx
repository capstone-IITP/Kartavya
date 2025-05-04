import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support Verified NGOs with Transparency & Trust
              </h1>
              <p className="text-lg mb-8 opacity-90">
                NGO Connect is a secure platform that brings donors and NGOs together. 
                Make a difference with confidence, knowing your contribution is going to
                verified organizations.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/donate">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                    Donate Now
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Register Your NGO
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full">
                <div className="absolute inset-0 bg-white/10 rounded-lg overflow-hidden">
                  {/* Placeholder for hero image */}
                  <div className="h-full w-full flex items-center justify-center bg-blue-800/30">
                    <span className="text-xl font-medium">Donation Impact Visualization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Trusted by Verified Organizations</h2>
            <p className="mt-2 text-gray-600">All NGOs on our platform are verified for compliance</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold">12A</span>
              </div>
              <span className="text-sm font-medium">12A Registered</span>
            </div>
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-bold">80G</span>
              </div>
              <span className="text-sm font-medium">80G Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 font-bold">FCRA</span>
              </div>
              <span className="text-sm font-medium">FCRA Approved</span>
            </div>
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-amber-600 font-bold">KYC</span>
              </div>
              <span className="text-sm font-medium">KYC Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Support Causes That Matter</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Find and support verified NGOs working in causes close to your heart
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                href={`/categories/${category.slug}`} 
                key={category.name}
                className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video w-full bg-gray-200">
                  {/* Placeholder for category image */}
                  <div className="h-full w-full flex items-center justify-center bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <span>{category.icon}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-white/90 text-sm mt-2">{category.count} NGOs</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/categories">
              <Button variant="outline">View All Categories</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Collective Impact</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Together, we're making a measurable difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What People Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Stories from our donors and NGO partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                    {/* Placeholder for avatar */}
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of donors and NGOs working together for positive change
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/donate">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                Donate Now
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Register Your NGO
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const categories = [
  { name: "Education", count: 124, slug: "education", icon: "📚" },
  { name: "Healthcare", count: 86, slug: "healthcare", icon: "🏥" },
  { name: "Environment", count: 72, slug: "environment", icon: "🌱" },
  { name: "Children", count: 93, slug: "children", icon: "👶" },
  { name: "Women Empowerment", count: 65, slug: "women-empowerment", icon: "👩" },
  { name: "Disaster Relief", count: 38, slug: "disaster-relief", icon: "🆘" },
];

const stats = [
  { value: "₹1.2Cr+", label: "Donated" },
  { value: "450+", label: "NGOs Verified" },
  { value: "25k+", label: "Donors" },
  { value: "120k+", label: "Lives Impacted" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Regular Donor",
    quote: "NGO Connect makes it easy to find and support causes I care about. The transparency is what keeps me coming back.",
  },
  {
    name: "Priya Patel",
    role: "Sunrise Foundation",
    quote: "As an NGO, this platform has simplified our donation process and helped us reach more supporters than ever before.",
  },
  {
    name: "Vikram Singh",
    role: "Corporate CSR Lead",
    quote: "For our company's CSR initiatives, we needed a reliable platform with proper verification. NGO Connect delivers exactly that.",
  },
];
