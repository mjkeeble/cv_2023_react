import { Zoom } from "react-awesome-reveal";
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
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center bg-papaya-500 bg-opacity-80 backdrop-blur-sm">
        {/* Modal */}
        <Zoom duration={500}>
          <div className=" m-4 max-h-[calc(100vh_*_0.9)] w-[calc(100vw_*_0.8)] max-w-[700px] overflow-hidden overflow-y-auto rounded-lg bg-charcoal-800 text-blue-600 shadow-xl shadow-gray-300 backdrop-opacity-100">
            <div className={`relative bg-[url('/images/${project.image}')]`}>
              <img
                className="max-h-[calc(100vh_/_4)] w-full object-cover object-top"
                src={`/images/${project.image}`}
                alt={`${project.title} screenshot`}
              />
            </div>

            {/* Header section */}
            <div className="m-4 mb-5">
              <h1 className="text-2xl font-bold sm:text-4xl lg:text-5xl">{project.title}</h1>
            </div>
            <div className="mx-4 mb-5">
              <h2 className="font-semibold sm:text-2xl">{project.type}</h2>
            </div>

            {/* Description */}
            <div className="m-4 md:m-8">
              <Interweave
                className="text-md md:text-md whitespace-normal"
                content={project.description}
              />
            </div>

            {/* Links */}
            <div className="flex justify-center">
              {project.siteUrl && (
                <div className="m-4 flex flex-col items-center">
                  <a
                    className="text-4xl text-blue-600 hover:text-blue-700"
                    href={project.siteUrl}
                  >
                    <FiMonitor />
                  </a>
                  <p className="font-semibold">Visit the demo</p>
                </div>
              )}

              {project.codeUrl && (
                <div className="m-4 flex flex-col items-center">
                  <a
                    className="text-4xl text-blue-600 hover:text-blue-700"
                    href={project.codeUrl}
                  >
                    <FaGithub />
                  </a>
                  <p className="font-semibold">Visit the code</p>
                </div>
              )}
            </div>

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
