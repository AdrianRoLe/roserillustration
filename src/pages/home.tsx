import { useEffect, useState } from "react";
import { Illustration } from "../models";
import IllustrationLoaderService from "../services/illustrationLoaderService";
import IllustrationGrid from "./components/illustrationGrid";

const HomePage = () => {
	const [Illustrations, setIllustrations] = useState<Illustration[]>([]);
	useEffect(() => {
		const illustrationLoaderService = new IllustrationLoaderService(
			"src/illustrations.json"
		);
		illustrationLoaderService
			.load()
			.then(() => {
				console.log("Illustrations loaded");
				console.log(illustrationLoaderService.getIllustrations());
				setIllustrations(illustrationLoaderService.getIllustrations());
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<IllustrationGrid illustrations={Illustrations} />
		</div>
	);
};

export default HomePage;
