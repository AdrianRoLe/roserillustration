import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about";
import Footer from "./pages/components/footer";
import Header from "./pages/components/header";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";

const App = () => {
	return (
		<div className="bg-[#F8F6F1] w-full h-full">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="*" element={<HomePage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
