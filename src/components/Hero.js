import { useState } from "react";

import { ReactComponent as USFlag } from "../assets/svg/USFlag.svg";
import { ReactComponent as CAFlag } from "../assets/svg/CAFlag.svg";
import { ReactComponent as Pin } from "../assets/svg/Pin.svg";
import { ReactComponent as RightArrow } from "../assets/svg/RightArrow.svg";
import { ReactComponent as Location } from "../assets/svg/Location.svg";

function Hero() {
	const [country, setCountry] = useState("US");

	const changeCountry = (newCountry) => {
		setCountry(newCountry);
	};

	return (
		<section className="w-full min-h-[380px] md:min-h-[428px] relative flex justify-end md:justify-center mb-6 md:mb-8 flex-col">
			<div className="absolute w-full h-full bg-[#DEEDD6] bg-cover bg-top md:bg-contain md:bg-no-repeat md:bg-right md:h-full md:w-full bg-hero-mb md:bg-hero-lg" />
			<div className="absolute z-10 hidden md:block top-10 left-10">
				<div className="flex items-center justify-center px-3 py-2 bg-white border border-gray-500 rounded-lg">
					<div className="py-[2px] mr-2">
						{country === "CA" ? (
							<CAFlag className="w-6 h-6" />
						) : (
							<USFlag className="w-6 h-6" />
						)}
					</div>
					<select
						value={country}
						onChange={(e) => changeCountry(e.target.value)}
						className="w-5 h-2 border-none outline-none">
						<option value="US" className="pb-1 pl-1 whitespace-nowrap">
							US
						</option>
						<option value="CA" className="pb-1 pl-1 whitespace-nowrap">
							CA
						</option>
					</select>
				</div>
			</div>
			<div className="z-0 p-4 md:pl-36">
				<h3 className="text-3xl font-bold w-64 md:text-4xl md:font-semibold md:w-[36rem]">
					Order groceries for delivery or pickup today
				</h3>
				<p className="hidden md:block md:text-base md:mt-4">
					Whatever you want from local stores, brought right to your door.
				</p>
				<div className="flex flex-col items-center mt-12 mb-4 md:flex-row md:mt-6">
					<div className="relative w-full md:w-auto">
						<div className="block md:flex">
							<div className="flex flex-col group transition-all">
								<div className="w-full rounded-xl p-4 bg-white flex flex-row items-center border-2 border-transparent h-14 md:w-[432px] focus-within:outline-none focus-within:border-black">
									<Pin />
									<input
										type="text"
										className="w-full ml-3 text-lg font-normal border-none outline-none"
										placeholder="Enter your address"
									/>
									<RightArrow className="group-focus-within:hidden" />
								</div>
								<div className="flex">
									<div className="hidden group-focus-within:block w-full absolute z-10 md:w-[432px] shadow-md rounded-xl mt-3 bg-white">
										<ul className="block list-none">
											<li className="rounded-b-xl">
												<button className="flex flex-row items-center w-full p-3 text-lg font-semibold bg-white hover:bg-gray-50 rounded-xl">
													<Location />
													<span className="ml-3">Use current location</span>
												</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
