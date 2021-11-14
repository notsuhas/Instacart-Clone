function CarouselCard({ title, subtitle, image }) {
	return (
		<div className="flex flex-col flex-1 justify-between overflow-hidden bg-gray-100 rounded-lg min-w-[300px] md:min-w-[345px] hover:scale-105 transition duration-300 ease-out">
			<div className="flex flex-1 flex-col justify-start min-h-[160px] p-8">
				<h3 className="text-2xl font-semibold break-words md:text-3xl">
					{title}
				</h3>
				<p className="my-3 text-sm md:text-base">{subtitle}</p>
			</div>
			<img src={image} alt={title} className="w-full align-bottom" />
		</div>
	);
}

export default CarouselCard;
