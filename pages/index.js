import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Welcome to PrimeGuard Insurance Agency
          </h1>
          <p className="text-gray-600 text-lg">
            Your Future, Our Priority!
          </p>
        </section>

        <section className="py-10 px-6">
          <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">
            Our Services
          </h2>
          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div className="p-6 shadow rounded-lg bg-white">
              <h3 className="font-bold text-lg text-blue-700">Motor Insurance</h3>
              <p className="text-gray-600 mt-2">
                Comprehensive and third-party coverage designed for your vehicle's safety.
              </p>
            </div>
            <div className="p-6 shadow rounded-lg bg-white">
              <h3 className="font-bold text-lg text-blue-700">Health Insurance</h3>
              <p className="text-gray-600 mt-2">
                Affordable health plans that ensure access to quality medical care.
              </p>
            </div>
            <div className="p-6 shadow rounded-lg bg-white">
              <h3 className="font-bold text-lg text-blue-700">Life Insurance</h3>
              <p className="text-gray-600 mt-2">
                Secure your loved ones’ future with our flexible life policies.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
