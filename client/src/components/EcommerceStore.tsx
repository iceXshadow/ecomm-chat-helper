import { ShoppingCart, Search, Truck, Shield, RotateCcw, Headphones, Star, Menu, X } from "lucide-react"
import { useState } from "react"
import ChatbotWidget from "./ChatbotWidget"

export default function EcommerceStore() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Tile - Sticky */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-slate-800">ShopEase</div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                Home
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                Products
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                About
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  placeholder="Search products..."
                  className="pl-10 w-32 sm:w-48 md:w-64 bg-slate-100 border-0 focus:bg-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className="sm:hidden bg-transparent border border-slate-300 hover:bg-slate-50 p-2 rounded-md transition-colors">
                <Search className="w-4 h-4" />
              </button>

              <button className="relative bg-transparent border border-slate-300 hover:bg-slate-50 p-2 sm:px-3 sm:py-2 rounded-md text-sm font-medium transition-colors">
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              <button
                className="lg:hidden bg-transparent border border-slate-300 hover:bg-slate-50 p-2 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
              <nav className="flex flex-col space-y-3">
                <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Home
                </a>
                <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Products
                </a>
                <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                  About
                </a>
                <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Contact
                </a>
              </nav>
              <div className="mt-4 sm:hidden">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    placeholder="Search products..."
                    className="pl-10 w-full bg-slate-100 border-0 focus:bg-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Bento Grid Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
          {/* Hero Tile - Large 2x2 */}
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-3 sm:mb-4 text-balance leading-tight">
              Shop Smart, Live Better
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-md text-pretty px-2">
              Discover amazing products at unbeatable prices. Your one-stop destination for everything you need.
            </p>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-colors">
              Start Shopping
            </button>
            <div className="mt-6 sm:mt-8 w-full max-w-xs sm:max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Shopping illustration"
                className="w-full h-auto rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>

          {/* Feature Tiles - Four separate tiles */}
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
              <Truck className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">Free Shipping</h3>
            <p className="text-xs sm:text-sm text-slate-600 text-pretty">On orders over $50</p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
              <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">Secure Payment</h3>
            <p className="text-xs sm:text-sm text-slate-600 text-pretty">100% protected</p>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
              <RotateCcw className="w-6 sm:w-8 h-6 sm:h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">Easy Returns</h3>
            <p className="text-xs sm:text-sm text-slate-600 text-pretty">30-day guarantee</p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 sm:p-4 mb-3 sm:mb-4">
              <Headphones className="w-6 sm:w-8 h-6 sm:h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">24/7 Support</h3>
            <p className="text-xs sm:text-sm text-slate-600 text-pretty">Always here to help</p>
          </div>

          {/* About Tile - 2x1 */}
          <div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Why Choose ShopEase?</h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-pretty text-sm sm:text-base">
              We've been serving customers worldwide for over 10 years, providing quality products and exceptional
              service. Join millions of satisfied customers who trust us for their shopping needs.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-slate-600 text-sm sm:text-base">4.9/5 from 50,000+ reviews</span>
            </div>
          </div>

          {/* Categories Tiles - Six mini tiles */}
          <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1532968954397-1e0a478d9f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              alt="Electronics" 
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Electronics</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              alt="Clothing" 
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Clothing</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1529113241001-b495badd8d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              alt="Home" 
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Home</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              alt="Beauty" 
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Beauty</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1535913892211-16d329cfcf1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              alt="Sports" 
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Sports</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              alt="Books" 
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Books</h3>
            </div>
          </div>

          {/* Featured Products Tile - Wide 2x2 */}
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { 
                  name: "Wireless Headphones", 
                  price: "$99", 
                  rating: 4.8, 
                  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                },
                { 
                  name: "Smart Watch", 
                  price: "$199", 
                  rating: 4.9, 
                  image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                },
                { 
                  name: "Laptop Backpack", 
                  price: "$49", 
                  rating: 4.7, 
                  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                },
                { 
                  name: "Coffee Maker", 
                  price: "$79", 
                  rating: 4.6, 
                  image: "https://images.unsplash.com/photo-1570486829685-a272a4c40192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                },
              ].map((product, i) => (
                <div key={i} className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-20 sm:h-24 object-cover rounded-lg sm:rounded-xl mb-2 sm:mb-3"
                  />
                  <h3 className="font-semibold text-slate-800 text-xs sm:text-sm mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-2.5 sm:w-3 h-2.5 sm:h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 text-sm sm:text-base">{product.price}</span>
                    <button className="bg-slate-800 hover:bg-slate-700 text-white px-2 sm:px-3 py-1 rounded-md text-xs font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Tile - Wide */}
          <div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Stay Updated</h2>
            <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Get the latest deals and product updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                placeholder="Enter your email"
                className="flex-1 bg-white border-0 rounded-md px-3 py-2.5 sm:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 sm:py-2 rounded-md font-medium transition-colors text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>

          {/* Testimonial Tiles - Three separate tiles */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
            <div className="flex items-center mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 text-pretty">
              "Amazing quality and fast shipping. Will definitely shop here again!"
            </p>
            <p className="text-xs font-semibold text-slate-800">- Sarah M.</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
            <div className="flex items-center mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 text-pretty">
              "Best customer service I've experienced. Highly recommended!"
            </p>
            <p className="text-xs font-semibold text-slate-800">- John D.</p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
            <div className="flex items-center mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 text-pretty">
              "Great prices and excellent product variety. Love shopping here!"
            </p>
            <p className="text-xs font-semibold text-slate-800">- Emily R.</p>
          </div>

          {/* Footer Tile - Full width */}
          <div className="sm:col-span-2 lg:col-span-4 bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Help & Support</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help & FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Returns Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-slate-400">
              © 2024 ShopEase. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chatbot Widget */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <ChatbotWidget />
      </div>
    </div>
  )
}
