// src/components/admin/AdminSidebar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTachometerAlt, FaUpload, FaList, FaUsers, FaSignOutAlt, FaPlay } from 'react-icons/fa'

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { id: 'upload', label: 'Upload Video', icon: <FaUpload /> },
    { id: 'projects', label: 'Projects', icon: <FaList /> },
    { id: 'clients', label: 'Clients', icon: <FaUsers /> },
  ]

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    window.location.href = '/login'
  }

  return (
    <aside className="w-full md:w-64 bg-white md:min-h-screen md:fixed md:left-0 md:top-0 border-b md:border-b-0 md:border-r border-slate-200">
      <div className="p-4 md:p-6">
        <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-8">
          <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
            <FaPlay className="text-white text-xl" />
          </div>
          <span className="text-xl font-bold gradient-text">EditFlow</span>
        </Link>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'gradient-bg text-white'
                  : 'text-slate-600 hover:text-teal-700 hover:bg-teal-50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}

          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-8"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </aside>
  )
}

export default AdminSidebar
