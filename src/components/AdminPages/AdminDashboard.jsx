import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 shadow rounded-2xl">
          <h2 className="text-lg font-semibold">Total Projects</h2>
          <p className="text-3xl font-bold mt-2">128</p>
        </div>
        <div className="bg-white p-4 shadow rounded-2xl">
          <h2 className="text-lg font-semibold">Pending Approvals</h2>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
        <div className="bg-white p-4 shadow rounded-2xl">
          <h2 className="text-lg font-semibold">Registered Students</h2>
          <p className="text-3xl font-bold mt-2">52</p>
        </div>
        <div className="bg-white p-4 shadow rounded-2xl">
          <h2 className="text-lg font-semibold">Departments</h2>
          <p className="text-3xl font-bold mt-2">6</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


