import React from "react";

const Footer = () => {
	return (
		<div id="footer" className="left-0">
			<div className="bg-neutral-800 flex max-[850px]:flex-wrap max-sm:p-3 flex-row md:justify-around justify-start items-start p-10 md:p-20">
				<div className="p-5 max-sm:w-40 md:w-56 ">
					<ul>
						<p className="text-white font-bold text-xl sm:text-3xl pb-6">
							THIS<span className="text-sky-600">Logo</span>
						</p>
						<div className="flex flex-row flex-wrap gap-2 pb-5">
                            <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-4 sm:w-7 ..."></img>
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-4 sm:w-7 ..."></img>
                            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-4 sm:w-7 ..."></img>
                            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-4 sm:w-7 ..."></img>
						</div>
					</ul>
				</div>
				<div className="p-5 max-sm:w-40 md:w-56">
					<ul>
						<p className="text-gray-100 font-bold text-sm sm:text-2xl pb-4">Services</p>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Stocks
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Futures & Options
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Mutual Funds
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Fixed deposits
						</li>
					</ul>
				</div>
				<div className="p-5 max-sm:w-40 md:w-56">
					<ul>
						<p className="text-gray-100 font-bold text-sm sm:text-2xl pb-4">Company</p>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Products
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5 max-sm:w-40 md:w-56">
					<ul>
						<p className="text-gray-100 font-bold text-sm sm:text-2xl pb-4">Support</p>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							List Of Charges
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-400 text-sm pb-2 md:font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-neutral-800">
				<h1 className=" text-gray-400 md:font-semibold">
					© 2022-2023 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 md:font-semibold cursor-pointer">
						Team RSE INTERNS{" "}
					</span>
				</h1>
			</div>
		</div>
	);
}

export default Footer;