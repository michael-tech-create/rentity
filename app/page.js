"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1740&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative flex flex-col lg:flex-row justify-center items-center min-h-screen gap-10 px-4">
        {/* LEFT SECTION */}
        <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl text-white max-w-lg">
          <section className="flex flex-col items-center text-center mb-10">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-4xl font-extrabold mb-3"
            >
              Welcome, Landlord
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg"
            >
              Track your tenants and manage your rental properties easily.
            </motion.p>

            <Link href="/dashboard/tenant-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-red-700 transition"
              >
                Add New Property
              </motion.button>
            </Link>
          </section>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold mb-3"
          >
            Let’s Get Started
          </motion.h1>

          <p className="text-base md:text-lg">
            Find a rental housing <br /> that suits you
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-red-700 cursor-pointer"
          >
            Get Started
          </motion.button>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl shadow-lg bg-gray-900/80 mt-4 lg:mt-0 max-w-lg w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold text-white mb-3 drop-shadow-sm"
          >
            MORE THAN 20 YEARS <br /> OF EXPERIENCE
          </motion.h1>

          <p className="text-base md:text-lg text-white">
            Providing the best homes for families <br /> and individuals
          </p>

          <Link href="/dashboard/rent-list">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-red-700"
            >
              View Apartment
            </motion.button>
          </Link>

          {/* STATS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-md text-center"
            >
              <h2 className="text-2xl font-bold text-gray-800">4</h2>
              <p className="text-gray-600">Total Properties</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-md text-center"
            >
              <h2 className="text-2xl font-bold text-green-600">2</h2>
              <p className="text-gray-600">Occupied</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-md text-center"
            >
              <h2 className="text-2xl font-bold text-red-600">2</h2>
              <p className="text-gray-600">Vacant</p>
            </motion.div>
          </section>
        </div>
      </div>

      {/* PROPERTIES SECTION */}
      <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
          Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Apartment 1", price: "₦500,000 / year", status: "Occupied", color: "green" },
            { name: "Apartment 2", price: "₦350,000 / year", status: "Vacant", color: "red" },
            { name: "Apartment 3", price: "₦450,000 / year", status: "Vacant", color: "red" },
            { name: "Apartment 4", price: "₦600,000 / year", status: "Occupied", color: "green" },
          ].map((apt, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{apt.name}</h3>
              <p className="text-gray-600">{apt.price}</p>
              <span
                className={`text-sm font-semibold text-${apt.color}-600`}
              >
                {apt.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
