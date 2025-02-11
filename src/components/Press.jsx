import React from 'react'

export default function Press() {
  return (
    <div className="space-y-8">
      {/* Section Articles de Presse */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-white/90">📰 Articles de Presse</h3>
        <div className="space-y-4">
          <a 
            href="https://www.letemps.ch/culture/sur-les-traces-de-sa-mere-au-rwanda-l-acteur-genevois-gael-kamilindi-offre-un-film-superbement-aimant"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all border border-white/10"
          >
            <div className="flex items-start justify-between">
              <h4 className="font-bold text-white mb-2">Le Temps</h4>
              <span className="text-sm text-gray-400">Février 2025</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              "Sur les traces de sa mère au Rwanda, l'acteur genevois Gaël Kamilindi offre un film superbement aimant"
            </p>
            <div className="flex items-center text-sm text-blue-400 hover:text-blue-300">
              Lire l'article <span className="ml-1">→</span>
            </div>
          </a>

          <a 
            href="https://www.tdg.ch/gael-kamilindi-un-orphelin-devenu-cineaste-285873372446"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all border border-white/10"
          >
            <div className="flex items-start justify-between">
              <h4 className="font-bold text-white mb-2">Tribune de Genève</h4>
              <span className="text-sm text-gray-400">Février 2025</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              "Gaël Kamilindi, un orphelin devenu cinéaste"
            </p>
            <div className="flex items-center text-sm text-blue-400 hover:text-blue-300">
              Lire l'article <span className="ml-1">→</span>
            </div>
          </a>

          <a 
            href="https://j-mag.ch/sortie-en-suisse-romande-de-didy-rencontre-avec-gael-kamilindi-sur-les-traces-de-sa-mere-et-de-son-pays-dorigine/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all border border-white/10"
          >
            <div className="flex items-start justify-between">
              <h4 className="font-bold text-white mb-2">J:MAG</h4>
              <span className="text-sm text-gray-400">Février 2025</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              "Sortie en Suisse romande de DIDY : Rencontre avec Gaël Kamilindi sur les traces de sa mère et de son pays d'origine"
            </p>
            <div className="flex items-center text-sm text-blue-400 hover:text-blue-300">
              Lire l'article <span className="ml-1">→</span>
            </div>
          </a>

          <a 
            href="https://www.rts.ch/info/culture/cinema/2025/article/gael-kamilindi-retrace-l-histoire-de-sa-mere-dans-le-documentaire-didy-28782386.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all border border-white/10"
          >
            <div className="flex items-start justify-between">
              <h4 className="font-bold text-white mb-2">RTS Info</h4>
              <span className="text-sm text-gray-400">Février 2025</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              "Gaël Kamilindi retrace l'histoire de sa mère dans le documentaire 'Didy'"
            </p>
            <div className="flex items-center text-sm text-blue-400 hover:text-blue-300">
              Lire l'article <span className="ml-1">→</span>
            </div>
          </a>
        </div>
      </div>

      {/* Section Interviews & Émissions Radio */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-white/90">🎙️ Interviews & Émissions Radio</h3>
        <div className="space-y-4">
          <div className="p-4 bg-black/20 rounded-xl border border-white/10">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-bold text-white">RTS - L'invité</h4>
              <span className="text-sm text-gray-400">4 février 2025</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Interview podcast avec Gaël Kamilindi
            </p>
            <a 
              href="https://www.rts.ch/audio-podcast/2025/audio/gael-kamili-l-invite-gael-kamilindi-didy-28779337.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-blue-400 hover:text-blue-300"
            >
              Écouter le podcast <span className="ml-1">→</span>
            </a>
          </div>

          <div className="p-4 bg-black/20 rounded-xl border border-white/10">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-bold text-white">J:MAG - Rencontre</h4>
              <span className="text-sm text-gray-400">4 février 2025</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Interview audio avec Gaël Kamilindi
            </p>
            <audio 
              controls 
              className="w-full mt-2 mb-3"
              src="https://j-mag.ch/wp-content/uploads/2025/02/Gael-kamilindi-Didy.mp3"
            >
              Votre navigateur ne supporte pas l'élément audio.
            </audio>
          </div>

          <div className="p-4 sm:p-6 bg-black/20 rounded-xl border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
              <h4 className="font-bold text-white mb-1 sm:mb-0">RTS - Pili Pili</h4>
              <span className="text-sm text-gray-400">9 février 2025</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Émission sur les cultures africaines : musique, cinéma, et plus encore, à travers les chroniques Matières Premières et Africalement Vôtre.
            </p>
            <a 
              href="https://www.rts.ch/audio-podcast/2025/audio/pili-pili-28785358.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-blue-400 hover:text-blue-300"
            >
              Écouter l'émission <span className="ml-1">→</span>
            </a>
          </div>

          <div className="p-4 xs:p-5 sm:p-6 bg-black/20 rounded-xl border border-white/10">
            <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between mb-3">
              <h4 className="font-bold text-white mb-2 xs:mb-0 break-words max-w-[200px] xs:max-w-none">Radio Vostok - La Quotidienne</h4>
              <span className="text-sm text-gray-400 whitespace-nowrap ml-0 xs:ml-4 shrink-0">Février 2025</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              "Didy : à travers la mémoire de Gaël Kamilindi" - Interview
            </p>
            <a 
              href="https://www.mixcloud.com/RadioVostok/didy-%C3%A0-travers-la-m%C3%A9moire-de-ga%C3%ABl-kamilindi-interview-la-quotidienne/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-blue-400 hover:text-blue-300 pb-1"
            >
              Écouter l'interview <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
