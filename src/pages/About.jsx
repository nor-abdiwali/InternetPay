import {
  Users,
  Wifi,
  Globe,
  Headphones,
  ShieldCheck,
  Heart,
  TrendingUp,
} from "lucide-react";

function About() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-16 bg-gray-50">

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          About InternetPay
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          We're dedicated to providing fast, reliable internet service and making bill payment as simple as possible.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 mb-14">
        <div className="flex gap-4">
          <Wifi className="text-blue-600" />
          <div>
            <h2 className="font-semibold mb-1">Our Mission</h2>
            <p className="text-gray-600 text-sm">
              Our mission is to bridge the digital divide by providing affordable,
              high-speed internet access to communities everywhere and making
              internet management simple and accessible.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <Users className="text-blue-600 mx-auto mb-2" />
          <h3 className="font-bold">10,000+</h3>
          <p className="text-xs text-gray-500">Active Customers</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <Wifi className="text-blue-600 mx-auto mb-2" />
          <h3 className="font-bold">99.9%</h3>
          <p className="text-xs text-gray-500">Uptime Guarantee</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <Globe className="text-blue-600 mx-auto mb-2" />
          <h3 className="font-bold">50+</h3>
          <p className="text-xs text-gray-500">Cities Covered</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <Headphones className="text-blue-600 mx-auto mb-2" />
          <h3 className="font-bold">24/7</h3>
          <p className="text-xs text-gray-500">Customer Support</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-center text-2xl font-bold mb-8">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <TrendingUp className="text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Reliability</h3>
            <p className="text-sm text-gray-600">
              We maintain a 99.9% uptime guarantee so you stay connected when it matters most.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <ShieldCheck className="text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Transparency</h3>
            <p className="text-sm text-gray-600">
              No hidden fees. Clear pricing and honest communication at all times.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <Heart className="text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Customer First</h3>
            <p className="text-sm text-gray-600">
              Our support team is available 24/7 to help you whenever needed.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-center text-2xl font-bold mb-8">
          Our Journey
        </h2>

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div className="flex gap-4">
            <span className="bg-blue-600 h-13 w-13 text-white px-3 py-3 rounded-full text-sm">2018</span>
            <div>
              <h4 className="font-semibold">InternetPay Founded</h4>
              <p className="text-sm text-gray-600">Started with a vision to democratize internet access</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="bg-blue-600 h-13 w-13 text-white px-3 py-3 rounded-full text-sm">2019</span>
            <div>
              <h4 className="font-semibold">Reached 1,000 Customers</h4>
              <p className="text-sm text-gray-600">Expanded to 5 cities</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="bg-blue-600 h-13 w-13 text-white px-3 py-3 rounded-full text-sm">2021</span>
            <div>
              <h4 className="font-semibold">Mobile Payments Launched</h4>
              <p className="text-sm text-gray-600">Added EVC Plus and Zaad support</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="bg-blue-600 h-13 w-13 text-white px-3 py-3 rounded-full text-sm">2023</span>
            <div>
              <h4 className="font-semibold">99.9% Uptime Achieved</h4>
              <p className="text-sm text-gray-600">Industry-leading reliability</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="bg-blue-600 h-13 w-13 text-white px-3 py-3 rounded-full text-sm">2026</span>
            <div>
              <h4 className="font-semibold">10,000+ Customers</h4>
              <p className="text-sm text-gray-600">Serving 50+ cities nationwide</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-8">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-4 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
              <Users size={18} />
            </div>
            <h4 className="font-semibold text-sm">Eng Mohamed</h4>
            <p className="text-xs text-gray-500">CEO & Founder</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
              <Users size={18} />
            </div>
            <h4 className="font-semibold text-sm">Eng Nor</h4>
            <p className="text-xs text-gray-500">CTO</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
              <Users size={18} />
            </div>
            <h4 className="font-semibold text-sm">Alfanan Socdal</h4>
            <p className="text-xs text-gray-500">Head of Customer Support</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white">
              <Users size={18} />
            </div>
            <h4 className="font-semibold text-sm">Eng Daacad</h4>
            <p className="text-xs text-gray-500">Operations Manager</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
