import { useEffect, useState } from "react";
import { Illustration } from "../models";
import IllustrationLoaderService from "../services/illustrationLoaderService";
import IllustrationGrid from "./components/illustrationGrid";
import ProjectIllustrations from "./components/illustrationsProject";

interface HomePageProps {
	action: string;
}

const HomePage = ({ action }: HomePageProps) => {
	const [Illustrations, setIllustrations] = useState<Illustration[]>([]);
	const [selectedCollection, setSelectedCollection] = useState<string>("");
	const [selectedProject, setSelectedProject] = useState<string>("");

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
		if (action === "clear") {
			setSelectedCollection("");
			setSelectedProject("");
		}
	}, [action]);

	useEffect(() => {
		if (selectedCollection !== "") {
			const updatedIllustrations = Illustrations.filter((illustration) =>
				illustration.tags.includes(selectedCollection)
			);
			setIllustrations(updatedIllustrations);
			let isProject = true;

			// check if all illustrations are project illustrations
			updatedIllustrations.forEach((illustration) => {
				if (!illustration.categories.includes("project")) {
					isProject = false;
				}
			});
			if (isProject) {
				setSelectedProject(selectedCollection);
			}
			window.scrollTo(0, 0);
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
	}, [selectedCollection]);

	return (
		<div>
			{selectedProject === "" && (
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
			)}
			{selectedProject === "" && selectedCollection !== "" && (
				<div
					className="rounded-full bg-[#AAB000] bg-opacity-80 text-black transition duration-200 ease-in-out text-center w-fit px-4 py-2 mb-3 cursor-pointer m-auto"
					onClick={() => {
						setSelectedCollection("");
						setSelectedProject("");
					}}
				>
					Back to main page
				</div>
			)}
			{selectedProject !== "" && (
				<ProjectIllustrations illustrations={Illustrations} />
			)}
			{selectedProject !== "" && (
				<div
					className="rounded-full bg-[#AAB000] bg-opacity-80 text-black transition duration-200 ease-in-out text-center w-fit px-4 py-2 mb-3 cursor-pointer m-auto"
					onClick={() => {
						setSelectedCollection("");
						setSelectedProject("");
					}}
				>
					Back to main page
				</div>
			)}
		</div>
	);
};

export default HomePage;
