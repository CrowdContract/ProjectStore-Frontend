import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../Books/BookCard"; // Ensure BookCard correctly handles project data

const RecentlyAdded = () => {
  const [projects, setProjects] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/projects/get-recent-projects");
        console.log("Recently added data:", response.data); 

        // Check if API response has expected structure
        if (response.data && Array.isArray(response.data.data)) {
          setProjects(response.data.data);
        } else {
          console.error("Unexpected response structure:", response.data);
          setProjects([]); // Ensure empty state is handled
        }
      } catch (error) {
        console.error("Error fetching recently added projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-zinc-900 px-12 py-8">
      <h1 className="text-yellow-100 text-3xl">Recently Added Projects</h1>

      {loading ? (
        <p className="text-zinc-400 mt-4">Loading...</p>
      ) : projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {projects.map((item, i) => (
            <BookCard
              key={item._id || i} // Ensure unique key
              bookid={item._id}
              image={
                item.fileUrl
                  ? item.fileUrl.startsWith("http")
                    ? item.fileUrl
                    : `http://localhost:9000${item.fileUrl}`
                  : "https://via.placeholder.com/150" // Default image
              }
              title={item.title || "Untitled Project"}
              description={item.description || "No description available"}
              technologies={item.technologies?.length ? item.technologies.join(", ") : "N/A"}
            />
          ))}
        </div>
      ) : (
        <div className="text-white bg-gray-800 p-4 rounded-lg mt-4">
          <p>No recent projects found. Upload a project to get started!</p>
        </div>
      )}
    </div>
  );
};

export default RecentlyAdded;


