import React, { useState, useEffect } from 'react'

export default function Trailer({ isOpen }) {
  const [isLoading, setIsLoading] = useState(true)
  const videoId = '9EJSPlWMFng'

  // Reset loading state when section is closed
  useEffect(() => {
    if (!isOpen) {
      setIsLoading(true)
    }
  }, [isOpen])

  return (
    <div className="w-full bg-black rounded-xl overflow-hidden shadow-xl">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="text-white text-lg">Chargement de la bande-annonce...</div>
          </div>
        )}
        {isOpen && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0&showinfo=0`}
            title="Bande-annonce du film didy"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
            loading="lazy"
            style={{ zIndex: isLoading ? 0 : 1 }}
          />
        )}
      </div>
    </div>
  )
}
