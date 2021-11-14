import { stats } from "../data";

function StatsSection() {
	return (
		<div className="flex flex-col items-center justify-center max-w-full p-8 bg-white">
			<h2 className="max-w-md pb-8 text-2xl text-center md:text-3xl lg:text-4xl ">
				The world's largest online grocery service
			</h2>
			<div className="flex flex-col w-full md:flex-row">
				<div
					alt="Stats"
					className="w-full rounded-lg mb-4 bg-contain bg-no-repeat bg-stats-mb pt-[101%] md:pt-[34.63%] md:bg-stats-lg"
				/>
			</div>
			<div className="flex flex-col w-full xl:flex-row">
				{stats.map(({ id, title, subtitle }) => (
					<div
						className="flex flex-col flex-1 mb-2 mr-0 bg-gray-100 rounded-lg xl:mr-2"
						key={id}>
						<div className="flex flex-col min-h-full p-8 xl:justify-between">
							<h3 className="text-2xl max-w-none xl:max-w-[175px] xl:text-3xl font-semibold text-left">
								{title}
							</h3>
							<p className="hidden text-lg text-left text-gray-500 lg:mt-2 xl:mt-6 xl:text-xl lg:block ">
								{subtitle}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default StatsSection;
