// src/components/admin/AdminNavbar.jsx
import React from 'react'

const AdminNavbar = () => {
  return (
    <header className="bg-white border-b border-slate-200 py-4 px-4 md:px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-semibold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-slate-500 hidden sm:inline">Welcome, Admin</span>
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminNavbar
