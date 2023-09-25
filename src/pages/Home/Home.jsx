import "./Home.css";

function Home() {
	return (
		<>
			<div className="class">
				<div className="flex z-40 justify-evenly space-x-96 relative top-8 bg-transparent">
					<li className="list-none">
						<img
							className="w-7/12"
							src="https://i.ibb.co/r5krrdz/logo.png"
							alt=""
						/>
					</li>
					<button className="text-center w-20 h-9 bg-red-600 text-white rounded-md hover:bg-red-500">
						Signup
					</button>
				</div>
				<div className=" relative bottom-64 h-screen bg-cover mainHome scale-125">
					<div className="flex-col items-center justify-center relative top-[29rem] space-y-3">
						<h1 className="text-4xl font-extrabold text-center text-white">
							Unlimited movies, TV shows and more
						</h1>
						<h1 className="text-xl text-center text-white">
							Watch anywhere. Cancel anytime.
						</h1>
						<h1 className="text-l text-center text-white">
							Ready to watch? Enter your email to create or restart your
							membership.
						</h1>
						<div className="flex justify-center items-center space-x-2 z-30">
							<input
								placeholder="Email Address"
								className="text-start h-10 border border-black w-72 rounded-sm bg-transparent text-white"
								type="email"
							/>

							<button className="text-center w-40 h-11 bg-red-600 text-white rounded-sm hover:bg-red-500 font-semibold">
								Get Started{" "}
							</button>
						</div>
					</div>
				</div>
				<br />
				{/* <div className="bg-gray-900 h-3 relative bottom-[10rem]"></div> */}
				<div className="bg-black h-[530px] relative bottom-[172px] flex items-center justify-center space-x-12 ">
					<div className="space-y-2 w-[40%] ">
						<h1 className="text-white font-extrabold text-5xl inline-block">
							Enjoy on your TV
						</h1>
						<p className="text-white whitespace-pre-wrap text-2xl  inline-block">
							Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
							Blu-ray players and more.
						</p>
					</div>
					<div>
						<video
							className="justify-end w-[466px] absolute"
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
							autoPlay
							muted
                            loop
						></video>

						<img
							className="h-[350px] justify-end relative"
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
							alt=""
						/>
					</div>
				</div>
				<br />
				<div className="bg-black h-[530px] relative bottom-[187px] flex items-center justify-center space-x-12">
					<img
						className="h-[350px] justify-end"
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
						alt=""
					/>
					<div className="space-y-5 w-[40%] ">
						<h1 className="text-white font-extrabold text-5xl inline-block">
							Download your shows to watch offline
						</h1>
						<p className="text-white whitespace-pre-wrap text-2xl  inline-block ">
							Save your favourites easily and always have something to watch.
						</p>
					</div>
				</div>

				<div className="bg-black h-[530px] relative bottom-[180px] flex items-center justify-center space-x-12">
					<div className="space-y-2 w-[40%]">
						<h1 className="text-white font-extrabold text-5xl inline-block">
							Watch everywhere
						</h1>
						<p className="text-white whitespace-pre-wrap text-2xl  inline-block">
							Stream unlimited movies and TV shows on your phone, tablet,
							laptop, and TV.
						</p>
					</div>
                <div>
                <video
							className="justify-end  absolute w-72 mx-20 top-[130px]"
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
							autoPlay
							muted
                            loop
						></video>
                <img
						className="h-[350px] justify-end relative"
						src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png "
						alt=""
					/>
                </div>
				</div>
				<div className="bg-black h-[530px] relative bottom-[172px] flex items-center justify-center space-x-12">
					<img
						className="h-[350px] justify-end"
						src="https://occ-0-2857-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
						alt=""
					/>
					<div className="space-y-5 w-[40%] ">
						<h1 className="text-white font-extrabold text-5xl inline-block">
							Create profiles for kids
						</h1>
						<p className="text-white whitespace-pre-wrap text-2xl  inline-block ">
							Send children on adventures with their favourite characters in a
							space made just for them—free with your membership.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
