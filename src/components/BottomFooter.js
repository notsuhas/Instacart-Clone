import { useState } from "react";
import { Switch } from "@headlessui/react";

function BottomFooter() {
	const [enabled, setEnabled] = useState(false);

	return (
		<>
			<div className="flex flex-col justify-start p-5 pl-0 border-t md:pl-10 md:pt-5 md:pb-12 md:pr-20 md:flex-row">
				<div className="flex flex-1 text-left">
					<h2 className="py-3 text-lg font-semibold flex-2">Accessibility</h2>
				</div>
				<div className="flex flex-row items-center justify-between w-full md:justify-start flex-2">
					<span className="mr-6 text-base font-normal text-gray-600">
						Enable high contrast colors
					</span>
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${
							enabled ? "bg-primary" : "bg-gray-300"
						} relative inline-flex items-center h-8 rounded-full w-16 transition-colors ease-in-out duration-200`}>
						<span className="sr-only">Enable Accessibility</span>
						<div
							className={`${
								enabled ? "translate-x-9" : "translate-x-1"
							} w-6 h-6 transform flex items-center justify-center bg-white rounded-full transition ease-in-out duration-200`}>
							{enabled ? (
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="#0AAD0A"
									xmlns="http://www.w3.org/2000/svg"
									size="16">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M9 15.379l-3.94-3.94a1.5 1.5 0 00-2.12 2.122l5 5a1.5 1.5 0 002.12 0l10.998-11a1.5 1.5 0 00-2.122-2.122L9 15.38z"></path>
								</svg>
							) : (
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="#C7C8CD"
									xmlns="http://www.w3.org/2000/svg"
									size="16">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M19.06 4.94a1.5 1.5 0 010 2.12L14.122 12l4.94 4.94a1.5 1.5 0 01.103 2.007l-.103.114a1.5 1.5 0 01-2.122 0L12 14.12l-4.94 4.94a1.5 1.5 0 01-2.12-2.122L9.878 12l-4.94-4.94a1.5 1.5 0 01-.103-2.007l.103-.114a1.5 1.5 0 012.122 0L12 9.88l4.94-4.94a1.5 1.5 0 012.12 0z"></path>
								</svg>
							)}
						</div>
					</Switch>
				</div>
			</div>
			<div>
				<div className="flex flex-row justify-between w-full border-t">
					<div className="flex flex-1 pr-5">
						<h2 className="flex pt-5 pb-3 pl-0 text-lg font-semibold flex-2">
							Legal
						</h2>
					</div>
					<div className="flex w-full justify-between flex-col mt-1 mb-5 md:flex-row flex-2">
						<div className="flex-grow-[3] list-none pr-[5%]">
							<ul className="flex">
								<li className="pt-5 pr-8 text-sm font-semibold">
									<a href="#">Terms of Use</a>
								</li>
								<li className="pt-5 pr-8 text-sm font-semibold">
									<a href="#">Privacy Policy</a>
								</li>
							</ul>
						</div>
						<div className="flex-1 inline-block list-none ">
							<ul className="flex space-x-3">
								<li className="pt-5 ">
									<a href="#">
										<svg
											width="20px"
											height="20px"
											viewBox="0 0 24 24"
											fill="#343538"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.827 5.138C3.5 5.78 3.5 6.62 3.5 8.3v7.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311c.642.327 1.482.327 3.162.327h4.28v-6.583h-2.215V11.35h2.215V9.459c0-2.196 1.341-3.391 3.3-3.391.938 0 1.745.07 1.98.1v2.295l-1.359.001c-1.065 0-1.271.506-1.271 1.249v1.638h2.54l-.33 2.566h-2.21V20.5h.47c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311c.327-.642.327-1.482.327-3.162V8.3c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C18.22 3.5 17.38 3.5 15.7 3.5H8.3c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311z"></path>
										</svg>
									</a>
								</li>
								<li className="pt-5 ">
									<a href="#">
										<svg
											width="20px"
											height="20px"
											viewBox="0 0 24 24"
											fill="#343538"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M8.475 19.647c7.17 0 11.092-6.02 11.092-11.241 0-.171 0-.341-.012-.51A7.992 7.992 0 0021.5 5.85a7.7 7.7 0 01-2.239.622 3.955 3.955 0 001.714-2.185 7.749 7.749 0 01-2.476.958 3.864 3.864 0 00-4.683-.777c-1.555.844-2.358 2.64-1.96 4.38a11.018 11.018 0 01-8.034-4.127C2.788 6.526 3.316 8.836 5.03 9.995A3.83 3.83 0 013.26 9.5v.05c0 1.881 1.309 3.501 3.127 3.873a3.84 3.84 0 01-1.76.068 3.91 3.91 0 003.642 2.744A7.756 7.756 0 012.5 17.872a10.93 10.93 0 005.975 1.772"></path>
										</svg>
									</a>
								</li>
								<li className="pt-5 ">
									<a href="#">
										<svg
											width="20px"
											height="20px"
											viewBox="0 0 24 24"
											fill="#343538"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M3.5 8.3c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C5.78 3.5 6.62 3.5 8.3 3.5h7.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311c.327.642.327 1.482.327 3.162v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311c-.642.327-1.482.327-3.162.327H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C3.5 18.22 3.5 17.38 3.5 15.7V8.3zm8.5-.8a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm5 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
										</svg>
									</a>
								</li>
								<li className="pt-5 ">
									<a href="#">
										<svg
											width="20px"
											height="20px"
											viewBox="0 0 24 24"
											fill="#343538"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M2.5 12a9.505 9.505 0 006.038 8.85c-.083-.752-.158-1.908.033-2.729.173-.741 1.114-4.722 1.114-4.722S9.4 12.83 9.4 11.99c0-1.321.765-2.307 1.719-2.307.81 0 1.202.608 1.202 1.338 0 .815-.52 2.033-.787 3.163-.224.945.474 1.716 1.407 1.716 1.688 0 2.986-1.78 2.986-4.35 0-2.274-1.634-3.865-3.968-3.865-2.703 0-4.29 2.028-4.29 4.123 0 .816.315 1.692.707 2.168a.284.284 0 01.066.272c-.072.3-.232.946-.264 1.078-.041.174-.137.21-.317.127-1.187-.553-1.929-2.287-1.929-3.68 0-2.997 2.178-5.75 6.277-5.75 3.296 0 5.857 2.349 5.857 5.487 0 3.274-2.065 5.91-4.93 5.91-.962 0-1.867-.5-2.177-1.091 0 0-.477 1.813-.592 2.258-.215.825-.794 1.86-1.18 2.49A9.5 9.5 0 102.5 12z"></path>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-row w-full pl-0 mb-10 text-xs font-normal text-gray-400">
					Apple and the Apple logo are trademarks of Apple Inc., registered in
					the U.S. and other countries. App Store is a service mark of Apple
					Inc. Android, Google Play and the Google Play logo are trademarks of
					Google LLC.
				</div>
			</div>
		</>
	);
}

export default BottomFooter;
