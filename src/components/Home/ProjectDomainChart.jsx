import React from "react";
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

const COLORS = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'];

const ProjectStats = () => {
  const total = domainData.reduce((acc, curr) => acc + curr.count, 0);
  const topDomain = domainData.reduce((max, curr) => curr.count > max.count ? curr : max);

  return (
    <div className="p-6 bg-[#0F172A] text-white shadow-inner mt-16">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">📊 Project Domain Overview</h2>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-4 text-center mb-8">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#1E293B] p-5 rounded-2xl shadow-md">
          <p className="text-lg text-gray-300">Total Projects</p>
          <p className="text-3xl font-bold text-blue-400">{total}</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#1E293B] p-5 rounded-2xl shadow-md">
          <p className="text-lg text-gray-300">Top Domain</p>
          <p className="text-xl font-semibold text-blue-300">{topDomain.domain}</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#1E293B] p-5 rounded-2xl shadow-md">
          <p className="text-lg text-gray-300">Last Updated</p>
          <p className="text-sm text-gray-400">2 hours ago</p>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-[#1E293B] p-4 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">Bar Chart</h3>
          <BarChart width={400} height={300} data={domainData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="domain" stroke="#E0F2FE" />
            <YAxis stroke="#E0F2FE" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#3B82F6" />
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="bg-[#1E293B] p-4 rounded-2xl shadow-md flex justify-center">
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
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;





