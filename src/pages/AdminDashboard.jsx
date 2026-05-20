// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../components/admin/AdminSidebar'
import AdminNavbar from '../components/admin/AdminNavbar'
import VideoUploadForm from '../components/admin/VideoUploadForm'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div className="flex min-h-screen bg-darker">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-6">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Total Projects', value: '156', change: '+12%' },
                  { label: 'Active Clients', value: '48', change: '+8%' },
                  { label: 'Pending Reviews', value: '6', change: '-2%' },
                  { label: 'Revenue', value: '$45.2k', change: '+23%' }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-900 rounded-xl p-6">
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                    <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change} from last month
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'upload' && <VideoUploadForm />}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard