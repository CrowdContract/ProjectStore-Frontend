import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Redirect if already logged in
  if (isLoggedIn) {
    navigate("/");
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    enrollmentNumber: "",
    avatar: "", // Profile picture URL (optional)
    bio: "", // Short bio (optional)
  });

  const [loading, setLoading] = useState(false); // Track submission state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (loading) return; // Prevent multiple submissions

    // Validation
    const { name, email, password, department, enrollmentNumber } = formData;
    if (!name || !email || !password || !department || !enrollmentNumber) {
      alert("All required fields must be filled!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    setLoading(true); // Set loading state

    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/signup", {
        ...formData,
        role: "student", // Default role
      });

      alert(response.data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        department: "",
        enrollmentNumber: "",
        avatar: "",
        bio: "",
      });

      navigate("/login"); // Redirect to login
    } catch (error) {
      console.error("Signup Error:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Signup failed!");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-xl">Sign Up</p>
        <div className="mt-4">
          <div>
            <label className="text-zinc-400">Name</label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="text-zinc-400">Email</label>
            <input
              type="email"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="xyz@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="text-zinc-400">Password</label>
            <input
              type="password"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="Enter a strong password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="text-zinc-400">Department</label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="Enter your department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="text-zinc-400">Enrollment Number</label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="Enter your enrollment number"
              name="enrollmentNumber"
              value={formData.enrollmentNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4">
            <label className="text-zinc-400">Avatar (Profile Image URL)</label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="Optional profile image URL"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="text-zinc-400">Bio</label>
            <textarea
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              rows="3"
              placeholder="Tell us about yourself"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button
              className={`w-full bg-blue-500 text-white font-semibold py-2 rounded transition-all duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
              }`}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
          <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">Or</p>
          <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
            Already have an account? &nbsp;
            <Link to="/login" className="hover:text-blue-500">
              <u>Log In</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

