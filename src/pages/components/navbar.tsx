import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [pageActive, setPageActive] = useState<string>("/");

	return (
		<div className="h-initial w-full justify-end flex">
			<div className="h-full w-full justify-end items-center sm:flex space-y-2 sm:space-y-0 sm:space-x-3 text-center sm:pr-6 text-xl pt-5 sm:pt-0">
				<div>
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
				</div>

				<div>
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
				</div>
				<div>
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
				</div>
			</div>
		</div>
	);
};

export default Navbar;
