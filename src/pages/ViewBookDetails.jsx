import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Loader from "./Loader";
import FeedbackSection from "../components/Feedback/FeedbackSection";

const ViewProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const role = useSelector((state) => state.auth.role);

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        console.log("Fetching project with ID:", id);
        const res = await axios.get(
          `http://localhost:8000/api/v1/projects/get-project-by-id/${id}`
        );
        if (res.data.data) {
          setProject(res.data.data);
          console.log("Fetched Project: ", res.data.data);
        } else {
          console.error("No project found for the provided ID.");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  const headers = {
    projectid: id,
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const addToFavourite = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8000/api/v1/add-favourite",
        {},
        { headers }
      );
      alert(response.data.message);
    } catch (error) {
      console.log("Error adding to favourites:", error);
    }
  };

  const deleteProject = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/projects/delete-project/${id}`,
        { headers }
      );
      alert(response.data.message);
      navigate("/all-projects");
    } catch (error) {
      console.log("Error deleting project:", error);
    }
  };

  const handleImageError = (e) => {
    e.target.src = "/default-image.jpg"; // fallback
  };

  if (loading) return <Loader />;

  if (!project)
    return (
      <p className="text-center text-white text-xl mt-10">
        Project not found.
      </p>
    );

  return (
    <div className="bg-zinc-900 min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section: Image + Action Buttons */}
        <div className="relative w-full lg:w-1/2">
          <img
            src={
              project.fileUrl?.startsWith("http")
                ? project.fileUrl
                : `http://localhost:8000${project.fileUrl}`
            }
            alt="Project"
            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            onError={handleImageError}
          />

          {/* Action Buttons (Top-Right corner) */}
          {localStorage.getItem("id") && (
            <div className="absolute top-4 right-4 flex gap-3">
              {role !== "admin" && (
                <button
                  onClick={addToFavourite}
                  className="bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-300 transition"
                >
                  <GoHeartFill size={20} />
                </button>
              )}
              {role === "admin" && (
                <>
                  <Link
                    to={`/update-project/${id}`}
                    className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
                  >
                    <FaRegEdit size={20} />
                  </Link>
                  <button
                    onClick={deleteProject}
                    className="bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition"
                  >
                    <MdDelete size={20} />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right Section: Project Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-white">{project.title}</h1>
          <p className="text-gray-400 text-lg">by {project.createdBy}</p>
          <p className="text-zinc-300">{project.description}</p>

          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <GrLanguage />
            <span>{project.category}</span>
          </div>

          <div className="mt-4">
            <p className="text-white font-semibold text-xl">
              Submission Date:{" "}
              {project.submissionDate
                ? new Date(project.submissionDate).toLocaleDateString()
                : "Not Available"}
            </p>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <FeedbackSection projectId={id} />
      </div>
    </div>
  );
};

export default ViewProjectDetails;
