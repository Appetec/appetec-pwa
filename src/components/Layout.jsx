import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Appetec_logo from '/assets/appetec_logo.png'
export default function Layout({ children }) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center ">
              <img 
                src={Appetec_logo} 
                alt="Appetec" 
                className="h-12 w-auto object-cover logo-primary-color"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`text-body-medium font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-primary' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link
                to="/terms"
                className={`text-body-medium font-medium transition-colors ${
                  location.pathname === '/terms' 
                    ? 'text-primary' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className={`text-body-medium font-medium transition-colors ${
                  location.pathname === '/privacy' 
                    ? 'text-primary' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Privacy Policy
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-body-medium font-medium transition-colors px-2 py-2 ${
                    location.pathname === '/' 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/terms"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-body-medium font-medium transition-colors px-2 py-2 ${
                    location.pathname === '/terms' 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy"
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-body-medium font-medium transition-colors px-2 py-2 ${
                    location.pathname === '/privacy' 
                      ? 'text-primary' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-heading-4 font-bold mb-4">Appetec</h3>
              <p className="text-body-regular text-gray-300">
                Your health and wellness companion. Track your nutrition, mood, sleep, and more.
              </p>
            </div>
            <div>
              <h4 className="text-body-medium font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-body-regular text-gray-300 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-body-regular text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-body-medium font-semibold mb-4">Contact</h4>
              <p className="text-body-regular text-gray-300">
                For support, please contact us through the app.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-body-small text-gray-400">
              © {new Date().getFullYear()} Appetec. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
