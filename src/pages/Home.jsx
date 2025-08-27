import React from "react";
import { useEffect } from "react";
import Hero from '../components/Home/Hero.jsx'
import RecentlyAdded from '../components/Home/RecentlyAdded.jsx'
import AboutSection from '../components/Home/AboutSection.jsx'
import FeaturesSection from '../components/Home/Features.jsx'
import Announcements from '../components/Home/Announcement.jsx'
import ProjectDashboard from "../components/Home/Dashboard.jsx";
import ProjectDomainChart from "../components/Home/ProjectDomainChart.jsx";
import AboutAndStats from "../components/Home/AboutandStats.jsx";
import Recommendations from "./Recommendations.jsx";
const Home = () => {
  useEffect(() => {
    console.log("Home component mounted");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {console.log("Rendering Hero")}
      <Hero />

      {/* <ProjectDashboard/> */}
     

       {/* {console.log("Rendering RecentlyAdded")}
      <RecentlyAdded />  */}

      {/* {console.log("Rendering AboutSection")}
      <AboutSection />
      <ProjectDomainChart/> */}
      <AboutAndStats/>


      {console.log("Rendering FeaturesSection")}
      <FeaturesSection />

      

      {console.log("Rendering Announcements")}
      <Announcements />
      <Recommendations/>
    </>
  );
};


export default Home;
