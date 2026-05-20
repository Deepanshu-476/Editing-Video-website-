// src/components/admin/VideoUploadForm.jsx
import React, { useState } from 'react'
import { FaUpload, FaVideo, FaTimes } from 'react-icons/fa'

const VideoUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    videoFile: null
  })
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false)

  const categories = ['corporate', 'youtube', 'commercial', 'wedding', 'music', 'social']

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({ ...formData, videoFile: file })
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUploading(true)
    
    // Simulate upload
    setTimeout(() => {
      setUploading(false)
      alert('Video uploaded successfully!')
      setFormData({ title: '', category: '', description: '', videoFile: null })
      setPreview(null)
    }, 2000)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Upload New Video</h2>
      
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Video Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            >
              <option value="">Select category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="4"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Video File</label>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
              {preview ? (
                <div className="relative">
                  <video src={preview} className="max-h-48 mx-auto rounded" controls />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null)
                      setFormData({ ...formData, videoFile: null })
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                  >
                    <FaTimes />
                  </button>
                </div>
              ) : (
                <div>
                  <FaVideo className="text-4xl text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 mb-2">Click or drag video to upload</p>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="video-upload"
                  />
                  <label
                    htmlFor="video-upload"
                    className="inline-flex items-center gap-2 px-4 py-2 gradient-bg rounded-lg cursor-pointer hover:shadow-lg transition-all"
                  >
                    <FaUpload />
                    Select Video
                  </label>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full gradient-bg py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            {uploading ? 'Uploading...' : 'Upload Video'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default VideoUploadForm