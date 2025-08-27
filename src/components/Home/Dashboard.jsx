// src/components/DashboardChart.jsx
import React from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis,
  Tooltip, Legend, CartesianGrid, PieChart, Pie, Cell
} from "recharts";

const barLineData = [
  { month: "Mar 2024", users: 200000, revenue: 150000 },
  { month: "Apr 2024", users: 220000, revenue: 160000 },
  { month: "May 2024", users: 210000, revenue: 180000 },
  { month: "Jun 2024", users: 190000, revenue: 140000 },
  { month: "Jul 2024", users: 230000, revenue: 170000 },
  { month: "Aug 2024", users: 140000, revenue: 120000 },
];

const pieData = [
  { name: "Organic Search", value: 82.1 },
  { name: "Direct", value: 8.2 },
  { name: "Referral", value: 5.1 },
  { name: "Unassigned", value: 2.0 },
  { name: "Paid Search", value: 1.5 },
  { name: "Others", value: 1.1 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#ccc'];

const DashboardChart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {/* Bar + Line Chart */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-bold mb-2">All Channels</h2>
        <p>Total Users: <strong>1.4M</strong></p>
        <p>Total Revenue: <strong>$992.46K</strong></p>
        <BarChart width={500} height={300} data={barLineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="users" fill="#0088FE" />
          <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#FF0000" />
        </BarChart>
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Top Traffic Sources</h2>
        <PieChart width={300} height={300}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default DashboardChart;


