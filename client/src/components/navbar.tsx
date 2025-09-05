import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<div>
			{/* Header Tile - Sticky */}
			<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
				<div className="container mx-auto px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
					<div className="flex items-center justify-between">
						<div className="text-xl font-bold text-slate-800 sm:text-2xl">ShopEase</div>

						<div className="flex items-center space-x-4">
							<nav className="hidden items-center space-x-8 lg:flex">
								<a href="#" className="text-slate-600 transition-colors hover:text-slate-800">
									Home
								</a>
								<a href="#" className="text-slate-600 transition-colors hover:text-slate-800">
									Products
								</a>
								<a href="#" className="text-slate-600 transition-colors hover:text-slate-800">
									About
								</a>
								<a href="#" className="text-slate-600 transition-colors hover:text-slate-800">
									Contact
								</a>
							</nav>

							<div className="flex items-center space-x-2 sm:space-x-4">
								<div className="relative hidden sm:block">
									<Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
									<input
										placeholder="Search products..."
										className="w-32 rounded-md border-0 bg-slate-100 px-3 py-2 pl-10 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-48 md:w-64"
									/>
								</div>

								<button className="rounded-md border border-slate-300 bg-transparent p-2 transition-colors hover:bg-slate-50 sm:hidden">
									<Search className="h-4 w-4" />
								</button>

								<button className="relative rounded-md border border-slate-300 bg-transparent p-2 text-sm font-medium transition-colors hover:bg-slate-50 sm:px-3 sm:py-2">
									<Heart className="h-4 w-4" />
									<span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-400 text-xs text-white">
										2
									</span>
								</button>

								<button className="relative rounded-md border border-slate-300 bg-transparent p-2 text-sm font-medium transition-colors hover:bg-slate-50 sm:px-3 sm:py-2 lg:mr-0">
									<ShoppingCart className="h-4 w-4" />
									<span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-400 text-xs text-white">
										3
									</span>
								</button>

								<button
									className="rounded-md border border-slate-300 bg-transparent p-2 transition-colors hover:bg-slate-50 lg:hidden"
									onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								>
									{mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
								</button>
							</div>
						</div>
					</div>

					{mobileMenuOpen && (
						<div className="mt-4 border-t border-slate-200 pt-4 pb-4 lg:hidden">
							<nav className="flex flex-col space-y-3">
								<a href="#" className="text-slate-600 transition-colors hover:text-slate-800">
									Home
								</a>
								<a href="#" className="text-slate-600 transition-colors hover:text-slate-800">
									Products
								</a>
								<a href="#" className="text-slate-600 transition-colors hover:text-slate-800">
									About
								</a>
								<a href="#" className="text-slate-600 transition-colors hover:text-slate-800">
									Contact
								</a>
							</nav>
							<div className="mt-4 sm:hidden">
								<div className="relative">
									<Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
									<input
										placeholder="Search products..."
										className="w-full rounded-md border-0 bg-slate-100 px-3 py-2 pl-10 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
};

export default Navbar;
