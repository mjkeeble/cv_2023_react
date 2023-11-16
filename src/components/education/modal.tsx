import { Qualification } from "../../types";

interface ModalProps {
  handleClick: () => void;
  qualification: Qualification;
}

interface ListProps {
  description: string[];
}

export const QualificationModal: React.FC<ModalProps> = ({handleClick, qualification}) => {
  
  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "long" });
  };

  return (
    // {/* Blur layer */}
    <div className="fixed z-[200] inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-charcoal-900 bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
        {/* Modal */}
        <div className=" bg-papaya-400 backdrop-opacity-100 shadow-gray-300 rounded-lg overflow-hidden shadow-xl w-[800px] max-w-[calc(100vw_*_0.8)] max-h-[calc(100vh_*_0.9)] overflow-y-auto m-4">
          {/* image */}
          <div className="flex justify-center bg-papaya">
            <img
              className="h-96 max-h-[calc(100vh_/_4)] m-4"
              src={`/${qualification.logo}`}
              alt={`${qualification.institute} image`}
            />
          </div>

          {/* Header section */}
          <div className="m-4 mb-5">
            <h1 className="text-left font-bold text-2xl sm:text-4xl lg:text-5xl">{qualification.title}</h1>
          </div>
          <div className="mx-4 mb-5">
            <h2 className="text-left sm:text-2xl font-semibold">{qualification.institute}</h2>
            <p className="text-left">
              {`${formatDate(qualification.startDate)} - ${
                qualification.endDate ? formatDate(qualification.endDate) : "present"
              }`}
            </p>
          </div>

          {/* Description */}
          {qualification.description && <List description={qualification.description} />}

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

const List: React.FC<ListProps> = ({ description }) => {
  return (
    <div className="flex justify-center">
      <div className="m-4 max-w-2xl">
        <ul className="text-left">
          {description.map((item: string) => (
            <li className="mx-2 px-4 py-2 list-disc" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
