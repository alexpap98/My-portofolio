import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  return (
    <ul style={{ padding: 0 }}>
      {props.projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.desc}
          link={project.link}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
