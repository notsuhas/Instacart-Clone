import { useState } from "react";

import { ReactComponent as Minus } from "../assets/svg/Minus.svg";
import { ReactComponent as Plus } from "../assets/svg/Plus.svg";

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
						{openFAQ ? <Minus /> : <Plus />}
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
