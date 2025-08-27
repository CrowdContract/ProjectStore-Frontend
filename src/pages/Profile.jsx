import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Profile/Sidebar";
import Loader from "./Loader";
import MobileBar from "../components/Profile/MobileBar";

const Profile = () => {
  const [ProfileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("id");  
    const token = localStorage.getItem("token");

    if (!isLoggedIn || !userId || !token) {
      console.warn("User not logged in. Redirecting...");
      navigate("/");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/users/user/67be9e024ae7ce183d3033df`, {
          headers: { authorization: `Bearer ${token}` },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isLoggedIn, navigate]);

  if (loading) return <Loader />;

  return (
    <div className="h-auto bg-zinc-900 px-2 md:px-8 py-8 flex flex-col lg:flex-row gap-4">
      {ProfileData ? (
        <>
          <div className="h-auto lg:h-[80vh] w-full lg:w-1/6 bg-zinc-800 rounded-lg">
            <Sidebar ProfileData={ProfileData} />
          </div>
          <MobileBar />
          <div className="h-[100%] w-full lg:w-5/6 rounded-lg">
            <Outlet />
          </div>
        </>
      ) : (
        <p className="text-white text-center">Profile data not found.</p>
      )}
    </div>
  );
};

export default Profile;
