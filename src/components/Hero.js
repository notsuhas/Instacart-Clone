import { ReactComponent as USFlag } from "../assets/svg/USFlag.svg";
import { ReactComponent as CAFlag } from "../assets/svg/CAFlag.svg";
import { useState } from "react";

function Hero() {
	const [country, setCountry] = useState("US");

	const changeCountry = (newCountry) => {
		setCountry(newCountry);
	};

	return (
		<section className="w-full min-h-[380px] md:min-h-[428px] -mt-4 relative flex justify-end md:justify-center mb-6 md:mb-8 flex-col">
			<div className="absolute w-full h-full bg-[#DEEDD6] bg-cover bg-top md:bg-contain md:bg-no-repeat md:bg-right md:h-full md:w-full bg-hero-mb md:bg-hero-lg"></div>

			<div className="hidden md:block absolute z-10 top-10 left-10">
				<div className="flex items-center justify-center px-3 py-2 bg-white border border-gray-500 rounded-lg">
					{country === "CA" ? (
						<CAFlag className="w-6 h-6" />
					) : (
						<USFlag className="w-6 h-6" />
					)}
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
							<div className="flex flex-col group">
								<div className="w-full rounded-xl p-4 bg-white flex flex-row items-center border-2 border-transparent h-14 md:w-[432px] focus-within:outline-none focus-within:border-black">
									<svg
										width="19"
										height="19"
										viewBox="0 0 24 24"
										fill="#343538"
										xmlns="http://www.w3.org/2000/svg"
										size="19">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M19 9.5c0 3.647-3.931 9.129-5.902 11.647a1.384 1.384 0 01-2.196 0C8.932 18.63 5 13.147 5 9.5a7 7 0 0114 0zm-4.002.105a3 3 0 11-5.996-.21 3 3 0 015.996.21z"></path>
									</svg>
									<input
										type="text"
										className="w-full ml-3 text-lg font-normal border-none outline-none"
										placeholder="Enter your address"
									/>
									<svg
										className="group-focus-within:hidden"
										width="19"
										height="19"
										viewBox="0 0 24 24"
										fill="#0AAD0A"
										xmlns="http://www.w3.org/2000/svg"
										size="19"
										color="systemSuccessRegular">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M13.06 3.94l7 7 .02.02c.022.022.043.045.063.068l-.082-.089a1.513 1.513 0 01.274.377 1.494 1.494 0 01-.071 1.493 1.28 1.28 0 01-.121.163 1.57 1.57 0 01-.062.068l-.02.02-7 7a1.5 1.5 0 01-2.122 0l-.103-.113a1.5 1.5 0 01.103-2.008l4.44-4.439H5A1.5 1.5 0 013.5 12l.007-.145A1.5 1.5 0 015 10.5h10.379l-4.44-4.44a1.5 1.5 0 012.122-2.12z"></path>
									</svg>
								</div>
								<div className="flex">
									<div className="hidden group-focus-within:block w-full absolute z-10 md:w-[432px] shadow-md rounded-xl mt-3 bg-white">
										<ul className="block list-none">
											<li className="rounded-b-xl">
												<button className="flex flex-row items-center w-full p-3 text-lg font-semibold bg-white rounded-xl">
													<svg
														width="19"
														height="19"
														viewBox="0 0 24 24"
														fill="#0AAD0A"
														xmlns="http://www.w3.org/2000/svg"
														size="19"
														color="systemSuccessRegular">
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M10.77 13.153l-6.274-2.24c-1.35-.482-1.32-2.402.045-2.84l14-4.5c1.184-.381 2.29.76 1.872 1.932l-5 14c-.49 1.373-2.455 1.31-2.855-.093l-1.788-6.258z"></path>
													</svg>
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
