// src/components/admin/AdminNavbar.jsx
import React from 'react'

const AdminNavbar = () => {
  return (
    <div className="bg-gray-900 border-b border-gray-800 py-4 px-6 ml-64">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">Welcome, Admin</span>
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar