const Footer = () => {
	return (
		<div>
			<img
				className="w-[10vh] h-full object-cover my-3 mx-auto"
				src={require("../../assets/footer_icon.png")}
				alt="logo"
			/>
			<div className="absolute b-0 h-[20vh] w-full">
				<img
					className="absolute x-0 y-0 w-full h-full object-cover"
					src={require("../../assets/footer.png")}
					alt="logo"
				/>
				<div className="flex z-10 w-full h-full px-4 max-w-[400px] justify-center m-auto space-x-5">
					<div className="w-1/3 z-10 flex items-center text-center">
						<div
							className="w-full rounded-full bg-white hover:bg-[#FF3F8A] hover:text-white text-black transition duration-200 ease-in-out cursor-pointer"
							onClick={() => {
								window.open("https://www.tiktok.com/@roussy.b");
							}}
						>
							Tiktok
						</div>
					</div>
					<div className="w-1/3 z-10 flex items-center text-center">
						<div
							className="w-full rounded-full bg-white hover:bg-[#FF3F8A] hover:text-white text-black transition duration-200 ease-in-out cursor-pointer"
							onClick={() => {
								window.open(
									"https://www.instagram.com/roserillustration"
								);
							}}
						>
							Instagram
						</div>
					</div>
					<div className="w-1/3 z-10 flex items-center text-center">
						<div
							className="w-full rounded-full bg-white hover:bg-[#FF3F8A] hover:text-white text-black transition duration-200 ease-in-out cursor-pointer"
							onClick={() => {
								window.location.href =
									"mailto:roserbutron@gmail.com";
							}}
						>
							Email
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
