import { Zoom } from "react-awesome-reveal";
import { Pastime } from "../../types";
import { SimpleSlider } from "./slick";

interface ModalProps {
  handleClick: () => void;
  pastime: Pastime;
}

interface ListProps {
  description: string[];
}

export const PastimeModal: React.FC<ModalProps> = ({ handleClick, pastime }) => {
  return (
    // {/* Blur layer */}
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center bg-papaya-500 bg-opacity-80 backdrop-blur-sm">
        {/* Modal */}
        <Zoom duration={500}>
          <div className=" m-4 max-h-[calc(100vh_*_0.9)] w-[calc(100vw_*_0.8)] max-w-[700px] overflow-hidden overflow-y-auto rounded-lg bg-charcoal-800 text-blue-600 shadow-xl shadow-gray-300 backdrop-opacity-100">
            <div className={"h-96 max-h-[calc(100vh_/_4)] bg-charcoal-800"}>
              <SimpleSlider images={pastime.images} />
            </div>

            {/* Header section */}
            <div className="m-4 mb-5">
              <h1 className="text-2xl font-bold sm:text-4xl lg:text-5xl">{pastime.title}</h1>
            </div>
            <div className="mx-4 mb-5">
              {pastime.dates && <h2 className="text-left font-semibold sm:text-2xl">{pastime.dates}</h2>}
            </div>

            {/* Description */}
            <div className="m-4 md:m-8">{pastime.description && <List description={pastime.description} />}</div>

            {/* Links */}
            {pastime.links && (
              <div className="flex justify-center">
                {pastime.links.map((link, index) => (
                  <a
                    key={index}
                    className="m-4 flex flex-col items-center text-blue-600 hover:text-blue-700"
                    href={link.url}
                  >
                    <img
                      src={`/images/${link.icon}`}
                      className="h-9"
                    />
                    <p className="mt-2 max-w-[150px]">{link.description}</p>
                  </a>
                ))}
              </div>
            )}

            {/* Button section */}
            <div className="m-8 flex justify-center">
              <button
                className="mx-8 rounded bg-papaya-300 px-4 py-2 font-bold text-charcoal-400 shadow-lg shadow-blue-600 hover:bg-papaya-400"
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
            <li
              className="mx-2 list-disc px-4 py-2"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
