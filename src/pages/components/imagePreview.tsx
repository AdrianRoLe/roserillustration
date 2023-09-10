import React, { useEffect, useRef, useState } from "react";

interface Props {
	src: string;
	onClose: () => void;
}

const ImagePreview: React.FC<Props> = ({ src, onClose }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [show, setShow] = useState(false);

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			onClose();
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			onClose();
		}
	};

	useEffect(() => {
		document.body.classList.add("overflow-hidden");
		document.addEventListener("keydown", handleKeyDown);
		setShow(true);
		return () => {
			document.body.classList.remove("overflow-hidden");
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleClickOutside, handleKeyDown]);

	return (
		<div
			className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ${
				show ? "opacity-100" : "opacity-0"
			}`}
			ref={ref}
			onClick={onClose}
		>
			<div className="transform scale-100">
				<img
					src={"https://via.placeholder.com/1500"}
					alt="Preview"
					className="max-w-full max-h-full object-contain"
					onLoad={() => {
						ref.current?.classList.add("scale-100");
					}}
				/>
			</div>
		</div>
	);
};

export default ImagePreview;
