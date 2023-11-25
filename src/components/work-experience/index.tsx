import { useState } from "react";
import { BsInfoCircleFill as Info } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Fade } from "react-awesome-reveal";
import { JobModal } from "./modal";
import { Job } from "../../types";
import jobs from "../../data/work-experience.json";

interface CardProps {
  job: Job;
  handleClick: (job: Job | null) => void;
}
export const Experience: React.FC = () => {
  const [modalContent, setModalContent] = useState<Job | null>(null);
  const handleClick = (job: Job | null) => {
    setModalContent(job);
  };

  return (
    <section
      id="Experience"
      className="flex min-h-[calc(67svh)] min-h-[calc(67vh)] flex-col justify-center bg-gray-800 py-20"
    >
      <div className="mx-auto">
        <h2 className="my-4 font-mjk-bold text-5xl font-semibold sm:text-6xl">Professional Experience</h2>
        {/* <!-- Work Experience Cards --> */}
        <div className="flex flex-row flex-wrap justify-center">
          <Fade cascade direction={"up"} duration={700}>
            {jobs.jobs.map((job: Job, index) => (
              <JobCard job={job} handleClick={handleClick} key={index} />
            ))}
          </Fade>
        </div>
      </div>
      {modalContent && (
        <JobModal
          handleClick={() => {
            handleClick(null);
          }}
          job={modalContent}
        />
      )}
    </section>
  );
};
const JobCard: React.FC<CardProps> = ({ job, handleClick }) => {
  const sortedPositions = job.positions.sort(
    (a, b) => new Date(a.positionStartDate).getTime() - new Date(b.positionStartDate).getTime(),
  );

  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "long" });
  };

  const formattedEmploymentStartDate: string = formatDate(sortedPositions[0].positionStartDate);

  const formattedEmploymentEndDate =
    "positionEndDate" in sortedPositions[sortedPositions.length - 1]
      ? formatDate(sortedPositions[sortedPositions.length - 1].positionEndDate!)
      : "present";

  return (
    <>
      <div className="relative m-5 h-40 w-[400px] max-w-[calc(100vw_*_0.8)] rounded-lg bg-papaya-400 p-4 shadow-md">
        <div className="mb-5 flex min-h-[58px] grow flex-col items-center">
          <div className="h-14">
            <img
              className="max-h-[50px] max-w-[160px] self-center"
              src={`/images/${job.companyLogo}`}
              alt={`${job.companyName} company logo`}
            />
          </div>

          <p className="h-14 font-semibold text-blue-200">{job.positions[job.positions.length - 1].positionTitle}</p>
          <p className="text-gray-200">{`${formattedEmploymentStartDate} - ${formattedEmploymentEndDate}`}</p>
        </div>
        {job.responsibilities && (
          <>
            <div className="absolute -bottom-3 -right-3 h-10 w-10 rounded-full bg-papaya-400"></div>
            <IconContext.Provider value={{ className: "text-blue-600 hover:text-blue-300 text-5xl" }}>
              <button className="absolute -bottom-4 -right-4" onClick={() => handleClick(job)}>
                <Info />
              </button>
            </IconContext.Provider>
          </>
        )}
      </div>
    </>
  );
};
