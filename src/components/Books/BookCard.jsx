import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProjectCard = ({ projectid, image, title, description, technologies }) => {
  if (!projectid || !title) {
    console.log("Missing ProjectCard Props:", { image, title, description, projectid });
    return null;
  }

  const handleAddFavourite = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      alert("You must be logged in to add this project to your favourites.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/add-favourite",
        {
          userId,
          projectId: projectid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Added to favourites:", res.data.message);
      alert("Added to Favourites!");
    } catch (error) {
      console.error("Error adding to favourite:", error.response?.data || error.message);
      alert("Failed to add to Favourites!");
    }
  };

  return (
    <div className="w-full max-w-sm bg-zinc-800 text-zinc-100 rounded-lg p-4 shadow-lg relative">
      <Link to={`/view-project-details/${projectid}`} className="block">
        <div className="w-full flex items-center justify-center bg-zinc-900 rounded-lg overflow-hidden">
          <img
            src={image || "https://via.placeholder.com/300"}
            alt="Project Cover"
            className="h-48 w-full object-cover"
          />
        </div>
        <h1 className="mt-4 text-lg font-bold">{title}</h1>
        <p className="mt-1 text-zinc-400 font-medium">
          {description ? description.slice(0, 100) + "..." : "No description available"}
        </p>
        <p className="mt-2 text-yellow-400 font-semibold">
          {technologies && technologies.length > 0 ? technologies.join(", ") : "No technologies listed"}
        </p>
      </Link>

      <button
        onClick={handleAddFavourite}
        className="absolute top-2 right-2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500"
        title="Add to Favourites"
      >
        ❤️
      </button>
    </div>
  );
};

export default ProjectCard;




