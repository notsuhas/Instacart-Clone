import AboutSection from "./components/AboutSection";
import BottomFooter from "./components/BottomFooter";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
// import InstaCartFooter from "./components/InstaCartFooter";
import NavBar from "./components/NavBar";
// import ShopperFooter from "./components/ShopperFooter";
import StoreList from "./components/StoreList";

function App() {
	return (
		<div className="App font-eina font-normal bg-white text-[#343538] min-w-[320px]">
			<header>
				<NavBar />
			</header>
			<main>
				<Hero />
				<StoreList />
				<AboutSection />
				<FAQ />
			</main>
			<footer>
				<div className="px-[5%] max-w-6xl m-auto text-left">
					{/* <InstaCartFooter /> */}
					{/* <ShopperFooter /> */}
					<BottomFooter />
				</div>
			</footer>
		</div>
	);
}

export default App;