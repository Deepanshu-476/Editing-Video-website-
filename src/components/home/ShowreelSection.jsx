// src/components/home/ShowreelSection.jsx
import React, { useState } from 'react'
import { FaPlay, FaVideo } from 'react-icons/fa'
import { IMAGE_URL } from '../../services/api'
import VideoModal from '../portfolio/VideoModal'

const ShowreelSection = ({ projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null)

  const resolveMediaUrl = (url) => {
    if (!url || url === '#') return null
    if (/^https?:\/\//i.test(url)) return url
    return `${IMAGE_URL}${url.startsWith('/') ? url : `/${url}`}`
  }

  const getYouTubeThumbnail = (url) => {
    if (!url) return null
    const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^&?#]+)/)
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null
  }

  const getVideoUrl = (project) => {
    return (
      project?.videoUrl ||
      project?.video ||
      project?.videoFile ||
      project?.fileUrl ||
      project?.url
    )
  }

  const getThumbnail = (project) => {
    return resolveMediaUrl(project?.thumbnail) || getYouTubeThumbnail(getVideoUrl(project))
  }

  const mainProject = projects[0]
  const reelProjects = projects.slice(0, 4)
  const mainThumbnail = getThumbnail(mainProject)
  const mainVideoUrl = resolveMediaUrl(getVideoUrl(mainProject))

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Showreel</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Recently uploaded videos from the portfolio are shown here automatically.
          </p>
        </div>

        <button
          type="button"
          onClick={() => mainProject && setSelectedProject(mainProject)}
          disabled={!mainProject}
          className="relative block max-w-5xl mx-auto w-full rounded-2xl overflow-hidden shadow-2xl group disabled:cursor-default"
        >
          <div className="aspect-video bg-gradient-to-br from-slate-900 via-teal-900 to-indigo-900 flex items-center justify-center">
            {mainThumbnail ? (
              <img
                src={mainThumbnail}
                alt={mainProject.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : mainVideoUrl ? (
              <video
                src={mainVideoUrl}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <div className="text-center">
                <FaVideo className="text-white text-5xl mx-auto mb-4 opacity-60" />
                <p className="text-white/80">
                  {mainProject ? 'Video preview not available' : 'Upload a video from admin panel'}
                </p>
              </div>
            )}
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors group-hover:bg-black/45">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm transition-transform group-hover:scale-110">
              <FaPlay className="text-white text-2xl ml-1" />
            </div>
          </div>

          {mainProject && (
            <div className="absolute left-0 right-0 bottom-0 p-5 text-left bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-xl font-semibold">{mainProject.title}</p>
              {mainProject.category && (
                <p className="text-white/75 text-sm capitalize">{mainProject.category}</p>
              )}
            </div>
          )}
        </button>

        {reelProjects.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
            {reelProjects.map((project) => {
              const thumbnail = getThumbnail(project)
              const videoUrl = resolveMediaUrl(getVideoUrl(project))

              return (
                <button
                  type="button"
                  key={project.id || project._id || project.title}
                  onClick={() => setSelectedProject(project)}
                  className="aspect-video bg-white border border-slate-200 rounded-lg overflow-hidden group cursor-pointer shadow-sm relative"
                >
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : videoUrl ? (
                    <video
                      src={videoUrl}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-600 to-indigo-700 flex items-center justify-center">
                      <FaVideo className="text-white text-xl opacity-80" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FaPlay className="text-white text-xl" />
                  </div>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {selectedProject && (
        <VideoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default ShowreelSection
