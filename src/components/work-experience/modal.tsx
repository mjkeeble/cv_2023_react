import { Interweave } from "interweave";
import { Zoom } from "react-awesome-reveal";
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
    (a, b) => new Date(b.positionStartDate).getTime() - new Date(a.positionStartDate).getTime()
  );

  return (
    // {/* Blur layer */}
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center bg-charcoal-900 bg-opacity-80 backdrop-blur-sm">
        {/* Modal */}
        <Zoom duration={500}>
          <div className=" m-4 max-h-[calc(100vh_*_0.9)] w-[800px] max-w-[calc(100vw_*_0.8)] overflow-hidden overflow-y-auto rounded-lg bg-papaya-400 text-blue-600 shadow-xl shadow-gray-300 backdrop-opacity-100">
            {/* image */}
            <div className={`relative bg-[url('/${job.picture}')]`}>
              <img
                className="max-h-[calc(100vh_/_4)] w-full object-cover object-center"
                src={`/images/${job.picture}`}
                alt={`${job.companyName} image`}
              />
              <Interweave
                className="md:text-md absolute bottom-0 right-0 bg-gray-700 px-2 text-sm opacity-75"
                content={job.pictureSource}
              />
            </div>

            {/* Header section */}
            <div className="m-4 mb-5">
              <h1 className="text-left text-2xl font-bold sm:text-4xl lg:text-5xl">
                {job.companyShortName || job.companyName}
              </h1>
              {job.companyCurrentName && <p className="text-left">(now {job.companyCurrentName})</p>}
            </div>
            <div className="mx-4 mb-5">
              {reverseSortedPositions.map((position) => (
                <div key={position.positionStartDate}>
                  <h2 className="text-left font-semibold sm:text-2xl">
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
            <div className="m-8 flex justify-center">
              <button
                className="mx-8 rounded bg-blue-600 px-4 py-2 font-bold text-papaya-400 shadow-lg shadow-blue-600 hover:bg-blue-300"
                onClick={handleClick}
              >
                Close
              </button>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

const List: React.FC<ListProps> = ({ responsibilities }) => {
  return (
    <div className="flex justify-center">
      <div className="m-4 max-w-2xl pl-4">
        <ul className="text-left">
          {responsibilities.map((responsibility: string) => (
            <li
              className="mx-2 list-disc px-4 py-2"
              key={responsibility}
            >
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
