import { useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import savings from "/src/assets/images/savings.png";
import MobileDropDown from "./MobileDropDown";

// using useLocation hook to get the current URL path
export function Header() {
	const location = useLocation();
	// grabs the pathname
	const path = location.pathname;
	let path_name = "";

	if (path === "/dashboard") {
		path_name = "Home";
	} else if (path === "/savings") {
		path_name = "Savings";
	} else if (path === "/community") {
		path_name = "Community";
	}

	return <h1>{path_name}</h1>;
}

const handle_settings = () => {
	toast.warning("🚧 Feature Coming Soon! 🚧")
}

export default function Navbar() {
	return (
		<nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
			<div className="px-3 py-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-start">
						{/* logo */}
						<Link
							to="/dashboard"
							className="text-xl font-bold flex items-center lg:ml-2.5"
						>
							<span className="flex flex-wrap self-center whitespace-nowrap font-black text-[#00D884] italic tracking-tighter hover:-translate-x-0.5 hover:-translate-y-0.5 duration-300">
								Budget Buddy
								<img src={savings} alt="" className="w-8 h-8" />
							</span>
						</Link>
					</div>

					<div className="font-black text-base">
						<Header />
					</div>

					<div className="flex items-center">
						<div className="hidden lg:flex items-center">
							<div className="-mb-2">
								<button onClick={handle_settings}>
									{/* add modal stating feature coming soon */}
									<FiSettings className="text-2xl hover:text-gray-500 hover:-translate-x-0.5 hover:-translate-y-0.5 duration-300" />
								</button>
							</div>
						</div>
						<a className="md:hidden sm:inline-flex ml-5 text-black hover:bg-gray-100 font-medium rounded-lg text-3xl p-2 text-center items-center mr-3">
							{/* drop down menu */}
							<MobileDropDown/>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
