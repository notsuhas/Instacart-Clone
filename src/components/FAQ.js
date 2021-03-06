import { questions } from "../data";

import QuestionItem from "./QuestionItem";

function FAQ() {
	return (
		<section className="max-w-[950px] my-0 mx-auto p-8 pb-16">
			<div>
				<h2 className="mb-6 text-2xl text-center lg:text-3xl">
					Common questions
				</h2>
				<div>
					{questions.map(({ id, title, subtitle }) => (
						<QuestionItem title={title} subtitle={subtitle} key={id} />
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQ;
