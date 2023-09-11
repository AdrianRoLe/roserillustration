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
		<div className="grid place-content-center mb-8">
			<img
				className="rounded-lg"
				src={require(`../../assets/${src}`)}
				alt="illustration"
				onClick={handlePreviewClick}
			/>
			<div className="mt-2">
				<div className="pl-2 lg:pl-0">{name}</div>
				<div className="pl-2 lg:pl-0 text-sm opacity-50 capitalize">
					{date}
				</div>
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
				<ImagePreview
					{...{ name, date, src, categories, tags }}
					onClose={handleClosePreview}
				/>
			)}
		</div>
	);
};

export default IllustrationItem;
