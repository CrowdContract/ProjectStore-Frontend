import React, { useEffect, useState } from "react";
import ProjectCard from "../components/Books/BookCard"; 
import axios from "axios";
import Loader from "./Loader";

const AllProjects = () => {
  const [Projects, setProjects] = useState(); 

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/projects/get-all-projects" 
        );
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {!Projects && <Loader />}
      {Projects && (
        <div className="h-auto px-12 py-8 bg-zinc-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Projects.map((project, i) => (
              <ProjectCard
                key={i}
                projectid={project._id} 
                image={
                  project.fileUrl?.startsWith("http")
                    ? project.fileUrl // Use the correct field for image URL, e.g., `fileUrl`
                    : `http://localhost:4000${project.fileUrl}` // Handle relative URL case
                }
                title={project.title}
                description={project.description} 
                technologies={project.technologies} 
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllProjects;
