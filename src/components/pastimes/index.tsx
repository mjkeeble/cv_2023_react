import { useState } from "react";
import { Pastime } from "../../types";
import pastimes from "../../data/pastimes.json";
import { PastimeModal } from "./modal";
import { BsInfoCircleFill as Info } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Fade } from "react-awesome-reveal";

interface CardProps {
  pastime: Pastime;
  handleClick: (pastime: Pastime | null) => void;
}

export const Pastimes: React.FC = () => {
  const [modalContent, setModalContent] = useState<Pastime | null>(null);
  const handleClick = (pastime: Pastime | null) => {
    setModalContent(pastime);
  };

  return (
    <section
      id="Pastimes"
      className="flex min-h-[calc(67svh)] min-h-[calc(67vh)] flex-col justify-center bg-papaya py-20"
    >
      <div className="mx-auto">
        <h2 className="mb-4 font-mjk-bold text-6xl font-semibold">Pastimes</h2>

        {/* <!-- Pastime Cards --> */}
        <div className="flex flex-row flex-wrap justify-center">
          <Fade cascade direction={"up"} duration={700}>
            {pastimes.pastimes.map((pastime: Pastime, index) => (
              <PastimeCard pastime={pastime} handleClick={handleClick} key={index} />
            ))}
          </Fade>
        </div>
      </div>
      {modalContent && (
        <PastimeModal
          handleClick={() => {
            handleClick(null);
          }}
          pastime={modalContent}
        />
      )}
    </section>
  );
};

const PastimeCard: React.FC<CardProps> = ({ pastime, handleClick }) => {
  return (
    <>
      <div className="relative m-5 h-40 w-[400px] max-w-[calc(100vw_*_0.8)] rounded-lg bg-charcoal-800 p-4 shadow-md">
        <div className="mb-5 flex min-h-[58px] grow flex-col items-center">
          <div className="h-14">
            <img
              className="max-h-[50px] max-w-[160px] self-center"
              src={`/images/${pastime.images[0].src}`}
              alt={`${pastime.title}`}
            />
          </div>

          <p className="h-14 font-semibold text-blue-200">{pastime.title}</p>
          <p className="text-gray-200">{pastime.dates}</p>
        </div>
        {pastime.description && (
          <>
            <div className="absolute -bottom-3 -right-3 h-10 w-10 rounded-full bg-papaya-400"></div>
            <IconContext.Provider value={{ className: "text-blue-600 hover:text-blue-300 text-5xl" }}>
              <button className="absolute -bottom-4 -right-4" onClick={() => handleClick(pastime)}>
                <Info />
              </button>
            </IconContext.Provider>
          </>
        )}
      </div>
    </>
  );
};
