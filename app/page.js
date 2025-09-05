
export default function Home() {
  return (
    <main
      className=""
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-cover bg-center gap-10 px-4">
        <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl text-white max-w-lg">
          <section className="flex flex-col items-center text-center mb-10">
            <h1 className="text-2xl md:text-4xl font-extrabold mb-3">
              Welcome, Landlord
            </h1>
            <p className="text-base md:text-lg">
              Track your tenants and manage your rental properties easily.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-red-700">
              Add New Property
            </button>
          </section>

          <h1 className="text-2xl md:text-4xl font-extrabold mb-3">
            Let’s Get Started
          </h1>
          <p className="text-base md:text-lg">
            Find a rental housing <br /> that suits you
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-red-700 cursor-pointer">
            Get Started
          </button>
        </div>

    
        <div className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl shadow-lg bg-gray-800 mt-4 lg:mt-0 max-w-lg w-full">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-3 drop-shadow-sm">
            MORE THAN 20 YEARS <br /> OF EXPERIENCE
          </h1>
          <p className="text-base md:text-lg text-white">
            Providing the best homes for families <br /> and individuals
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-l-xl shadow-md hover:bg-red-700">
            View Apartment
          </button>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full">
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <h2 className="text-2xl font-bold text-gray-800">4</h2>
              <p className="text-gray-600">Total Properties</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <h2 className="text-2xl font-bold text-green-600">2</h2>
              <p className="text-gray-600">Occupied</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <h2 className="text-2xl font-bold text-red-600">2</h2>
              <p className="text-gray-600">Vacant</p>
            </div>
          </section>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
          Properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold">Apartment 1</h3>
            <p className="text-gray-600">₦500,000 / year</p>
            <span className="text-sm font-semibold text-green-600">
              Occupied
            </span>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold">Apartment 2</h3>
            <p className="text-gray-600">₦350,000 / year</p>
            <span className="text-sm font-semibold text-red-600">Vacant</span>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold">Apartment 3</h3>
            <p className="text-gray-600">₦450,000 / year</p>
            <span className="text-sm font-semibold text-red-600">Vacant</span>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold">Apartment 4</h3>
            <p className="text-gray-600">₦600,000 / year</p>
            <span className="text-sm font-semibold text-green-600">
              Occupied
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
