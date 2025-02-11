import React from 'react'

const awards = {
  2024: {
    prizes: [
      {
        id: 1,
        name: "Prix AGNÈS",
        festival: "FIFF de Namur"
      },
      {
        id: 2,
        name: "Prix du meilleur documentaire",
        festival: "Mashariki African Film Festival",
        location: "Rwanda"
      },
      {
        id: 3,
        name: "Prix du meilleur documentaire",
        festival: "Festival International du Film de Bruxelles",
        location: "Dakar"
      }
    ],
    competitions: [
      {
        id: 1,
        name: "Visions du Réel",
        location: "Suisse"
      },
      {
        id: 2,
        name: "Festival d'histoire de Pessac"
      },
      {
        id: 3,
        name: "FIFF de Namur"
      }
    ],
    selections: [
      {
        id: 1,
        name: "IDFA Amsterdam",
        category: "Best of Docs"
      },
      {
        id: 2,
        name: "Mostra de Cinema Africanos",
        location: "Brésil"
      },
      {
        id: 3,
        name: "Africa Film Festival of Köln",
        location: "Allemagne"
      },
      {
        id: 4,
        name: "Festival Etonnants voyageurs",
        location: "Saint-Malo"
      },
      {
        id: 5,
        name: "Festival Vision d'Afrique",
        location: "Bordeaux"
      }
    ]
  },
  2025: {
    competitions: [
      {
        id: 1,
        name: "60e Journées de Soleure",
        location: "Suisse"
      },
      {
        id: 2,
        name: "FESPACO",
        location: "Ouagadougou"
      },
      {
        id: 3,
        name: "Tempo Documentary Festival",
        location: "Stockholm"
      }
    ]
  }
}

export default function Awards() {
  return (
    <div className="space-y-8">
      {Object.entries(awards).map(([year, yearData]) => (
        <div key={year} className="space-y-6">
          <h3 className="text-2xl font-bold text-white">{year}</h3>
          
          {yearData.prizes && yearData.prizes.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                🏆 Prix reçus
              </h4>
              <div className="space-y-2">
                {yearData.prizes.map((prize) => (
                  <div 
                    key={prize.id}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                  >
                    <p className="text-white font-medium">{prize.name}</p>
                    <p className="text-gray-300">
                      {prize.festival}
                      {prize.location && ` (${prize.location})`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {yearData.competitions && yearData.competitions.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                🎬 En compétition officielle
              </h4>
              <div className="space-y-2">
                {yearData.competitions.map((competition) => (
                  <div 
                    key={competition.id}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                  >
                    <p className="text-white">
                      {competition.name}
                      {competition.location && ` (${competition.location})`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {yearData.selections && yearData.selections.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                ✨ Sélections
              </h4>
              <div className="space-y-2">
                {yearData.selections.map((selection) => (
                  <div 
                    key={selection.id}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                  >
                    <p className="text-white">
                      {selection.name}
                      {selection.category && ` (${selection.category})`}
                      {selection.location && ` - ${selection.location}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
