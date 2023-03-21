import React from "react";

const Footer = () => {
	return (
		<div className="w-full absolute left-0">
			<div className="bg-gray-200 h-1/2 flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							THIS<span className="text-blue-600">Logo</span>
						</p>
						<div className="flex gap-6 pb-5">
                            <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="instagram" width={28} className="cursor-pointer transform transition-shadow duration-500 hover:scale-125"></img>
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter" width={28} className="cursor-pointer transform transition-shadow duration-500 hover:scale-125"></img>
                            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" width={28} className="cursor-pointer transform transition-shadow duration-500 hover:scale-125"></img>
                            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" alt="Facebook" width={28} className="cursor-pointer transform transition-shadow duration-500 hover:scale-125"></img>

						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Services</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Stocks
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Futures & Options
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Mutual Funds
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Fixed deposits
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Products
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							List Of Charges
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-200">
				<h1 className=" text-gray-800 font-semibold">
					© 2022-2023 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Team RSE INTERNS{" "}
					</span>
				</h1>
			</div>
		</div>
	);
}

export default Footer;