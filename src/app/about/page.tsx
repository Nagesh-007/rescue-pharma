import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          About <span className="text-blue-600">Rescue Pharma</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Delivering excellence in pharma and surgical distribution since <span className="font-semibold">2000</span>.  
          Committed to providing high-quality healthcare solutions with trust and care.
        </p>
      </div>

      {/* Office Image */}
      <div className="flex justify-center my-8">
        <Image
          src="/office.jpg" // Ensure this image is inside /public
          alt="Rescue Pharma Office"
          width={200}
          height={100}
          className="rounded-2xl shadow-2xl transition-transform hover:scale-105"
        />
      </div>

      {/* Company Details */}
      <div className="max-w-4xl mx-auto text-center px-6 py-12 space-y-6">
        <p className="text-lg text-gray-800 leading-relaxed">
          <span className="font-semibold">Rescue Pharma & Surgicals</span>, based in Mysore, is a trusted distributor of  
          pharmaceuticals, surgical equipment, and medical supplies across India.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          We cater to private hospitals, corporate hospitals, government institutions, including  
          Railways, ECHS, Military Hospitals, and prestigious medical colleges like JSS, AIMS, and KIMS.
        </p>

        {/* Key Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-600">20+ Years</h3>
            <p className="text-gray-600">of industry excellence</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-600">100+ Clients</h3>
            <p className="text-gray-600">including hospitals & institutions</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-blue-600">Trusted Partner</h3>
            <p className="text-gray-600">for pharma & surgical needs</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center my-10">
        <a
          href="/contact"
          className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
