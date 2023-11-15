import { Job } from "../../types";

interface ModalProps {
  handleClick: () => void;
  job: Job;
}

interface ListProps {
  responsibilities: string[];
}

export const JobModal: React.FC<ModalProps> = ({ handleClick, job }) => {
  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "long" });
  };

  const reverseSortedPositions = job.positions.sort(
    (a, b) => new Date(b.positionStartDate).getTime() - new Date(a.positionStartDate).getTime(),
  );

  return (
    // {/* Blur layer */}
    <div className="fixed z-[200] inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm flex items-center justify-center">
        {/* Modal */}
        <div className=" bg-white backdrop-opacity-100 shadow-gray-300 rounded-lg overflow-hidden shadow-xl max-w-screen-lg w-full m-4">
          {/* image */}
          <div className={`relative bg-[url('/${job.picture}')]`}>
            <img
              className="max-h-[calc(100vh_/_4)] w-full object-cover object-center"
              src={`/${job.picture}`}
              alt={`${job.companyName} image`}
            />
            <p className="absolute bottom-0 right-1 text-white">{job.pictureSource}</p>
          </div>
          {/* Header section */}
          <div className="m-4">
            <h1 className="text-left">{job.companyShortName || job.companyName}</h1>
            {job.companyCurrentName && <p className="text-left mb-5">(now {job.companyCurrentName})</p>}
            {reverseSortedPositions.map((position) => (
              <div key={position.positionStartDate}>
                <h2 className="text-left text-2xl font-semibold">
                  {position.positionTitle}, {job.companyLocation}
                </h2>
                <p className="text-left">
                  {`${formatDate(position.positionStartDate)} - ${
                    position.positionEndDate ? formatDate(position.positionEndDate) : "present"
                  }`}
                </p>
              </div>
            ))}

            {/* Responsibilities */}
            {job.responsibilities && <List responsibilities={job.responsibilities} />}
          </div>

          {/* Body section */}

          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>
  );
};

const List: React.FC<ListProps> = ({ responsibilities }) => {
  return (
    <div>
      <div className="m-4">
        <ul className="text-left">
          {responsibilities.map((responsibility: string) => (
            <li className="mx-2 px-4 py-2 list-disc" key={responsibility}>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
