import {Zoom} from "react-awesome-reveal";
import {Pastime} from "../../types";
import { SimpleSlider } from "./slick";

interface ModalProps {
  handleClick: () => void;
  pastime: Pastime;
}

interface ListProps {
  description: string[];
}

export const PastimeModal: React.FC<ModalProps> = ({ handleClick, pastime }) => {
  console.log("🚀 => pastime:", pastime.links);
  return (
    // {/* Blur layer */}
    <div className="fixed z-[200] inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-papaya-500 bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
        {/* Modal */}
        <Zoom duration={500}>
          <div className=" bg-charcoal-800 backdrop-opacity-100 shadow-gray-300 rounded-lg overflow-hidden text-blue-600 shadow-xl w-[calc(100vw_*_0.8)] max-w-[700px] max-h-[calc(100vh_*_0.9)] overflow-y-auto m-4">
            <div className={"h-96 max-h-[calc(100vh_/_4)] bg-charcoal-800"}>
              <SimpleSlider images={pastime.images} />
            </div>

            {/* Header section */}
            <div className="m-4 mb-5">
              <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl">{pastime.title}</h1>
            </div>
            <div className="mx-4 mb-5">
              {pastime.dates && <h2 className="text-left sm:text-2xl font-semibold">{pastime.dates}</h2>}
            </div>

            {/* Description */}
            <div className="m-4 md:m-8">{pastime.description && <List description={pastime.description} />}</div>

            {/* Links */}
            {pastime.links && (
              <div className="flex justify-center">
                {pastime.links.map((link, index) => (
                  <a
                    key={index}
                    className="flex flex-col items-center m-4 text-blue-600 hover:text-blue-700"
                    href={link.url}
                  >
                    <img src={`/images/${link.icon}`} className="h-9" />
                    <p className="max-w-[150px] mt-2">{link.description}</p>
                  </a>
                ))}
              </div>
            )}

            {/* Button section */}
            <div className="flex justify-center m-8">
              <button
                className="bg-papaya-300 hover:bg-papaya-400 text-charcoal-400 font-bold py-2 px-4 rounded mx-8 shadow-lg shadow-blue-600"
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
