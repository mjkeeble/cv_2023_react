export const Hero: React.FC = () => {
  return (
    <header className="w-full  h-[100svh] h-[100vh] text-white grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
      <div className="h-[calc(100svh/2)] lg:h-screen flex flex-col justify-center lg:pr-8 lg:py-9 font-mjk">
        <h1 className="text-blue-600 text-center lg:text-right text-4xl min-[445px]:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-bold">
          Web Development
          <br />
          in
        </h1>
        <h1 className="text-peach-200 text-center lg:text-right text-[80px] min-[445px]:text-[120px] sm:text-[150px] lg:text-[140px] xl:text-[180px] font-black">
          Context
        </h1>
      </div>
      <div className="relative bg-hero bg-center bg-cover h-[calc(100svh/2)] lg:h-screen"></div>
      <p className="absolute bottom-10 lg:bottom-20 right-5 text-white text-sm md:text-md">
        Image by{" "}
        <a
          href="https://www.freepik.com/free-photo/top-view-colorful-cogwheels-arrangement_25629310.htm"
          className="text-white"
        >
          Freepik
        </a>
      </p>
    </header>
  );
};
