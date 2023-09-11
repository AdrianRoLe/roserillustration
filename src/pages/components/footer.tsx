const Footer = () => {
	return (
		<div className="absolute b-0 h-[20vh] w-full">
			<img
				className="absolute x-0 y-0 w-full h-full object-cover"
				src={require("../../assets/footer.png")}
				alt="logo"
			/>
			<div className="flex z-10 w-full h-full px-4 max-w-[400px] justify-center m-auto space-x-5">
				<div className="w-1/3 z-10 flex items-center text-center ">
					<div className="w-full rounded-full bg-white hover:bg-[#FF3F8A] hover:text-white text-black transition duration-200 ease-in-out">
						Tiktok
					</div>
				</div>
				<div className="w-1/3 z-10 flex items-center text-center ">
					<div className="w-full rounded-full bg-white hover:bg-[#FF3F8A] hover:text-white text-black transition duration-200 ease-in-out">
						Instagram
					</div>
				</div>
				<div className="w-1/3 z-10 flex items-center text-center ">
					<div className="w-full rounded-full bg-white hover:bg-[#FF3F8A] hover:text-white text-black transition duration-200 ease-in-out">
						Email
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
