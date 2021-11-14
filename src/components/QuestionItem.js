import { useState } from "react";

function QuestionItem({ title, subtitle }) {
	const [openFAQ, setOpenFAQ] = useState(false);

	return (
		<div className="py-4 border-b sm:py-8">
			<h3>
				<button
					onClick={() => {
						setOpenFAQ(!openFAQ);
					}}
					className="flex items-center justify-between w-full h-auto text-xl text-left whitespace-normal border-none sm:text-2xl bg-none ">
					{title}
					<div className="flex items-center justify-center my-0 sm:my-6 ml-[25%]">
						{openFAQ ? (
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="#343538"
								xmlns="http://www.w3.org/2000/svg"
								size="24">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4 12.5A1.5 1.5 0 015.5 11h14a1.5 1.5 0 010 3h-14A1.5 1.5 0 014 12.5z"></path>
							</svg>
						) : (
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="#343538"
								xmlns="http://www.w3.org/2000/svg"
								size="24">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 3.5A1.5 1.5 0 0113.5 5v5.5H19a1.5 1.5 0 011.493 1.355L20.5 12a1.5 1.5 0 01-1.5 1.5h-5.5V19a1.5 1.5 0 01-1.355 1.493L12 20.5a1.5 1.5 0 01-1.5-1.5v-5.5H5a1.5 1.5 0 01-1.493-1.355L3.5 12A1.5 1.5 0 015 10.5h5.5V5a1.5 1.5 0 011.355-1.493L12 3.5z"></path>
							</svg>
						)}
					</div>
				</button>
			</h3>

			<div
				className={`${
					openFAQ ? "block" : "hidden"
				} overflow-hidden text-base sm:text-lg h-auto pt-4 pr-[15%]`}
				dangerouslySetInnerHTML={{ __html: subtitle }}></div>
		</div>
	);
}

export default QuestionItem;
