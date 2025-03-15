// components/Footer/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Fitness Hub</h3>
            <p className="text-gray-400">123 Fitness Street</p>
            <p className="text-gray-400">New York, NY 10001</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-orange-500">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-orange-500">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-orange-500">Twitter</a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Fitness Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}