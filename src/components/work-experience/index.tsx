import { BsInfoCircleFill as Info } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useState } from "react";
import { JobModal } from "./modal";
import { Job } from "../../types";
import jobs from "../../data/work-experience.json";

export const Experience: React.FC = () => {
  return (
    <section
      id="Experience"
      className="bg-gray-800 py-8 pt-20 pb-4 min-h-[calc(100vh_-_70px)] flex flex-col justify-center"
    >
      <div className="mx-auto">
        <h2 className="text-6xl font-semibold mb-4 font-mjk-bold">Professional Experience</h2>
        {/* <!-- Work Experience Cards --> */}
        <div className="flex flex-row flex-wrap justify-center">
          {jobs.jobs.map((job: Job) => (
            <JobCard {...job} key={job.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
const JobCard = (job: Job) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };

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
      <div className="relative bg-papaya-400 p-4 rounded-lg shadow-md m-5 h-40 w-[400px]">
        <div className="flex items-center flex-col mb-5 min-h-[58px] grow">
          <div className="h-14">
            <img
              className="max-w-[160px] max-h-[50px] self-center"
              src={`/${job.companyLogo}`}
              alt={`${job.companyName} company logo`}
            />
          </div>

          <p className="h-14 font-semibold text-blue-200">{job.positions[job.positions.length - 1].positionTitle}</p>
          <p className="text-gray-200">{`${formattedEmploymentStartDate} - ${formattedEmploymentEndDate}`}</p>
        </div>
        {job.responsibilities && (
          <>
            <div className="absolute -right-3 -bottom-3 h-10 w-10 bg-papaya-400 rounded-full"></div>
            <IconContext.Provider value={{ className: "text-blue-600 hover:text-blue-300 text-5xl" }}>
              <button className="absolute -right-4 -bottom-4" onClick={handleClick}>
                <Info />
              </button>
            </IconContext.Provider>
          </>
        )}
        {showModal && <JobModal handleClick={handleClick} job={job} />}
      </div>
    </>
  );
};
