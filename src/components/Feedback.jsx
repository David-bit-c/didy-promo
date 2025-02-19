import React, { useState, useEffect, useRef } from 'react'

export default function Feedback({ isOpen }) {
  const [isLoading, setIsLoading] = useState(true)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const videoRef = useRef(null)
  const videoId = '1055034244'

  useEffect(() => {
    if (!isOpen) {
      setIsLoading(true)
      setShouldLoadVideo(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [isOpen])

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <p className="text-gray-300 text-sm italic">
          Réactions du public lors de la première du film au Festival Visions du Réel, le 14 avril 2024
        </p>
      </div>

      <div className="w-full bg-black rounded-xl overflow-hidden shadow-xl">
        <div 
          ref={videoRef}
          className="relative w-full" 
          style={{ paddingBottom: '56.25%' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-white text-lg">Chargement de la vidéo...</div>
            </div>
          )}
          {shouldLoadVideo && (
            <iframe
              src={`https://player.vimeo.com/video/${videoId}?autoplay=0&title=0&byline=0&portrait=0&dnt=1&quality=auto`}
              title="Retours du public sur le film didy"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
              loading="lazy"
              style={{ zIndex: 2 }}
            />
          )}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-black/20 rounded-xl">
          <p className="text-gray-300 italic">
            "Un film qui nous touche profondément et nous fait réfléchir sur nos propres racines..."
          </p>
        </div>
        <div className="p-4 bg-black/20 rounded-xl">
          <p className="text-gray-300 italic">
            "Une histoire personnelle qui résonne universellement..."
          </p>
        </div>
      </div>
    </div>
  )
}
