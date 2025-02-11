import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route  } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route index element={<Home />} />
				<Route path="/product" element={<Product />} />
			</Routes>
		</>
	);
}

export default App;