export const Parallax: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div
      className={`flex items-center bg-fixed ${image} h-[calc(100vh_/_3)] max-h-screen min-h-[600px] justify-center bg-cover bg-center`}
    ></div>
  );
};
