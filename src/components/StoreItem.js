import { ReactComponent as ChevronRight } from "../assets/svg/ChevronRight.svg";

function StoreItem({ title, image, subtitle }) {
	return (
		<div className="border-b">
			<button className="flex flex-row items-center w-full px-4 py-3 rounded-xl text-left transition-all hover:scale-[1.01] md:px-2 md:py-6 hover:bg-gray-100">
				<img
					src={image}
					alt={title}
					className="w-12 h-12 border rounded-full"
				/>
				<div className="flex-grow ml-3 overflow-hidden whitespace-nowrap">
					<p className="text-lg font-semibold truncate">{title}</p>
					<p className="text-sm text-gray-500 truncate">{subtitle}</p>
				</div>
				<ChevronRight className="block md:hidden" />
			</button>
		</div>
	);
}

export default StoreItem;
