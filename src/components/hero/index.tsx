export const Hero: React.FC = () => {
  return (
    <header className="relative w-full  h-full text-white grid grid-cols-1 lg:grid-cols-2">
      <div className="h-[calc(100vh_/_2)] lg:h-screen flex flex-col justify-center pr-8 py-9 md:py-0">
        <h1 className="text-blue-600 text-center lg:text-right text-5xl md:text-7xl lg:text-5xl xl:text-7xl font-bold">
          Web Development
          <br />
          in
        </h1>
        <h1 className="text-peach-200 text-center lg:text-right text-[120px] sm:text-[150px] lg:text-[110px] font-black">
          Context
        </h1>
      </div>
      <div className="bg-hero bg-center bg-cover h-[calc(100vh_/_2)] lg:h-screen "></div>
      <p className="absolute bottom-16 -right-10 -rotate-90 text-white">
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
