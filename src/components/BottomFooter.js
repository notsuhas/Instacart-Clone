import { useState } from "react";

import { Switch } from "@headlessui/react";

import { ReactComponent as FBLogo } from "../assets/svg/FBLogo.svg";
import { ReactComponent as TWLogo } from "../assets/svg/TWLogo.svg";
import { ReactComponent as IGLogo } from "../assets/svg/IGLogo.svg";
import { ReactComponent as PILogo } from "../assets/svg/PILogo.svg";
import { ReactComponent as Tick } from "../assets/svg/Tick.svg";
import { ReactComponent as Cross } from "../assets/svg/Cross.svg";

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
							{enabled ? <Tick /> : <Cross />}
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
					<div className="flex flex-col justify-between w-full mt-1 mb-5 md:flex-row flex-2">
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
										<FBLogo />
									</a>
								</li>
								<li className="pt-5 ">
									<a href="#">
										<TWLogo />
									</a>
								</li>
								<li className="pt-5 ">
									<a href="#">
										<IGLogo />
									</a>
								</li>
								<li className="pt-5 ">
									<a href="#">
										<PILogo />
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
