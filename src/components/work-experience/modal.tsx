import { Interweave } from "interweave";
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
      <div className="absolute inset-0 bg-charcoal-900 bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
        {/* Modal */}
        <div className=" bg-papaya-400 backdrop-opacity-100 shadow-gray-300 text-blue-600 rounded-lg overflow-hidden shadow-xl w-[800px] max-w-[calc(100vw_*_0.8)] max-h-[calc(100vh_*_0.9)] overflow-y-auto m-4">
          {/* image */}
          <div className={`relative bg-[url('/${job.picture}')]`}>
            <img
              className="max-h-[calc(100vh_/_4)] w-full object-cover object-center"
              src={`/${job.picture}`}
              alt={`${job.companyName} image`}
            />
            <Interweave
              className="bg-gray-700 opacity-75 px-2 absolute bottom-0 right-0 text-sm md:text-md"
              content={job.pictureSource}
            />
          </div>

          {/* Header section */}
          <div className="m-4 mb-5">
            <h1 className="text-left font-bold text-2xl sm:text-4xl lg:text-5xl">
              {job.companyShortName || job.companyName}
            </h1>
            {job.companyCurrentName && <p className="text-left">(now {job.companyCurrentName})</p>}
          </div>
          <div className="mx-4 mb-5">
            {reverseSortedPositions.map((position) => (
              <div key={position.positionStartDate}>
                <h2 className="text-left sm:text-2xl font-semibold">
                  {position.positionTitle}, {job.companyLocation}
                </h2>
                <p className="text-left">
                  {`${formatDate(position.positionStartDate)} - ${
                    position.positionEndDate ? formatDate(position.positionEndDate) : "present"
                  }`}
                </p>
              </div>
            ))}
          </div>

          {/* Responsibilities */}
          {job.responsibilities && <List responsibilities={job.responsibilities} />}

          {/* Button section */}
          <div className="flex justify-center m-8">
            <button
              className="bg-blue-600 hover:bg-blue-300 text-papaya-400 font-bold py-2 px-4 rounded mx-8 shadow-lg shadow-blue-600"
              onClick={handleClick}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const List: React.FC<ListProps> = ({ responsibilities }) => {
  return (
    <div className="flex justify-center">
      <div className="m-4 pl-4 max-w-2xl">
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
