import Navbar from "./navbar";

const Header = () => {
	return (
		<div className="flex h-1/5 w-full mb-8 max-w-[1420px] m-auto">
			<div className="w-[500px]">
				<img
					className="w-full h-full mt-2 ml-8"
					src="https://via.placeholder.com/150"
					alt="logo"
				/>
			</div>
			<div className="w-full">
				<Navbar />
			</div>
		</div>
	);
};

export default Header;
