import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, Globe, ArrowRightCircle } from "lucide-react";

const FeaturedProjects = () => {
  return (
    <div className="bg-[#111827] text-white py-16 px-8 md:px-20 flex flex-col lg:flex-row gap-12">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 leading-tight mb-4">
          Discover and Contribute to Amazing Projects
        </h2>
        <p className="text-zinc-300 text-lg mb-6">
          Dive into a world of creativity and innovation. See what others are building or showcase your own masterpiece.
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Lightbulb className="text-yellow-400" />
            <span className="text-zinc-200">Get inspired by innovative ideas</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="text-yellow-400" />
            <span className="text-zinc-200">Connect with developers and students worldwide</span>
          </div>
        </div>

        <Link
          to="/all-books"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full text-lg transition-all duration-300"
        >
          Explore Projects
          <ArrowRightCircle className="w-5 h-5" />
        </Link>
      </div>

      {/* Right Content (Image or Graphic Block) */}
      <motion.div
        className="w-full lg:w-1/2 flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-[#1f2937] p-6 rounded-xl shadow-xl w-full max-w-md text-center">
          <img
            src="/image.png"
            alt="Project Collaboration"
            className="rounded-lg shadow-lg w-full mb-4"
          />
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Students & Developers</h3>
          <p className="text-zinc-400">
            Share your work. Learn from others. Build something incredible together.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProjects;
