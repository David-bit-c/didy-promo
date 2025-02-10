import React from 'react'

const instagramAccounts = [
  {
    id: 1,
    type: "Le Film",
    username: "didy_le_film",
    url: "https://www.instagram.com/didy_le_film?igsh=Y2hoc2E0eW5yMzh4"
  },
  {
    id: 2,
    type: "Gaël Kamilindi",
    username: "gaelkamilindi",
    url: "https://www.instagram.com/gaelkamilindi?igsh=MWRhZXV1dHRraXJuNw=="
  }
]

export default function InstagramSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {instagramAccounts.map((account) => (
        <div 
          key={account.id}
          className="bg-black/20 rounded-xl p-4 border border-white/10"
        >
          <div className="flex flex-col items-center text-center space-y-3">
            <h3 className="text-lg font-bold text-white">{account.type}</h3>
            <p className="text-gray-300">@{account.username}</p>
            <a
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Suivre {account.type === "Le Film" ? "le film" : "Gaël"}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
