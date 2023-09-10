import React from "react";
import { Illustration } from "../../models";
import IllustrationItem from "./illustrationItem";

interface Props {
	illustrations: Illustration[];
}

const IllustrationGrid: React.FC<Props> = ({ illustrations }) => {
	return (
		<div className="grid grid-cols-3 gap-4 max-w-[1420px] justify-center m-auto">
			{illustrations.map((illustration) => (
				<IllustrationItem key={illustration.name} {...illustration} />
			))}
		</div>
	);
};

export default IllustrationGrid;
