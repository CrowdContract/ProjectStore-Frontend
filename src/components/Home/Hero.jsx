// import React from "react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <div
//       className="h-auto lg:h-[89vh] w-full flex flex-col lg:flex-row px-10 py-8 lg:py-0"
//       style={{ background: "linear-gradient(to bottom, #0A0F2F, #030B22)" }}
//     >
//       {/* Left Side - Text */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center">
//         <div className="w-full">
//           <h1 className="text-yellow-100 text-4xl md:text-5xl lg:text-6xl font-semibold text-center lg:text-left">
//             Discover Your Next Great Project
//           </h1>
//           <p className="text-lg md:text-xl text-zinc-300 mt-5 text-center lg:text-left">
//             Uncover captivating stories, enriching knowledge, and endless
//             inspiration in our curated collection of Projects.
//           </p>
//           <div className="flex justify-center lg:justify-start">
//             <Link
//               to="/all-books"
//               className="my-5 lg:my-8 text-xl md:text-2xl bg-zinc-900 rounded-full py-3 px-8 flex items-center justify-center text-white font-semibold border border-yellow-100 hover:bg-zinc-800 transition-all duration-300"
//             >
//               Discover Projects
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image */}
// <div className="w-full lg:w-1/2 flex items-center justify-center relative bg-[#0A0F2F] rounded-xl p-4">
//   <div className="w-full h-[300px] md:h-[400px] lg:h-[90%] flex items-center justify-center">
//     <img
//       src="/path-to-your-image.png" // <-- replace with your actual path, like '/images/hero.png'
//       alt="hero"
//       className="max-h-full object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.05)]"
//     />
//   </div>
// </div>

//   );
// };

// export default Hero;
//i <div className="flex justify-center lg:justify-start">
//             <Link
//               to="/all-books"
//               className="my-5 lg:my-8 text-xl md:text-2xl bg-zinc-900 rounded-full py-3 px-8 flex items-center justify-center text-white font-semibold border border-yellow-100 hover:bg-zinc-800 transition-all duration-300"
//             >
//               Discover Projects
//             </Link>
//           </div>
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-[#0C1126] text-white min-h-[85vh] pt-12 pb-6 px-4 md:px-16 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Discover and Share <br /> College Projects
          </h1>
          <p className="text-lg md:text-xl text-yellow-100 mb-6">
            A centralized platform to explore, upload, and manage student projects
            across various departments.
          </p>
          <Link
            to="/all-books"
            className="bg-white text-black px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition text-xl md:text-2xl border border-yellow-100"
          >
            Get Started
          </Link>
        </div>

        {/* Right GIF */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#0C1126] p-2 rounded-xl">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTZmOW5xNTJ3M3M5YjVzOTk4YjdnYzd0cjM5ejVtbHdsYm13NGlzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/crxNUSArkbdMwE7B4r/giphy.gif"
              alt="Project Animation"
              className="w-full max-w-[400px] h-auto object-contain"
              style={{
                backgroundColor: "#0C1126", // Match hero background
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


// const Hero = () => {
//   const scrollToProjects = () => {
//     const section = document.getElementById("all-projects");
//     section?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="relative w-full h-screen flex flex-col md:flex-row">
//       {/* Left Side: Text */}
//       <div className="z-20 w-full md:w-1/2 flex flex-col justify-center items-start p-10 bg-[#0D1323] text-white">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Welcome to the Project Hub
//         </h1>
//         <p className="text-lg md:text-xl mb-8">
//           Discover, showcase, and get inspired by student innovation.
//         </p>
//         <button
//           onClick={scrollToProjects}
//           className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-100 transition-all duration-300"
//         >
//           View Projects
//         </button>
//       </div>

//       {/* Right Side: GIF */}
//       <div className="relative w-full md:w-1/2 h-64 md:h-full">
//         <img
//           src="/student-showcase.gif" // make sure this is in your public/ folder
//           alt="Student Project Showcase"
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />
//         {/* Dark Overlay to match style */}
//         <div className="absolute top-0 left-0 w-full h-full bg-[#0D1323] bg-opacity-60 z-10"></div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
