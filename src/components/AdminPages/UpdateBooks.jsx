import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    fileUrl: "",
    title: "",
    contributors: "",
    category: "",
    description: "",
    technologies: "",
    githubLink: "",
  });

  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/projects/get-project-by-id/${id}`
        );
        const project = res.data?.data;

        setData({
          fileUrl: project.fileUrl || "",
          title: project.title || "",
          contributors: project.createdBy || "",
          category: project.category || "",
          description: project.description || "",
          technologies: project.technologies?.join(", ") || "",
          githubLink: project.githubLink || "",
        });
      } catch (error) {
        alert(error.response?.data?.message || "Failed to load project.");
      }
    };

    fetchProject();
  }, [id]);

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        !data.fileUrl ||
        !data.title ||
        !data.contributors ||
        !data.category ||
        !data.description ||
        !data.technologies ||
        !data.githubLink
      ) {
        alert("All fields are required");
        return;
      }

      const payload = {
        fileUrl: data.fileUrl,
        title: data.title,
        description: data.description,
        githubLink: data.githubLink,
        technologies: data.technologies.split(",").map((tech) => tech.trim()),
        category: data.category,
      };

      const res = await axios.put(
        `http://localhost:8000/api/v1/projects/update-project/67be117c5228c1be3825bce0`,
        payload,
        { headers }
      );

      alert(res.data.message);
      navigate(`/project-details/67be117c5228c1be3825bce0`);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update project.");
    }
  };

  return (
    <div className="h-[100%] p-0 md:p-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
        Update Project
      </h1>
      <div className="p-4 bg-zinc-800 rounded">
        <div>
          <label className="text-zinc-400">File URL</label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Project file URL"
            name="fileUrl"
            value={data.fileUrl}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label className="text-zinc-400">Title</label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Project title"
            name="title"
            value={data.title}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label className="text-zinc-400">Contributors</label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="Contributors"
            name="contributors"
            value={data.contributors}
            onChange={change}
          />
        </div>

        <div className="mt-4 flex gap-4">
          <div className="w-3/6">
            <label className="text-zinc-400">Category</label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="Project category"
              name="category"
              value={data.category}
              onChange={change}
            />
          </div>
          <div className="w-3/6">
            <label className="text-zinc-400">Technologies (comma-separated)</label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="E.g., React, Node.js"
              name="technologies"
              value={data.technologies}
              onChange={change}
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-zinc-400">GitHub Link</label>
          <input
            type="text"
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            placeholder="GitHub repository link"
            name="githubLink"
            value={data.githubLink}
            onChange={change}
          />
        </div>

        <div className="mt-4">
          <label className="text-zinc-400">Description</label>
          <textarea
            className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
            rows="5"
            placeholder="Brief description of the project"
            name="description"
            value={data.description}
            onChange={change}
          />
        </div>

        <button
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-all duration-300"
          onClick={submit}
        >
          Update Project
        </button>
      </div>
    </div>
  );
};

export default UpdateProject;
