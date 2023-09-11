import { useEffect, useState } from "react";
import { Illustration } from "../models";
import IllustrationLoaderService from "../services/illustrationLoaderService";
import IllustrationGrid from "./components/illustrationGrid";

const HomePage = () => {
	const [Illustrations, setIllustrations] = useState<Illustration[]>([]);
	const [selectedCollection, setSelectedCollection] = useState<string>("");

	useEffect(() => {
		const illustrationLoaderService = new IllustrationLoaderService(
			"src/illustrations.json"
		);
		illustrationLoaderService
			.load()
			.then(() => {
				setIllustrations(illustrationLoaderService.getIllustrations());
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		if (selectedCollection !== "") {
			setIllustrations(
				Illustrations.filter((illustration) =>
					illustration.tags.includes(selectedCollection)
				)
			);
		} else {
			const illustrationLoaderService = new IllustrationLoaderService(
				"src/illustrations.json"
			);
			illustrationLoaderService
				.load()
				.then(() => {
					setIllustrations(
						illustrationLoaderService.getIllustrations()
					);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		// scroll to top
		window.scrollTo(0, 0);
	}, [selectedCollection]);

	return (
		<div>
			<IllustrationGrid
				illustrations={
					selectedCollection === ""
						? Illustrations.filter(
								(illustration) => !illustration.hidden
						  )
						: Illustrations
				}
				selectedCollection={selectedCollection}
				setSelectedCollection={setSelectedCollection}
			/>
			{selectedCollection !== "" && (
				<div
					className="rounded-full bg-[#AAB000] bg-opacity-80 text-black transition duration-200 ease-in-out text-center w-fit px-4 py-2 mb-3 cursor-pointer m-auto"
					onClick={() => {
						setSelectedCollection("");
					}}
				>
					Back to main page
				</div>
			)}
		</div>
	);
};

export default HomePage;
