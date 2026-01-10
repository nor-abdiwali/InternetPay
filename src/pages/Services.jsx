import { Wifi, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Services() {
  const { packages, extraServices } = useAuth();

  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-6 py-16">

      <div className="text-center max-w-2xl mx-auto mb-14">
        <Wifi className="mx-auto text-blue-600 mb-4" size={42} />
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Our Internet Plans
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Choose the perfect plan for your needs. All plans include unlimited data and reliable service.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-white rounded-xl p-6 shadow-sm border ${pkg.popular ? "border-blue-600 ring-2 ring-blue-500" : "border-gray-200"
              }`}
          >
            {pkg.popular && (
              <span className="inline-block mb-4 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{pkg.name}</h3>
            <p className="text-3xl font-bold mt-2">${pkg.price}<span className="text-sm text-gray-500">/month</span></p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-2"><Check className="text-green-500" size={16} />{pkg.speed} Speed</li>
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex gap-2">
                  <Check className="text-green-500" size={16} />{feature}
                </li>
              ))}
            </ul>

            <Link to="/register">
              <button
                className={`mt-6 w-full py-3 rounded-lg border hover:bg-gray-100 ${pkg.popular ? "bg-black text-white hover:bg-gray-800" : ""
                  }`}
              >
                Get Started
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center mb-6">Compare Plans</h2>

        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-[700px] w-full text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Feature</th>
                {packages.map(pkg => (
                  <th key={pkg.id}>{pkg.name.split(' ')[0]}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-3 text-left font-medium">Speed</td>
                {packages.map(pkg => (
                  <td key={pkg.id}>{pkg.speed}</td>
                ))}
              </tr>

              <tr className="border-t">
                <td className="p-3 text-left font-medium">Monthly Price</td>
                {packages.map(pkg => (
                  <td key={pkg.id}>${pkg.price}</td>
                ))}
              </tr>

              <tr className="border-t">
                <td className="p-3 text-left font-medium">Support</td>
                {packages.map(pkg => (
                  <td key={pkg.id}>
                    {pkg.features.some(f => f.toLowerCase().includes('support')) ? (
                      <Check className="text-green-500 mx-auto" />
                    ) : (
                      <X className="text-red-500 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>

              <tr className="border-t">
                <td className="p-3 text-left font-medium">Static IP</td>
                {packages.map(pkg => (
                  <td key={pkg.id}>
                    {pkg.features.some(f => f.toLowerCase().includes('static ip')) ? (
                      <Check className="text-green-500 mx-auto" />
                    ) : (
                      <X className="text-red-500 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>

          </table>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Additional Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {extraServices.map((svc) => (
            <div key={svc.id} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-2">{svc.name}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {svc.description}
              </p>
              <p className="font-bold">{svc.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Services;
