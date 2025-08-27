import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackSection = ({ projectId }) => {
  const [comment, setComment] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/feedbacks/get-feedbacks/${projectId}`);
      setFeedbacks(res.data.data || []);
    } catch (err) {
      console.error("Error fetching feedbacks:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (projectId) fetchFeedbacks();
  }, [projectId]);

  const submitFeedback = async () => {
    if (!comment.trim()) {
      alert("Feedback cannot be empty!");
      return;
    }

    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    if (!id || !token) {
      alert("You must be logged in to submit feedback.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8000/api/v1/feedbacks/add-feedback",
        {
          projectId: projectId,
          comment: comment,
          rating: 5, // 🔥 Add a rating field (you can make it dynamic if needed)
        },
        {
          headers: {
            id: localStorage.getItem("id"),
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      
      
      
      setComment('');
      fetchFeedbacks();
      alert("Feedback submitted successfully!");
    } catch (err) {
      console.error("Error submitting feedback:", err.response?.data || err.message);
      alert(`Failed to submit feedback: ${err.response?.data?.message || "Unknown error"}`);
    }
    
  };

  return (
    <div className="mt-10 p-6 bg-zinc-800 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">Feedback</h2>

      <div className="flex flex-col gap-4">
        <textarea
          className="w-full min-h-[100px] p-3 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Write your feedback here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          className="self-start bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500 transition"
          onClick={submitFeedback}
        >
          Submit Feedback
        </button>
      </div>

      <div className="mt-10">
        {loading ? (
          <p className="text-zinc-400">Loading feedbacks...</p>
        ) : feedbacks.length === 0 ? (
          <p className="text-zinc-500">No feedback yet. Be the first to comment!</p>
        ) : (
          feedbacks.map((fb, idx) => (
            <div key={idx} className="border-b border-zinc-700 pb-4 mb-4">
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold text-white">{fb.userId?.name || "Anonymous"}</p>
                <p className="text-xs text-zinc-500">{new Date(fb.createdAt).toLocaleString()}</p>
              </div>
              <p className="text-zinc-300">{fb.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackSection;

