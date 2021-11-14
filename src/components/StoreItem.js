function StoreItem({ id, title, image, subtitle }) {
	return (
		<button className="flex flex-row items-center w-full px-4 py-3 text-left border-b md:py-6 md:px-0">
			<img src={image} alt={title} className="w-12 h-12 border rounded-full" />
			<div className="flex-grow ml-3 overflow-hidden whitespace-nowrap">
				<p className="text-lg font-semibold truncate">{title}</p>
				<p className="text-sm text-gray-500 truncate">{subtitle}</p>
			</div>
		</button>
	);
}

export default StoreItem;
