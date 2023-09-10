import React, { useState } from "react";
import { Illustration } from "../../models";
import ImagePreview from "./imagePreview";

const IllustrationItem: React.FC<Illustration> = ({
	name,
	date,
	src,
	categories,
	tags,
}) => {
	const [showPreview, setShowPreview] = useState(false);

	const handlePreviewClick = () => {
		setShowPreview(true);
	};

	const handleClosePreview = () => {
		setShowPreview(false);
	};

	return (
		<div className="block mb-8">
			<img
				className="rounded-lg w-full h-full"
				src="https://via.placeholder.com/150"
				alt="illustration"
				onClick={handlePreviewClick}
			/>
			<div className="">
				<div className="">{name}</div>
				<div className="text-sm opacity-50">{date}</div>
			</div>

			<div className="hidden">
				{categories.map((category) => (
					<div
						key={category}
						className="inline-block bg-gray-200 text-gray-700 rounded-full px-2 mr-2 mb-2"
					>
						{category}
					</div>
				))}
			</div>
			<div className="hidden">
				{tags.map((tags) => (
					<div
						key={tags}
						className="inline-block bg-gray-200 text-gray-700 rounded-full px-2 mr-2 mb-2"
					>
						{tags}
					</div>
				))}
			</div>
			{showPreview && (
				<ImagePreview src={src} onClose={handleClosePreview} />
			)}
		</div>
	);
};

export default IllustrationItem;
