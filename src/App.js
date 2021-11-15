import { useState } from "react";

import AboutSection from "./components/AboutSection";
import BottomFooter from "./components/BottomFooter";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import StoreList from "./components/StoreList";

function App() {
	const [country, setCountry] = useState("US");

	const changeCountry = (newCountry) => {
		setCountry(newCountry);
	};

	return (
		<div className="App transition-all ease-linear duration-300 font-eina font-normal bg-white text-[#343538] min-w-[320px]">
			<header>
				<NavBar country={country} changeCountry={changeCountry} />
			</header>
			<main>
				<Hero country={country} changeCountry={changeCountry} />
				<StoreList country={country} />
				<AboutSection />
				<FAQ />
			</main>
			<footer>
				<div className="px-[5%] max-w-6xl m-auto text-left">
					<BottomFooter />
				</div>
			</footer>
		</div>
	);
}

export default App;
