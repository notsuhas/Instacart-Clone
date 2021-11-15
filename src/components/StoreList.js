import { useRef, useState } from "react";

import { usStores, caStores } from "../data";

import StoreItem from "./StoreItem";

function StoreList({ country }) {
	const [showMore, setShowMore] = useState(false);
	const storeRef = useRef(null);

	const store = country === "US" ? usStores : caStores;

	return (
		<section
			ref={storeRef}
			className="max-w-6xl px-4 py-0 m-0 mx-auto md:my-8 md:py-0 md:px-8">
			<h2 className="px-8 py-4 m-0 text-2xl text-center md:text-3xl md:mt-2 md:mb-6">
				Browse stores in{" "}
				{`${country === "US" ? "San Francisco Bay" : "Greater Toronto"}`} Area
			</h2>
			<div className="flex flex-col items-center w-full">
				<div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-fluid md:gap-x-6 md:auto-cols-[340px]">
					{showMore
						? store.map(({ id, title, link, subtitle, image }) => (
								<StoreItem
									key={id}
									image={image}
									title={title}
									subtitle={subtitle}
									link={link}
								/>
						  ))
						: store
								.slice(0, 12)
								.map(({ id, title, link, subtitle, image }) => (
									<StoreItem
										key={id}
										image={image}
										title={title}
										subtitle={subtitle}
										link={link}
									/>
								))}
				</div>
				<button
					onClick={() => {
						setShowMore(!showMore);
						if (showMore) {
							storeRef.current.scrollIntoView({
								behavior: "smooth",
								block: "start",
							});
						}
					}}
					className="text-lg font-semibold outline-none mt-14 hover:text-gray-500 transition-all text-primary">
					{showMore ? "Show less" : "Show more"}
				</button>
			</div>
		</section>
	);
}

export default StoreList;
