import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import { HashRouter,  Routes, Route  } from "react-router-dom";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
      		</Routes>
		</HashRouter >
	);
}

export default App;