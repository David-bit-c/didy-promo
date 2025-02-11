import React from 'react'

export default function Synopsis() {
  return (
    <div className="space-y-6">
      <div className="prose prose-invert">
        <p className="text-gray-300 leading-relaxed">
          « Didy est partout », dit Gaël Kamilindi en ouvrant son film. Pourtant le vide est immense. 
          C'est pour le combler qu'il part au Rwanda, accompagné de François-Xavier Destors, sur les 
          traces de sa mère Didy, décédée lorsqu'il avait cinq ans. Il fait dialoguer des archives 
          bouleversantes avec les souvenirs des survivant·e·s pour tracer le portrait de cette femme.
        </p>
      </div>
      
      <div className="mt-8">
        <h4 className="font-bold text-lg mb-3">🎬 Détails</h4>
        <ul className="text-gray-300 space-y-2">
          <li>Réalisation : Gaël Kamilindi & François-Xavier Destors</li>
          <li>Année : 2024</li>
          <li>Durée : 82 minutes</li>
        </ul>
      </div>
    </div>
  )
}
