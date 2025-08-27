import React from "react";
import { ShieldCheck, Users, Rocket, Lightbulb } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell
} from "recharts";
import { motion } from "framer-motion";

const domainData = [
  { domain: "Web Development", count: 14 },
  { domain: "AI/ML", count: 9 },
  { domain: "Data Science", count: 6 },
  { domain: "IoT", count: 4 },
  { domain: "Blockchain", count: 3 },
];

const PIE_COLORS = ['#FEF9C3', '#FDE68A', '#FCD34D', '#FBBF24', '#CA8A04'];
const BAR_COLORS = ['#FEF9C3', '#FDE68A', '#FCD34D', '#FBBF24', '#CA8A04'];

const AboutAndStats = () => {
  const total = domainData.reduce((acc, curr) => acc + curr.count, 0);
  const topDomain = domainData.reduce((max, curr) => curr.count > max.count ? curr : max);

  return (
    <div className="bg-[#0f172a] text-white">
      {/* About Section */}
      <div className="pt-16 pb-6 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-100 mb-4">Why ProjectVault?</h2>
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto">
            ProjectVault isn't just a project repository — it's your gateway to innovation. Discover, contribute, and collaborate on student-led projects that are changing the future.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <ShieldCheck className="mx-auto text-yellow-100 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-yellow-100">Secure & Organized</h3>
            <p className="text-zinc-400 mt-2">
              Your projects are safe in the vault — track progress, manage files, and access them anytime.
            </p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <Users className="mx-auto text-yellow-100 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-yellow-100">Built for Collaboration</h3>
            <p className="text-zinc-400 mt-2">
              Work with classmates, mentors, or contributors. Real-time updates keep everyone in sync.
            </p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <Rocket className="mx-auto text-yellow-100 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-yellow-100">Launch Your Ideas</h3>
            <p className="text-zinc-400 mt-2">
              From classroom concepts to real-world apps — give your ideas the platform they deserve.
            </p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <Lightbulb className="mx-auto text-yellow-100 mb-3" size={36} />
            <h3 className="text-xl font-semibold text-yellow-100">Inspire & Get Inspired</h3>
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

      {/* Project Stats Section */}
      <div className="p-6 pt-4 md:px-20 bg-[#0f172a] text-white shadow-inner">
        <h2 className="text-3xl font-bold text-yellow-100 mb-6 text-center">📊 Project Domain Overview</h2>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-4 text-center mb-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#1e293b] p-5 rounded-xl shadow">
            <p className="text-lg text-gray-300">Total Projects</p>
            <p className="text-3xl font-bold text-yellow-100">{total}</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#1e293b] p-5 rounded-xl shadow">
            <p className="text-lg text-gray-300">Top Domain</p>
            <p className="text-xl font-semibold text-yellow-100">{topDomain.domain}</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#1e293b] p-5 rounded-xl shadow">
            <p className="text-lg text-gray-300">Last Updated</p>
            <p className="text-sm text-gray-400">2 hours ago</p>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-[#1e293b] p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-yellow-100 mb-2">Bar Chart</h3>
            <BarChart width={400} height={300} data={domainData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="domain" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count">
                {domainData.map((entry, index) => (
                  <Cell key={index} fill={BAR_COLORS[index % BAR_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </div>

          {/* Pie Chart */}
          <div className="bg-[#1e293b] p-4 rounded-xl shadow flex justify-center">
            <PieChart width={300} height={300}>
              <Pie
                data={domainData}
                dataKey="count"
                nameKey="domain"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {domainData.map((entry, index) => (
                  <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndStats;

