import { useState, useRef } from "react";

import { ReactComponent as Logo } from "../logo.svg";
import { ReactComponent as USFlag } from "../assets/svg/USFlag.svg";
import { ReactComponent as CAFlag } from "../assets/svg/CAFlag.svg";
import { ReactComponent as Bars } from "../assets/svg/Bars.svg";
import { ReactComponent as Close } from "../assets/svg/Close.svg";

function NavBar() {
	const [showMenu, setShowMenu] = useState(false);

	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	const toggleLinks = () => {
		setShowMenu(!showMenu);
	};

	const [country, setCountry] = useState(true);

	const changeCountry = (newCountry) => {
		setCountry(newCountry);
	};

	return (
		<div className="block">
			<nav className="flex flex-row items-center justify-center p-3 bg-white border-b shadow-md md:justify-between md:px-10 md:py-6 max-h-20">
				<button
					onClick={(e) => toggleLinks(e.target.value)}
					className="flex justify-start border-none md:hidden bg-none">
					{showMenu ? <Close /> : <Bars />}
				</button>
				<div className="flex flex-row items-center justify-center w-full md:justify-start">
					<div className="border-none md:border-r md:pr-6">
						<a href="#">
							<Logo className="h-6 md:h-auto" />
						</a>
					</div>
				</div>
				<div className="flex flex-row">
					<button className="relative mr-3 text-sm font-semibold transition-all bg-white select-none hover:text-gray-500 md:text-lg md:mx-5 whitespace-nowrap">
						Log in
					</button>
					<button className="relative px-4 py-2 text-sm font-semibold text-white transition-all select-none hover:brightness-90 md:text-lg rounded-3xl whitespace-nowrap bg-primary">
						Sign up
					</button>
				</div>
			</nav>
			<div
				ref={linksContainerRef}
				className={`${showMenu ? "block" : "hidden"} md:hidden bg-white`}>
				<div
					ref={linksRef}
					className="flex flex-row items-center justify-between p-3">
					<div className="flex flex-row items-center justify-between w-full px-4 overflow-hidden">
						<button onClick={(e) => changeCountry(!country)} className="w-full">
							<span className="block whitespace-nowrap">
								<div className="flex flex-row items-center justify-between text-lg font-normal text-primary">
									<div className="flex flex-row items-center">
										<div className="py-[2px]">
											{country ? (
												<CAFlag className="w-6 h-6" />
											) : (
												<USFlag className="w-6 h-6" />
											)}
										</div>
										<span className="text-lg text-[#343538] font-semibold ml-2">
											{`${country ? "Canada" : "United States"}`}
										</span>
									</div>
									<span className="transition-all hover:text-gray-500">
										Change
									</span>
								</div>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
