// src/components/admin/VideoUploadForm.jsx
import React, { useState } from 'react'
import { FaUpload, FaVideo, FaTimes } from 'react-icons/fa'
import { createProject } from '../../services/portfolioService'

const VideoUploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    videoUrl: '',
    thumbnail: '',
    duration: '',
    client: '',
    tags: '',
    isFeatured: false
  })
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const categories = ['corporate', 'youtube', 'commercial', 'wedding', 'music', 'social']

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // For preview only - actual upload will be handled separately
      setPreview(URL.createObjectURL(file))
      setMessage({ type: 'info', text: 'File selected. You can also provide a YouTube/Vimeo URL.' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUploading(true)
    setMessage({ type: '', text: '' })
    
    try {
      // Prepare data for API
      const projectData = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        videoUrl: formData.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Default if empty
        thumbnail: formData.thumbnail || '',
        duration: formData.duration || '',
        client: formData.client || '',
        tags: formData.tags || '',
        isFeatured: formData.isFeatured
      }
      
      // Call API to create project
      const response = await createProject(projectData)
      
      if (response.success) {
        setMessage({ type: 'success', text: '✅ Video uploaded successfully!' })
        // Reset form
        setFormData({
          title: '',
          category: '',
          description: '',
          videoUrl: '',
          thumbnail: '',
          duration: '',
          client: '',
          tags: '',
          isFeatured: false
        })
        setPreview(null)
      } else {
        setMessage({ type: 'error', text: response.message || 'Failed to upload video' })
      }
    } catch (error) {
      console.error('Upload error:', error)
      setMessage({ 
        type: 'error', 
        text: error.message || 'Failed to upload video. Please try again.' 
      })
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Upload New Video</h2>
      
      {message.text && (
        <div className={`mb-6 p-4 rounded-lg ${
          message.type === 'success' ? 'bg-green-500/20 border border-green-500 text-green-500' :
          message.type === 'error' ? 'bg-red-500/20 border border-red-500 text-red-500' :
          'bg-blue-500/20 border border-blue-500 text-blue-500'
        }`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="space-y-6">
          {/* Video Title */}
          <div>
            <label className="block text-gray-300 mb-2">Video Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter video title"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-300 mb-2">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            >
              <option value="">Select category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-300 mb-2">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Describe your video..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            ></textarea>
          </div>

          {/* Video URL */}
          <div>
            <label className="block text-gray-300 mb-2">Video URL (YouTube/Vimeo)</label>
            <input
              type="url"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              placeholder="https://www.youtube.com/embed/..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />
            <p className="text-gray-500 text-sm mt-1">Paste YouTube embed URL or leave empty for default</p>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="block text-gray-300 mb-2">Thumbnail URL (Optional)</label>
            <input
              type="url"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              placeholder="https://example.com/thumbnail.jpg"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-300 mb-2">Duration (Optional)</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 2:30"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-gray-300 mb-2">Client Name (Optional)</label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              placeholder="Client name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-300 mb-2">Tags (Comma separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="corporate, branding, motion graphics"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
            />
          </div>

          {/* Featured */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              id="featured"
              className="w-5 h-5 rounded border-gray-700 text-purple-500 focus:ring-purple-500"
            />
            <label htmlFor="featured" className="text-gray-300">
              Feature this video on homepage
            </label>
          </div>

          {/* Video File Upload (Optional - for local uploads) */}
          <div>
            <label className="block text-gray-300 mb-2">Video File (Optional - for local storage)</label>
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
                  <p className="text-gray-400 mb-2">Click to select video file (optional)</p>
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading}
            className="w-full gradient-bg py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            {uploading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Uploading...
              </span>
            ) : (
              'Upload Video'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default VideoUploadForm