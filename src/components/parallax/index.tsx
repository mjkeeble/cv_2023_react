export const Parallax: React.FC<{image:string}> = ({image}) => {

  return (
    <div className={`flex items-center bg-fixed ${image} bg-cover bg-center justify-center h-[calc(100vh_/_3)] max-h-screen min-h-[600px]`}>
      {/* <h1 className="text-9xl text-peach-600">Parallax</h1> */}
    </div>
  );
};
