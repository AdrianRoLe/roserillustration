import React from "react";
import Masonry from "react-masonry-css";
import { Illustration } from "../../models";
import IllustrationItem from "./illustrationItem";

interface Props {
	illustrations: Illustration[];
}

const IllustrationGrid: React.FC<Props> = ({ illustrations }) => {
	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 1,
	};

	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className="flex gap-4 max-w-[1420px] justify-center m-auto"
			columnClassName="masonry-grid_column"
		>
			{illustrations.map((illustration) => (
				<IllustrationItem key={illustration.name} {...illustration} />
			))}
		</Masonry>
	);
};

export default IllustrationGrid;
