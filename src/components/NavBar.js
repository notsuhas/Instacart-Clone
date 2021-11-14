import { ReactComponent as Logo } from "../logo.svg";

function NavBar() {
	return (
		<div className="block">
			<nav className="flex flex-row items-center justify-center p-3 mb-4 bg-white border-b shadow-md md:justify-between md:px-10 md:py-6 max-h-20">
				<button className="flex justify-start border-none bg-none">
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
							d="M18.8 17.5c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6zm0-7c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6zm0-7c.939 0 1.7.672 1.7 1.5s-.761 1.5-1.7 1.5H5.2c-.939 0-1.7-.672-1.7-1.5s.761-1.5 1.7-1.5h13.6z"></path>
					</svg>
				</button>
				<div className="flex flex-row items-center justify-center w-full">
					<div className="border-none md:border-r md:pr-6">
						<a href="#">
							<Logo className="h-6 md:h-auto" />
						</a>
					</div>
				</div>
				<div className="flex flex-row">
					<button className="relative mr-3 text-sm font-semibold bg-white select-none md:text-lg md:mx-5 whitespace-nowrap">
						Log in
					</button>
					<button className="relative px-4 py-2 text-sm font-semibold text-white select-none md:text-lg rounded-3xl whitespace-nowrap bg-primary">
						Sign up
					</button>
				</div>
			</nav>
			<div className="hidden">
				
			</div>
		</div>
	);
}

export default NavBar;
