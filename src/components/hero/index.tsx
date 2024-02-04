import { Fade } from "react-awesome-reveal";

export const Hero: React.FC = () => {
	return (
		<header className="grid  h-[100svh] w-full grid-cols-1 grid-rows-2 text-white lg:grid-cols-2 lg:grid-rows-1">
			<div className="flex h-[calc(100svh/2)] flex-col justify-center font-mjk lg:h-screen lg:py-9 lg:pr-8">
				<Fade
					cascade
					duration={1000}
				>
					<h1 className="text-center text-4xl font-bold text-blue-600 min-[445px]:text-6xl sm:text-7xl md:text-8xl lg:text-right lg:text-8xl xl:text-9xl">
						Web Development
					</h1>
					<h1 className="text-center text-4xl font-bold text-blue-600 min-[445px]:text-6xl sm:text-7xl md:text-8xl lg:text-right lg:text-8xl xl:text-9xl">
						in
					</h1>
				</Fade>
				<Fade
					className="text-center text-[80px] font-black text-peach-200 min-[445px]:text-[120px] sm:text-[150px] lg:text-right lg:text-[140px] xl:text-[180px]"
					delay={1e3}
					cascade
					damping={0.2}
				>
					Context
				</Fade>
			</div>
			<div className="relative h-[calc(100svh/2)] bg-hero bg-cover bg-center lg:h-screen">
				<p className="md:text-md absolute bottom-4 right-5 text-sm text-white">
					Image by{" "}
					<a
						href="https://www.freepik.com/free-photo/top-view-colorful-cogwheels-arrangement_25629310.htm"
						className="text-white"
					>
						Freepik
					</a>
				</p>
			</div>
		</header>
	);
};
