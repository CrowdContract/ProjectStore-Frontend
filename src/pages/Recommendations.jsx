import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = ({ projectId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/recommend?id=${projectId}`)
      .then(res => {
        setRecommendations(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch recommendations:', err);
      });
  }, [projectId]);

  if (recommendations.length === 0) return null; // Hide if no recommendations

  return (
    <div className="bg-[#111827] py-10 px-4 mt-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-zinc-100 mb-8">
        Recommended Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recommendations.map((item) => (
          <div
            key={item.id}
            className="bg-[#1f2937] p-6 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl text-zinc-200 font-semibold mb-4">{item.title}</h3>
            <a
              href={`/project/${item.id}`}
              className="text-blue-400 hover:underline"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
