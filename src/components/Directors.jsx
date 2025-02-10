import React from 'react'

const directors = [
  {
    id: 1,
    name: "Gaël Kamilindi",
    image: "/images/directors/gael-kamilindi.jpg",
    links: [
      {
        id: 1,
        icon: "📷",
        text: "Instagram",
        displayText: "Instagram",
        url: "https://www.instagram.com/gaelkamilindi?igsh=MWRhZXV1dHRraXJuNw=="
      },
      {
        id: 2,
        icon: "🎭",
        text: "Comédie-Française",
        displayText: "CF",
        url: "https://www.comedie-francaise.fr/fr/artiste/gael-kamilindi"
      }
    ]
  },
  {
    id: 2,
    name: "François-Xavier Destors",
    image: "/images/directors/francois-xavier-destors.jpg",
    links: [
      {
        id: 1,
        icon: "📷",
        text: "Instagram",
        displayText: "Instagram",
        url: "https://www.instagram.com/fxdestors/"
      },
      {
        id: 2,
        icon: "🎬",
        text: "Filmographie",
        displayText: "Filmographie",
        url: "https://www.film-documentaire.fr/4DACTION/w_fiche_createur/76966_0"
      }
    ]
  }
]

export default function Directors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {directors.map((director) => (
        <div 
          key={director.id}
          className="relative overflow-hidden rounded-xl group"
        >
          {/* Image */}
          <div className="aspect-[3/4] relative">
            <img 
              src={director.image}
              alt={director.name}
              className="w-full h-full object-cover"
            />
            {/* Gradient très subtil uniquement sur le bas */}
            <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>

          {/* Zone de texte en bas */}
          <div className="absolute bottom-2 left-0 right-0 px-3">
            {/* Nom */}
            <h3 className="text-sm font-medium text-white text-center mb-1.5 drop-shadow-sm">{director.name}</h3>
            
            {/* Mini-icônes des liens */}
            <div className="flex justify-center gap-2 mb-3 sm:mb-2">
              {director.links.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.text}
                  className="h-6 sm:h-5 px-4 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-sm"
                >
                  <span className="text-[11px]">{link.icon}</span>
                  <span className="text-[11px] ml-1.5 text-white font-medium whitespace-nowrap">{link.displayText}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
