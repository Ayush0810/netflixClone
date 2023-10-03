import React from "react";

function Navbar() {
	return (
		<div className="flex bg-transparent justify-end w-[100vw] bg-black">
			<div className="flex justify-start align-middle space-x-10 m-9  mt-3 w-[50%]">
				<img
					className="w-20 h-7 mt-2 ml-3 brightness-125"
					src="https://i.ibb.co/r5krrdz/logo.png"
					alt=""
				/>
				<div className="flex space-x-4 mt-3">
					<li className="list-none text-l text-white cursor-pointer ">
						My List
					</li>
					<li className="list-none text-l text-white cursor-pointer">Movies</li>
					<li className="list-none text-l text-white cursor-pointer">
						Tv Shows
					</li>
				</div>
			</div>
			<div className="w-[50%] flex justify-end m-9  mt-3">
				<button className="text-center w-20 h-9 bg-red-700 contrast-125 text-white rounded-md hover:bg-red-500">
					Sign in
				</button>
			</div>
		</div>
	);
}

export default Navbar;
