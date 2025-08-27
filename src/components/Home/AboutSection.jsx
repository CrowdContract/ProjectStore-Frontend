import React from "react";
import { ShieldCheck, Users, Rocket, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="bg-[#0f172a] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Why ProjectVault?</h2>
        <p className="text-zinc-300 text-lg max-w-3xl mx-auto">
          ProjectVault isn't just a project repository — it's your gateway to innovation. Discover, contribute, and collaborate on student-led projects that are changing the future.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition-all">
          <ShieldCheck className="mx-auto text-yellow-400 mb-3" size={36} />
          <h3 className="text-xl font-semibold text-yellow-300">Secure & Organized</h3>
          <p className="text-zinc-400 mt-2">
            Your projects are safe in the vault — track progress, manage files, and access them anytime.
          </p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition-all">
          <Users className="mx-auto text-yellow-400 mb-3" size={36} />
          <h3 className="text-xl font-semibold text-yellow-300">Built for Collaboration</h3>
          <p className="text-zinc-400 mt-2">
            Work with classmates, mentors, or contributors. Real-time updates keep everyone in sync.
          </p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition-all">
          <Rocket className="mx-auto text-yellow-400 mb-3" size={36} />
          <h3 className="text-xl font-semibold text-yellow-300">Launch Your Ideas</h3>
          <p className="text-zinc-400 mt-2">
            From classroom concepts to real-world apps — give your ideas the platform they deserve.
          </p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition-all">
          <Lightbulb className="mx-auto text-yellow-400 mb-3" size={36} />
          <h3 className="text-xl font-semibold text-yellow-300">Inspire & Get Inspired</h3>
          <p className="text-zinc-400 mt-2">
            Explore an ever-growing library of student innovations and ignite your creative spark.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-zinc-300">
          Whether you're a student with a vision or a teacher guiding minds — ProjectVault is your space to shine.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
