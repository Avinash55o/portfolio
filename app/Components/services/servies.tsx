

export default function Service(){
 return(
   <section className="py-12 bg-gray-100 dark:bg-gray-900 mx-auto">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
        My Services
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Whether it’s Web3, Web2, or sleek UI/UX, I’ve got you covered!
      </p>
    </div>

    {/* Service Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Web3 Services */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-red-500 mb-4">🧠 Web3 Services</h3>
        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
          <li>🔗 Smart Contract Development</li>
          <li>🚀 DApp Development</li>
          <li>🔐 Security Audits & Gas Optimization</li>
          <li>📡 Web3 Integration</li>
        </ul>
      </div>

      {/* Web2 Services */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">💻 Web2 Services</h3>
        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
          <li>🌐 Full-Stack App Development</li>
          <li>🖥️ API Design & Integration</li>
          <li>⚡ Performance Optimization</li>
          <li>🔎 Code Reviews & Debugging</li>
        </ul>
      </div>

      {/* UI/UX Services */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-semibold text-green-500 mb-4">🎨 UI/UX Design</h3>
        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
          <li>📱 Responsive Web & Mobile Design</li>
          <li>🎨 Tailwind-Powered Interfaces</li>
          <li>🔍 User Research & Prototyping</li>
          <li>⚡ Design Optimization for Web3</li>
        </ul>
      </div>
    </div>
  </div>
</section>

 )
}