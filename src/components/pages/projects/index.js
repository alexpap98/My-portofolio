import React, { useState, useEffect } from "react";
import ProjectList from "./ProjectList/ProjectList";
import sanityClient from "../../../client";
import { Rings } from "react-loader-spinner";
import { Loading } from "./ProjectsElements";

function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectData, setProject] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"]{
      title,
      desc,
      link
    }`
      )
      .then((data) => {
        const projects = [];
        for (const key in data) {
          const project = {
            id: key,
            ...data[key],
          };

          projects.push(project);
        }
        setIsLoading(false);
        setProject(projects);
      })
      .catch(console.error);
  }, []);
  if (isLoading) {
    return (
      <Loading>
        <Rings color="#4b0459" height={200} width={200} arialLabel="loading" />
      </Loading>
    );
  }

  return <ProjectList projects={projectData} />;
}

export default Projects;
