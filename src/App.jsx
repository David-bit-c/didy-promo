import React, { useState, useRef } from 'react'
import Screenings from './components/Screenings'
import Directors from './components/Directors'
import Trailer from './components/Trailer'
import Press from './components/Press'
import Feedback from './components/Feedback'
import ShareMenu from './components/ShareMenu'
import InstagramSection from './components/InstagramSection'

function App() {
  const [activeSection, setActiveSection] = useState(null)
  const sectionRefs = {
    trailer: useRef(null),
    screenings: useRef(null),
    directors: useRef(null),
    details: useRef(null),
    press: useRef(null),
    instagram: useRef(null),
    feedback: useRef(null)
  }

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      const yOffset = -20
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
          onClick={() => toggleSection('trailer')}
          className={`w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'trailer' ? 'ring-2 ring-white/50' : ''}`}
        >
          🎥 Bande-annonce
        </button>

        <button 
          onClick={() => toggleSection('screenings')}
          className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'screenings' ? 'ring-2 ring-white/50' : ''}`}
        >
          🎬 Voir les séances
        </button>

        <button 
          onClick={() => toggleSection('directors')}
          className={`w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'directors' ? 'ring-2 ring-white/50' : ''}`}
        >
          👥 Les réalisateurs
        </button>

        <button 
          onClick={() => toggleSection('feedback')}
          className={`w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'feedback' ? 'ring-2 ring-white/50' : ''}`}
        >
          💬 Retours du public
        </button>

        <button 
          onClick={() => toggleSection('instagram')}
          className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'instagram' ? 'ring-2 ring-white/50' : ''}`}
        >
          📸 Instagram
        </button>

        <button 
          onClick={() => toggleSection('press')}
          className={`w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'press' ? 'ring-2 ring-white/50' : ''}`}
        >
          📰 Presse & Médias
        </button>

        <button 
          onClick={() => toggleSection('details')}
          className={`w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3.5 px-6 rounded-full font-medium text-base shadow-lg hover:opacity-90 hover:scale-[0.98] transition-all ${activeSection === 'details' ? 'ring-2 ring-white/50' : ''}`}
        >
          i️ Plus d'informations
        </button>

        {/* Content Sections */}
        <div className="space-y-4">
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

          {/* Directors Section */}
          <div
            ref={sectionRefs.directors}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'directors' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 mt-4 text-white animate-fade-in border border-white/10 shadow-xl">
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

          {/* Press Section */}
          <div
            ref={sectionRefs.press}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'press' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 mt-4 text-white animate-fade-in border border-white/10 shadow-xl">
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

          {/* Feedback Section */}
          <div
            ref={sectionRefs.feedback}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'feedback' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
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

          {/* Details Section */}
          <div
            ref={sectionRefs.details}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === 'details' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 mt-4 text-white animate-fade-in border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Synopsis</h2>
                <button 
                  onClick={() => setActiveSection(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-300 mb-6">
                « Didy est partout », dit Gaël Kamilindi en ouvrant son film. Pourtant le vide est immense. 
                C'est pour le combler qu'il part au Rwanda, accompagné de François-Xavier Destors, sur les 
                traces de sa mère Didy, décédée lorsqu'il avait cinq ans. Il fait dialoguer des archives 
                bouleversantes avec les souvenirs des survivant·e·s pour tracer le portrait de cette femme.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2">🎬 Détails</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Réalisation : Gaël Kamilindi & François-Xavier Destors</li>
                    <li>Année : 2024</li>
                    <li>Durée : 82 minutes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2">🏆 Festivals & Prix</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>Prix Agnès Varda 2024 - L'AGNÈS</li>
                    <li>Sélection Officielle - Visions du Réel 2024</li>
                    <li>Sélection Officielle - IDFA 2024</li>
                  </ul>
                </div>
              </div>
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
