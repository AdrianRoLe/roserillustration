import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [pageActive, setPageActive] = useState<string>("/");

	return (
		<nav className="h-full justify-end items-center flex space-x-3 text-center items-center pr-6">
			<Link
				className={`${
					pageActive === "/" ? "text-[#FF3F8A]" : ""
				} hover:text-[#FF3F8A] px-3 py-2 transition duration-200 ease-in-out`}
				to="/"
				onClick={() => {
					setPageActive("/");
				}}
			>
				Works
			</Link>

			<Link
				className={`${
					pageActive === "/about" ? "text-[#FF3F8A]" : ""
				} hover:text-[#FF3F8A]  px-3 py-2 transition duration-200 ease-in-out`}
				to="/about"
				onClick={() => {
					setPageActive("/about");
				}}
			>
				About
			</Link>

			<Link
				className={`${
					pageActive === "/contact" ? "text-[#FF3F8A]" : ""
				} hover:text-[#FF3F8A] px-3 py-2 transition duration-200 ease-in-out`}
				to="/contact"
				onClick={() => {
					setPageActive("/contact");
				}}
			>
				Contact
			</Link>
		</nav>
	);
};

export default Navbar;
