import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Product", path: "/product" },
		{ name: "Contact", path: "/contact" }
	];
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<nav className="w-full h-20 bg-custom-gray flex items-center justify-between px-10">
				<div className="flex items-center space-x-4">
					<h1 className="text-white text-[2.5rem] font-bold max-sm:text-[2rem]">WebTools</h1>
				</div>

				<ul className="flex space-x-8 text-white text-lg font-semibold max-sm:hidden">
					{navItems.map((item) => (
						<li key={item.name} className="relative group cursor-pointer">
							<Link to={item.path}>{item.name}</Link>
						</li>
					))}
				</ul>

				<button
					className="sm:hidden text-white text-3xl cursor-pointer"
					onClick={() => setIsOpen(!isOpen)}
				>
					&#9776;
				</button>

				<ul className={`sm:hidden absolute top-20 left-0 w-full bg-custom-gray2 text-center text-white text-lg font-semibold overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
					{navItems.map((item) => (
						<li key={item.name} className="cursor-pointer px-6 py-2">
							<Link to={item.path} onClick={() => setIsOpen(false)}>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
