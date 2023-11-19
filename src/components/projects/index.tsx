import { useState } from "react";
import { Project } from "../../types";
import projects from "../../data/projects.json";
import { ProjectModal } from "./modal";
import { BsInfoCircleFill as Info } from "react-icons/bs";
import {IconContext} from "react-icons";

export const ProjectSection: React.FC = () => {
  return (
    <section
      id="Projects"
      className="bg-papaya py-20 min-h-[calc(67vh)] min-h-[calc(67svh)] flex flex-col justify-center"
    >
      <div className="mx-auto">
        <h2 className="text-6xl font-semibold mb-4 font-mjk-bold">Projects</h2>

        {/* <!-- Projects Cards --> */}
        <div className="flex flex-row flex-wrap justify-center">
          {projects.projects.map((project: Project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = (project: Project) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="relative bg-charcoal-800 p-4 rounded-lg shadow-md m-5 h-40 w-[400px] max-w-[calc(100vw_*_0.8)]">
        <div className="flex items-center flex-col mb-5 min-h-[58px] grow">
          {/* <div className="h-14">
            <img
              className="max-w-[160px] max-h-[50px] self-center"
              src={`/${project.logo}`}
              alt={`${project.institute}  logo`}
            />
          </div> */}

          <p className="h-14 font-semibold text-blue-200">{project.title}</p>
          <p className="text-gray-200">{project.type}</p>
        </div>
        {project.description && (
          <>
            <div className="absolute -right-3 -bottom-3 h-10 w-10 bg-papaya-400 rounded-full"></div>
            <IconContext.Provider value={{ className: "text-blue-600 hover:text-blue-300 text-5xl" }}>
              <button className="absolute -right-4 -bottom-4" onClick={handleClick}>
                <Info />
              </button>
            </IconContext.Provider>
          </>
        )}
        {showModal && <ProjectModal handleClick={handleClick} project={project} />}
      </div>
    </>
  );
};
