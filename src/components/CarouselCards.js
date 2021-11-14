import { cards } from "../data";

import CarouselCard from "./CarouselCard";

function CarouselCards() {
	return (
		<div className="flex flex-col items-center justify-center w-full my-8">
			<h2 className="px-6 pb-8 text-2xl font-normal text-center md:text-3xl">
				Grocery delivery you can count on
			</h2>
			<div className="flex flex-row w-full p-4 space-x-3 overflow-x-scroll scrollbar-hide">
				{cards.map(({ id, title, subtitle, image }) => (
					<CarouselCard
						key={id}
						title={title}
						subtitle={subtitle}
						image={image}
					/>
				))}
			</div>
			<button className="relative max-w-[350px] md:w-full w-[85%] mx-auto mt-12 overflow-hidden text-lg font-semibold text-white bg-primary rounded-xl h-14 whitespace-nowrap hover:opacity-75">
				Start Shopping
			</button>
		</div>
	);
}

export default CarouselCards;
