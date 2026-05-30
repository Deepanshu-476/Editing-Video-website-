// src/components/admin/VideoUploadForm.jsx
import React, { useEffect, useState } from 'react'
import { FaTimes, FaUpload, FaVideo } from 'react-icons/fa'
import { createProject } from '../../services/portfolioService'

const initialFormData = {
  title: '',
  category: '',
  description: '',
  videoFile: null,
  duration: '',
  client: '',
  tags: '',
  isFeatured: false
}

const getErrorMessage = (error) => {
  if (!error) return 'Failed to upload video. Please try again.'
  if (typeof error === 'string') return error
  if (error.message && typeof error.message === 'string') return error.message

  if (Array.isArray(error.errors)) {
    return error.errors
      .map((item) => {
        if (typeof item === 'string') return item
        return item.msg || item.message || item.path || item.param
      })
      .filter(Boolean)
      .join(', ') || 'Please check the form and try again.'
  }

  return 'Failed to upload video. Please check the form and try again.'
}

const VideoUploadForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const categories = ['reel', 'corporate', 'youtube', 'commercial', 'wedding', 'music', 'social']

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview)
      }
    }
  }, [preview])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (preview) {
      URL.revokeObjectURL(preview)
    }

    setFormData({
      ...formData,
      videoFile: file
    })
    setPreview(URL.createObjectURL(file))
    setMessage({ type: 'info', text: 'Video selected. Submit the form to upload it.' })
  }

  const clearSelectedFile = (resetOnlyFile = true) => {
    if (preview) {
      URL.revokeObjectURL(preview)
    }

    setPreview(null)
    if (resetOnlyFile) {
      setFormData({ ...formData, videoFile: null })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.videoFile) {
      setMessage({ type: 'error', text: 'Please select a reel/video file to upload.' })
      return
    }

    setUploading(true)
    setMessage({ type: '', text: '' })

    try {
      const projectData = new FormData()
      projectData.append('title', formData.title)
      projectData.append('category', formData.category)
      projectData.append('description', formData.description)
      projectData.append('duration', formData.duration || '')
      projectData.append('client', formData.client || '')
      projectData.append('tags', formData.tags || '')
      projectData.append('isFeatured', String(formData.isFeatured))
      projectData.append('video', formData.videoFile)

      const response = await createProject(projectData)

      if (response.success) {
        setMessage({ type: 'success', text: 'Video uploaded successfully!' })
        clearSelectedFile(false)
        setFormData(initialFormData)
      } else {
        setMessage({ type: 'error', text: getErrorMessage(response) })
      }
    } catch (error) {
      console.error('Upload error:', error)
      setMessage({
        type: 'error',
        text: getErrorMessage(error)
      })
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Upload New Reel</h2>

      {message.text && (
        <div className={`mb-6 p-4 rounded-lg ${
          message.type === 'success' ? 'bg-green-500/20 border border-green-500 text-green-600' :
          message.type === 'error' ? 'bg-red-500/20 border border-red-500 text-red-600' :
          'bg-blue-500/20 border border-blue-500 text-blue-600'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className="block text-slate-700 mb-2">Video Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter video title"
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 text-slate-950"
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-2">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 text-slate-950"
            >
              <option value="">Select category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-700 mb-2">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Describe your video..."
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 text-slate-950"
            ></textarea>
          </div>

          <div>
            <label className="block text-slate-700 mb-2">Duration (Optional)</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 0:30"
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 text-slate-950"
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-2">Client Name (Optional)</label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
              placeholder="Client name"
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 text-slate-950"
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-2">Tags (Comma separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="reel, branding, motion graphics"
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 text-slate-950"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              id="featured"
              className="w-5 h-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
            />
            <label htmlFor="featured" className="text-slate-700">
              Feature this video on homepage
            </label>
          </div>

          <div>
            <label className="block text-slate-700 mb-2">Reel / Video File *</label>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-teal-500 transition-colors bg-white">
              {preview ? (
                <div className="relative">
                  <video src={preview} className="max-h-64 mx-auto rounded" controls />
                  <button
                    type="button"
                    onClick={clearSelectedFile}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    aria-label="Remove selected video"
                  >
                    <FaTimes />
                  </button>
                </div>
              ) : (
                <div>
                  <FaVideo className="text-4xl text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-500 mb-2">Select a reel/video file from your device</p>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    required
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
            {uploading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Uploading...
              </span>
            ) : (
              'Upload Reel'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default VideoUploadForm
