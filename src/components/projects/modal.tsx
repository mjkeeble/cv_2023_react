import { Interweave } from "interweave";
import { Project } from "../../types";
import { FiMonitor } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface ModalProps {    
  handleClick: () => void;
  project: Project;
}

export const ProjectModal: React.FC<ModalProps> = ({ handleClick, project }) => {
  console.log("🚀 => project:", project);
  return (
    // {/* Blur layer */}
    <div className="fixed z-[200] inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-papaya-500 bg-opacity-80 backdrop-blur-sm flex items-center justify-center">
        {/* Modal */}
        <div className=" bg-charcoal-800 backdrop-opacity-100 shadow-gray-300 rounded-lg overflow-hidden text-blue-600 shadow-xl w-[calc(100vw_*_0.8)] max-w-[700px] max-h-[calc(100vh_*_0.9)] overflow-y-auto m-4">
          <div className={`relative bg-[url('/images/${project.image}')]`}>
            <img
              className="max-h-[calc(100vh_/_4)] w-full object-cover object-top"
              src={`/images/${project.image}`}
              alt={`${project.title} screenshot`}
            />
          </div>

          {/* Header section */}
          <div className="m-4 mb-5">
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl">{project.title}</h1>
          </div>
          <div className="mx-4 mb-5">
            <h2 className="sm:text-2xl font-semibold">{project.type}</h2>
          </div>

          {/* Description */}
          <div className="m-4 md:m-8">
            <Interweave className="text-md md:text-md whitespace-normal" content={project.description} />
          </div>

          {/* Links */}
          <div className="flex justify-center">
            {project.siteUrl && (
              <div className="flex flex-col items-center m-4">
                <a className="text-3xl text-blue-600 hover:text-blue-700" href={project.siteUrl}>
                  <FiMonitor />
                </a>
                <p className="font-semibold">Visit the demo</p>
              </div>
            )}

            {project.codeUrl && (
              <div className="flex flex-col items-center m-4">
                <a className="text-3xl text-blue-600 hover:text-blue-700" href={project.codeUrl}>
                  <FaGithub />
                </a>
                <p className="font-semibold">Visit the code</p>
              </div>
            )}
          </div>

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
      </div>
    </div>
  );
};
