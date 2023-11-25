import { Zoom } from "react-awesome-reveal";
import { Qualification } from "../../types";

interface ModalProps {
  handleClick: () => void;
  qualification: Qualification;
}

interface ListProps {
  description: string[];
}

export const QualificationModal: React.FC<ModalProps> = ({ handleClick, qualification }) => {
  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "long" });
  };

  return (
    // {/* Blur layer */}
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center bg-charcoal-900 bg-opacity-80 backdrop-blur-sm">
        {/* Modal */}
        <Zoom duration={500}>
          <div className=" m-4 max-h-[calc(100vh_*_0.9)] w-[800px] max-w-[calc(100vw_*_0.8)] overflow-hidden overflow-y-auto rounded-lg bg-papaya-400 shadow-xl shadow-gray-300 backdrop-opacity-100">
            {/* image */}
            <div className="flex justify-center bg-papaya">
              <img
                className="m-4 h-96 max-h-[calc(100vh_/_4)]"
                src={`/images/${qualification.logo}`}
                alt={`${qualification.institute} image`}
              />
            </div>

            {/* Header section */}
            <div className="m-4 mb-5">
              <h1 className="text-left text-2xl font-bold sm:text-4xl lg:text-5xl">{qualification.title}</h1>
            </div>
            <div className="mx-4 mb-5">
              <h2 className="text-left font-semibold sm:text-2xl">{qualification.institute}</h2>
              <p className="text-left">
                {`${formatDate(qualification.startDate)} - ${
                  qualification.endDate ? formatDate(qualification.endDate) : "present"
                }`}
              </p>
            </div>

            {/* Description */}
            {qualification.description && <List description={qualification.description} />}

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

const List: React.FC<ListProps> = ({ description }) => {
  return (
    <div className="flex justify-center">
      <div className="m-4 max-w-2xl">
        <ul className="text-left">
          {description.map((item: string, index) => (
            <li className="mx-2 list-disc px-4 py-2" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
