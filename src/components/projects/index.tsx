import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { IconContext } from "react-icons";
import { BsInfoCircleFill as Info } from "react-icons/bs";
import projects from "../../data/projects.json";
import { Project } from "../../types";
import { ProjectModal } from "./modal";

interface CardProps {
  project: Project;
  handleClick: (project: Project | null) => void;
}

export const ProjectSection: React.FC = () => {
  const [modalContent, setModalContent] = useState<Project | null>(null);
  const handleClick = (project: Project | null) => {
    setModalContent(project);
  };
  return (
    <section
      id="Projects"
      className="flex min-h-[calc(67svh)] flex-col justify-center bg-papaya py-20"
    >
      <div className="mx-auto">
        <h2 className="mb-4 font-mjk-bold text-6xl font-semibold">Projects</h2>

        {/* <!-- Projects Cards --> */}
        <div className="flex flex-row flex-wrap justify-center">
          <Fade
            cascade
            direction={"up"}
            duration={700}
          >
            {projects.projects.map((project: Project, index) => (
              <ProjectCard
                project={project}
                handleClick={handleClick}
                key={index}
              />
            ))}
          </Fade>
        </div>
      </div>
      {modalContent && (
        <ProjectModal
          handleClick={() => {
            handleClick(null);
          }}
          project={modalContent}
        />
      )}
    </section>
  );
};

const ProjectCard: React.FC<CardProps> = ({ project, handleClick }) => {
  return (
    <>
      <div className="relative m-5 h-40 w-[400px] max-w-[calc(100vw_*_0.8)] rounded-lg bg-charcoal-800 p-4 shadow-md">
        <div className="mb-5 flex min-h-[58px] grow flex-col items-center">
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
        {(project.siteUrl || project.codeUrl) && (
          <>
            <div className="absolute -bottom-3 -right-3 h-10 w-10 rounded-full bg-papaya-400"></div>
            <IconContext.Provider value={{ className: "text-blue-600 hover:text-blue-300 text-5xl" }}>
              <button
                className="absolute -bottom-4 -right-4"
                onClick={() => handleClick(project)}
              >
                <Info />
              </button>
            </IconContext.Provider>
          </>
        )}
      </div>
    </>
  );
};
