import React, { useState, useRef, useEffect } from 'react'
import Screenings from './components/Screenings'
import Directors from './components/Directors'
import Trailer from './components/Trailer'
import Press from './components/Press'
import Feedback from './components/Feedback'
import ShareMenu from './components/ShareMenu'
import InstagramSection from './components/InstagramSection'
import Awards from './components/Awards'
import ScreeningsSheet from './components/ScreeningsSheet'
import Synopsis from './components/Synopsis'

function App() {
  const [activeSection, setActiveSection] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRefs = {
    synopsis: useRef(null),
    trailer: useRef(null),
    screenings: useRef(null),
    directors: useRef(null),
    details: useRef(null),
    press: useRef(null),
    instagram: useRef(null),
    feedback: useRef(null)
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      const yOffset = isMobile ? -50 : -100
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
      setTimeout(() => scrollToSection(sectionRefs[section]), 100)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-4 py-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern [background-size:20px_20px] opacity-30 pointer-events-none"></div>
      
      {/* Poster/Header Section */}
      <div className="max-w-[500px] mx-auto mb-8">
        <div className="aspect-[1/1.4] w-full mb-4 rounded-lg overflow-hidden shadow-2xl">
          <img 
            src="/images/poster.jpeg" 
            alt="Affiche du film didy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[500px] mx-auto space-y-4">
        {/* Action Buttons */}
        <button 
          onClick={() => toggleSection('synopsis')}
          className={`w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'synopsis' ? 'ring-2 ring-white/50' : ''}`}
        >
          📖 Synopsis
        </button>

        <button 
          onClick={() => toggleSection('trailer')}
          className={`w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'trailer' ? 'ring-2 ring-white/50' : ''}`}
        >
          🎥 Bande-annonce
        </button>

        <button 
          onClick={() => toggleSection('screenings')}
          className={`w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'screenings' ? 'ring-2 ring-white/50' : ''}`}
        >
          🎬 Voir les séances
        </button>

        <button 
          onClick={() => toggleSection('directors')}
          className={`w-full bg-gradient-to-r from-violet-500 to-violet-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'directors' ? 'ring-2 ring-white/50' : ''}`}
        >
          👥 Les réalisateurs
        </button>

        <button 
          onClick={() => toggleSection('feedback')}
          className={`w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'feedback' ? 'ring-2 ring-white/50' : ''}`}
        >
          💬 Retours du public
        </button>

        <button 
          onClick={() => toggleSection('press')}
          className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'press' ? 'ring-2 ring-white/50' : ''}`}
        >
          📰 Presse & Médias
        </button>

        <button 
          onClick={() => toggleSection('instagram')}
          className={`w-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'instagram' ? 'ring-2 ring-white/50' : ''}`}
        >
          📸 Instagram
        </button>

        <button 
          onClick={() => toggleSection('details')}
          className={`w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'details' ? 'ring-2 ring-white/50' : ''}`}
        >
          🏆 Festivals & Prix
        </button>

        {/* Content Sections */}
        <div className="space-y-4">
          {/* Synopsis Section */}
          <div
            ref={sectionRefs.synopsis}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'synopsis' ? 'sm:max-h-[600px] max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 mt-2 text-white animate-fade-in border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Synopsis</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <Synopsis />
            </div>
          </div>

          {/* Trailer Section */}
          <div
            ref={sectionRefs.trailer}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'trailer' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 mt-4 text-white animate-fade-in border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Bande-annonce</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <Trailer isOpen={activeSection === 'trailer'} />
            </div>
          </div>

          {/* Screenings Section */}
          {/* Screenings Section - Desktop */}
          {!isMobile && (
            <div
              ref={sectionRefs.screenings}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeSection === 'screenings' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 mt-4 text-white animate-fade-in border border-white/10 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Séances par région</h2>
                  <button 
                    onClick={() => setActiveSection(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <Screenings />
              </div>
            </div>
          )}

          {/* Screenings Sheet - Mobile */}
          <ScreeningsSheet 
            isOpen={isMobile && activeSection === 'screenings'} 
            onClose={() => setActiveSection(null)}
          />

          {/* Directors Section */}
          <div
            ref={sectionRefs.directors}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'directors' ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 mt-2 text-white animate-fade-in border border-white/10 shadow-xl overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Les réalisateurs</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <Directors />
            </div>
          </div>

          {/* Feedback Section */}
          <div
            ref={sectionRefs.feedback}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'feedback' ? 'sm:max-h-[1000px] max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 mt-4 text-white animate-fade-in border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Retours du public</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <Feedback isOpen={activeSection === 'feedback'} />
            </div>
          </div>

          {/* Press Section */}
          <div
            ref={sectionRefs.press}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'press' ? 'sm:max-h-[4000px] max-h-[200vh] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl sm:p-6 p-3 mt-4 text-white animate-fade-in border border-white/10 shadow-xl overflow-y-auto -webkit-overflow-scrolling-touch">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Presse & Médias</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <Press />
            </div>
          </div>

          {/* Instagram Section */}
          <div
            ref={sectionRefs.instagram}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'instagram' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 mt-4 text-white animate-fade-in border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Instagram</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <InstagramSection />
            </div>
          </div>

          {/* Details Section */}
          <div
            ref={sectionRefs.details}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'details' ? 'sm:max-h-[2000px] max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 mt-4 text-white animate-fade-in border border-white/10 shadow-xl overflow-y-auto h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Festivals & Prix</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <Awards />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center py-6 text-gray-400 text-sm">
          <p>© 2024 didy</p>
        </div>
      </div>
      <ShareMenu />
    </div>
  )
}

export default App
