import { Headphones, RotateCcw, Shield, Star, Truck } from "lucide-react";
import ChatbotWidget from "./ChatbotWidget";
import Navbar from "./navbar";

export default function EcommerceStore() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
			<Navbar />

			{/* Bento Grid Container */}
			<div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
				<div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 xl:grid-cols-4">
					{/* Hero Tile - Large 2x2 */}
					<div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 p-6 text-center sm:col-span-2 sm:rounded-3xl sm:p-8 lg:col-span-2 lg:row-span-2">
						<h1 className="mb-3 text-3xl leading-tight font-bold text-balance text-slate-800 sm:mb-4 sm:text-4xl lg:text-5xl xl:text-6xl">
							Shop Smart, Live Better
						</h1>
						<p className="mb-6 max-w-md px-2 text-base text-pretty text-slate-600 sm:mb-8 sm:text-lg">
							Discover amazing products at unbeatable prices. Your one-stop destination for everything you
							need.
						</p>
						<button className="rounded-full bg-slate-800 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-slate-700 sm:px-8 sm:py-3 sm:text-lg">
							Start Shopping
						</button>
						<div className="mt-6 w-full max-w-xs sm:mt-8 sm:max-w-sm">
							<img
								src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
								alt="Shopping illustration"
								className="h-auto w-full rounded-xl sm:rounded-2xl"
							/>
						</div>
					</div>

					{/* Feature Tiles - Four separate tiles */}
					<div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 p-4 text-center sm:rounded-3xl sm:p-6">
						<div className="mb-3 rounded-full bg-white p-3 sm:mb-4 sm:p-4">
							<Truck className="h-6 w-6 text-blue-600 sm:h-8 sm:w-8" />
						</div>
						<h3 className="mb-1 text-sm font-semibold text-slate-800 sm:mb-2 sm:text-base">
							Free Shipping
						</h3>
						<p className="text-xs text-pretty text-slate-600 sm:text-sm">On orders over $50</p>
					</div>

					<div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 p-4 text-center sm:rounded-3xl sm:p-6">
						<div className="mb-3 rounded-full bg-white p-3 sm:mb-4 sm:p-4">
							<Shield className="h-6 w-6 text-green-600 sm:h-8 sm:w-8" />
						</div>
						<h3 className="mb-1 text-sm font-semibold text-slate-800 sm:mb-2 sm:text-base">
							Secure Payment
						</h3>
						<p className="text-xs text-pretty text-slate-600 sm:text-sm">100% protected</p>
					</div>

					<div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 p-4 text-center sm:rounded-3xl sm:p-6">
						<div className="mb-3 rounded-full bg-white p-3 sm:mb-4 sm:p-4">
							<RotateCcw className="h-6 w-6 text-orange-600 sm:h-8 sm:w-8" />
						</div>
						<h3 className="mb-1 text-sm font-semibold text-slate-800 sm:mb-2 sm:text-base">Easy Returns</h3>
						<p className="text-xs text-pretty text-slate-600 sm:text-sm">30-day guarantee</p>
					</div>

					<div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-purple-100 to-violet-100 p-4 text-center sm:rounded-3xl sm:p-6">
						<div className="mb-3 rounded-full bg-white p-3 sm:mb-4 sm:p-4">
							<Headphones className="h-6 w-6 text-purple-600 sm:h-8 sm:w-8" />
						</div>
						<h3 className="mb-1 text-sm font-semibold text-slate-800 sm:mb-2 sm:text-base">24/7 Support</h3>
						<p className="text-xs text-pretty text-slate-600 sm:text-sm">Always here to help</p>
					</div>

					{/* About Tile - 2x1 */}
					<div className="rounded-2xl bg-gradient-to-r from-slate-100 to-gray-100 p-6 sm:col-span-2 sm:rounded-3xl sm:p-8 lg:col-span-2">
						<h2 className="mb-3 text-xl font-bold text-slate-800 sm:mb-4 sm:text-2xl">
							Why Choose ShopEase?
						</h2>
						<p className="mb-4 text-sm text-pretty text-slate-600 sm:mb-6 sm:text-base">
							We've been serving customers worldwide for over 10 years, providing quality products and
							exceptional service. Join millions of satisfied customers who trust us for their shopping
							needs.
						</p>
						<div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
							<div className="flex items-center">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5" />
								))}
							</div>
							<span className="text-sm text-slate-600 sm:text-base">4.9/5 from 50,000+ reviews</span>
						</div>
					</div>

					{/* Categories Tiles - Six mini tiles */}
					<div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-red-100 to-pink-100 p-4 text-center sm:rounded-3xl sm:p-6">
						<img
							src="https://images.unsplash.com/photo-1532968954397-1e0a478d9f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
							alt="Electronics"
							className="absolute inset-0 h-full w-full object-cover opacity-20"
						/>
						<div className="relative z-10">
							<h3 className="text-sm font-semibold text-slate-800 sm:text-base">Electronics</h3>
						</div>
					</div>

					<div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100 p-4 text-center sm:rounded-3xl sm:p-6">
						<img
							src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
							alt="Clothing"
							className="absolute inset-0 h-full w-full object-cover opacity-20"
						/>
						<div className="relative z-10">
							<h3 className="text-sm font-semibold text-slate-800 sm:text-base">Clothing</h3>
						</div>
					</div>

					<div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-teal-100 p-4 text-center sm:rounded-3xl sm:p-6">
						<img
							src="https://images.unsplash.com/photo-1529113241001-b495badd8d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
							alt="Home"
							className="absolute inset-0 h-full w-full object-cover opacity-20"
						/>
						<div className="relative z-10">
							<h3 className="text-sm font-semibold text-slate-800 sm:text-base">Home</h3>
						</div>
					</div>

					<div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 p-4 text-center sm:rounded-3xl sm:p-6">
						<img
							src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
							alt="Beauty"
							className="absolute inset-0 h-full w-full object-cover opacity-20"
						/>
						<div className="relative z-10">
							<h3 className="text-sm font-semibold text-slate-800 sm:text-base">Beauty</h3>
						</div>
					</div>

					<div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 p-4 text-center sm:rounded-3xl sm:p-6">
						<img
							src="https://images.unsplash.com/photo-1535913892211-16d329cfcf1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
							alt="Sports"
							className="absolute inset-0 h-full w-full object-cover opacity-20"
						/>
						<div className="relative z-10">
							<h3 className="text-sm font-semibold text-slate-800 sm:text-base">Sports</h3>
						</div>
					</div>

					<div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 p-4 text-center sm:rounded-3xl sm:p-6">
						<img
							src="https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
							alt="Books"
							className="absolute inset-0 h-full w-full object-cover opacity-20"
						/>
						<div className="relative z-10">
							<h3 className="text-sm font-semibold text-slate-800 sm:text-base">Books</h3>
						</div>
					</div>

					{/* Featured Products Tile - Wide 2x2 */}
					<div className="rounded-2xl bg-white p-6 sm:col-span-2 sm:rounded-3xl sm:p-8 lg:col-span-2 lg:row-span-2">
						<h2 className="mb-4 text-xl font-bold text-slate-800 sm:mb-6 sm:text-2xl">Featured Products</h2>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
							{[
								{
									name: "Wireless Headphones",
									price: "$99",
									rating: 4.8,
									image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
								},
								{
									name: "Smart Watch",
									price: "$199",
									rating: 4.9,
									image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
								},
								{
									name: "Laptop Backpack",
									price: "$49",
									rating: 4.7,
									image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
								},
								{
									name: "Coffee Maker",
									price: "$79",
									rating: 4.6,
									image: "https://images.unsplash.com/photo-1570486829685-a272a4c40192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
								},
							].map((product, i) => (
								<div key={i} className="rounded-xl bg-slate-50 p-3 sm:rounded-2xl sm:p-4">
									<img
										src={product.image}
										alt={product.name}
										className="mb-2 h-20 w-full rounded-lg object-cover sm:mb-3 sm:h-24 sm:rounded-xl"
									/>
									<h3 className="mb-1 text-xs font-semibold text-slate-800 sm:text-sm">
										{product.name}
									</h3>
									<div className="mb-2 flex items-center">
										<div className="mr-2 flex items-center">
											{[...Array(5)].map((_, j) => (
												<Star
													key={j}
													className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400 sm:h-3 sm:w-3"
												/>
											))}
										</div>
										<span className="text-xs text-slate-500">{product.rating}</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm font-bold text-slate-800 sm:text-base">
											{product.price}
										</span>
										<button className="rounded-md bg-slate-800 px-2 py-1 text-xs font-medium text-white transition-colors hover:bg-slate-700 sm:px-3">
											Add to Cart
										</button>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Newsletter Tile - Wide */}
					<div className="rounded-2xl bg-gradient-to-r from-yellow-100 to-amber-100 p-6 text-center sm:col-span-2 sm:rounded-3xl sm:p-8 lg:col-span-2">
						<h2 className="mb-2 text-xl font-bold text-slate-800 sm:text-2xl">Stay Updated</h2>
						<p className="mb-4 text-sm text-slate-600 sm:mb-6 sm:text-base">
							Get the latest deals and product updates delivered to your inbox
						</p>
						<div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:gap-4">
							<input
								placeholder="Enter your email"
								className="flex-1 rounded-md border-0 bg-white px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:py-2"
							/>
							<button className="rounded-md bg-slate-800 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700 sm:py-2 sm:text-base">
								Subscribe
							</button>
						</div>
					</div>

					{/* Testimonial Tiles - Three separate tiles */}
					<div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:rounded-3xl sm:p-6">
						<div className="mb-2 flex items-center sm:mb-3">
							{[...Array(5)].map((_, i) => (
								<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4" />
							))}
						</div>
						<p className="mb-3 text-xs text-pretty text-slate-600 sm:mb-4 sm:text-sm">
							"Amazing quality and fast shipping. Will definitely shop here again!"
						</p>
						<p className="text-xs font-semibold text-slate-800">- Sarah M.</p>
					</div>

					<div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:rounded-3xl sm:p-6">
						<div className="mb-2 flex items-center sm:mb-3">
							{[...Array(5)].map((_, i) => (
								<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4" />
							))}
						</div>
						<p className="mb-3 text-xs text-pretty text-slate-600 sm:mb-4 sm:text-sm">
							"Best customer service I've experienced. Highly recommended!"
						</p>
						<p className="text-xs font-semibold text-slate-800">- John D.</p>
					</div>

					<div className="rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 p-4 sm:rounded-3xl sm:p-6">
						<div className="mb-2 flex items-center sm:mb-3">
							{[...Array(5)].map((_, i) => (
								<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4" />
							))}
						</div>
						<p className="mb-3 text-xs text-pretty text-slate-600 sm:mb-4 sm:text-sm">
							"Great prices and excellent product variety. Love shopping here!"
						</p>
						<p className="text-xs font-semibold text-slate-800">- Emily R.</p>
					</div>

					{/* Footer Tile - Full width */}
					<div className="rounded-2xl bg-slate-800 p-6 text-white sm:col-span-2 sm:rounded-3xl sm:p-8 lg:col-span-4">
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
							<div>
								<h3 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Help & Support</h3>
								<ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
									<li>
										<a href="#" className="transition-colors hover:text-white">
											Help & FAQ
										</a>
									</li>
									<li>
										<a href="#" className="transition-colors hover:text-white">
											Returns Policy
										</a>
									</li>
									<li>
										<a href="#" className="transition-colors hover:text-white">
											Contact Us
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Company</h3>
								<ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
									<li>
										<a href="#" className="transition-colors hover:text-white">
											About Us
										</a>
									</li>
									<li>
										<a href="#" className="transition-colors hover:text-white">
											Careers
										</a>
									</li>
									<li>
										<a href="#" className="transition-colors hover:text-white">
											Press
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base">Connect</h3>
								<ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
									<li>
										<a href="#" className="transition-colors hover:text-white">
											Twitter
										</a>
									</li>
									<li>
										<a href="#" className="transition-colors hover:text-white">
											Instagram
										</a>
									</li>
									<li>
										<a href="#" className="transition-colors hover:text-white">
											Facebook
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="mt-6 border-t border-slate-700 pt-6 text-center text-xs text-slate-400 sm:mt-8 sm:pt-8 sm:text-sm">
							© 2024 ShopEase. All rights reserved.
						</div>
					</div>
				</div>
			</div>

			{/* Floating Chatbot Widget */}
			<div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
				<ChatbotWidget />
			</div>
		</div>
	);
}
