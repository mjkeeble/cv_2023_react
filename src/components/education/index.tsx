import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { IconContext } from "react-icons";
import { BsInfoCircleFill as Info } from "react-icons/bs";
import education from "../../data/education.json";
import { Qualification } from "../../types";
import { QualificationModal } from "./modal";

interface CardProps {
  qualification: Qualification;
  handleClick: (qualification: Qualification | null) => void;
}

export const Education: React.FC = () => {
  const [modalContent, setModalContent] = useState<Qualification | null>(null);
  const handleClick = (qualification: Qualification | null) => {
    setModalContent(qualification);
  };

  return (
    <section
      id="Education"
      className="flex min-h-[calc(67svh)] flex-col justify-center bg-gray-800 py-20"
    >
      <div className="mx-auto">
        <h2 className="mb-4 font-mjk-bold text-6xl font-semibold">Education and Training</h2>

        {/* <!-- Education Cards --> */}
        <div className="flex flex-row flex-wrap justify-center">
          <Fade
            cascade
            triggerOnce={true}
            damping={0.2}
            direction={"up"}
            duration={700}
          >
            {education.qualifications.map((qualification: Qualification, index) => (
              <QualificationCard
                qualification={qualification}
                handleClick={handleClick}
                key={index}
              />
            ))}
          </Fade>
        </div>
      </div>
      {modalContent && (
        <QualificationModal
          handleClick={() => {
            handleClick(null);
          }}
          qualification={modalContent}
        />
      )}
    </section>
  );
};

const QualificationCard: React.FC<CardProps> = ({ qualification, handleClick }) => {
  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "long" });
  };

  return (
    <>
      <div className="relative m-5 h-40 w-[400px] max-w-[calc(100vw_*_0.8)] rounded-lg bg-papaya-400 p-4 shadow-md">
        <div className="mb-5 flex min-h-[58px] grow flex-col items-center">
          <div className="h-14">
            <img
              className="max-h-[50px] max-w-[160px] self-center"
              src={`/images/${qualification.logo}`}
              alt={`${qualification.institute}  logo`}
            />
          </div>

          <p className="h-14 font-semibold text-blue-200">{qualification.title}</p>
          <p className="text-gray-200">{`${formatDate(qualification.startDate)} - ${
            qualification.endDate ? formatDate(qualification.endDate) : "present"
          }`}</p>
        </div>
        {qualification.description && (
          <>
            <div className="absolute -bottom-3 -right-3 h-10 w-10 rounded-full bg-papaya-400"></div>
            <IconContext.Provider value={{ className: "text-blue-600 hover:text-blue-300 text-5xl" }}>
              <button
                className="absolute -bottom-4 -right-4"
                onClick={() => handleClick(qualification)}
              >
                <Info />
              </button>
            </IconContext.Provider>
          </>
        )}
      </div>
    </>
  );
};
