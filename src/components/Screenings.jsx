import React from 'react'
import { Tab } from '@headlessui/react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { FiMapPin, FiClock, FiCalendar } from 'react-icons/fi'

const screenings = {
  geneve: [
    {
      id: 1,
      date: "2024-02-05",
      time: "20:00",
      cinema: "Ciné BIO Carouge",
      address: "Rue Saint-Joseph 47, 1227 Carouge",
      price: "17.00",
      status: "available",
      mapLink: "https://maps.google.com/?q=Ciné+BIO+Carouge",
      bookingLink: "https://www.advance-ticket.ch/omniticket/cinema-bio?start=&end=&halls=&shows=1020687"
    }
  ],
  vaud: [
    {
      id: 2,
      date: "2024-03-15",
      time: "19:00",
      cinema: "City Pully",
      address: "Rue de la Poste 4, 1009 Pully",
      price: "16.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=CityClub+Pully",
      bookingLink: "https://cityclub.ticketack.com/screening/buy/67301264-c9d6-402f-aedf-b8d7f8cb25f4"
    },
    {
      id: 3,
      date: "2024-03-20",
      time: "20:00",
      cinema: "La Bobine - Le Sentier",
      address: "Grand-Rue 23, 1347 Le Sentier",
      price: "15.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+La+Bobine+Le+Sentier",
      bookingLink: "https://cinebobine.ch/tarifs-infos-pratiques/"
    },
    {
      id: 4,
      date: "2024-03-22",
      time: "20:00",
      cinema: "Cinéma Royal - Sainte-Croix",
      address: "Rue Centrale 4, 1450 Sainte-Croix",
      price: "15.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Royal+Sainte+Croix",
      bookingLink: "https://www.cinemaroyal.ch/filmotheque/item/4944-didy.html"
    },
    {
      id: 5,
      date: "2024-03-25",
      time: "19:30",
      cinema: "Rex - Aubonne",
      address: "Place du Marché 9, 1170 Aubonne",
      price: "15.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Rex+Aubonne",
      bookingLink: "https://www.rexaubonne.ch/"
    },
    {
      id: 6,
      date: "2024-03-27",
      time: "20:00",
      cinema: "Grain d'sel - Bex",
      address: "Route de l'Allex 7, 1880 Bex",
      price: "15.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Grain+d'sel+Bex",
      bookingLink: "https://graindesel.ch/2024/12/27/didy/"
    }
  ],
  valais: [
    {
      id: 7,
      date: "2024-04-10",
      time: "20:30",
      cinema: "Cinéma Casino - Martigny",
      address: "Avenue de la Gare 17, 1920 Martigny",
      price: "15.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Casino+Martigny",
      bookingLink: "https://cinerive.com/fr/martigny-casino"
    }
  ],
  fribourg: [
    {
      id: 8,
      date: "2024-04-12",
      time: "19:30",
      cinema: "Rex - Fribourg",
      address: "Boulevard de Pérolles 5A, 1700 Fribourg",
      price: "16.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Rex+Fribourg",
      bookingLink: "https://www.cineman.ch/fr/film/2004/Didy/seances.html#movie-detail-nav"
    }
  ],
  neuchatel: [
    {
      id: 9,
      date: "2024-03-28",
      time: "20:00",
      cinema: "Rex - Neuchâtel",
      address: "Faubourg de l'Hôpital 16, 2000 Neuchâtel",
      price: "16.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Rex+Neuchatel",
      bookingLink: "https://www.cineman.ch/fr/seances/cinema/rex-neuchatel/362/?_multilang=1&setlang=fr"
    },
    {
      id: 10,
      date: "2024-03-29",
      time: "20:00",
      cinema: "ABC - La Chaux-de-Fonds",
      address: "Rue du Coq 11, 2300 La Chaux-de-Fonds",
      price: "16.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+ABC+La+Chaux+de+Fonds",
      bookingLink: "https://www.abc-culture.ch/pratique/billetterie/"
    }
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Screenings() {
  const regions = Object.keys(screenings)

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'bg-green-600'
      case 'coming':
        return 'bg-blue-600'
      case 'full':
        return 'bg-red-600'
      default:
        return 'bg-gray-600'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'available':
        return 'Disponible'
      case 'coming':
        return 'Prochainement'
      case 'full':
        return 'Complet'
      default:
        return 'Passé'
    }
  }

  const formatDate = (dateStr) => {
    return `dès le ${format(new Date(dateStr), "EEEE d MMMM", { locale: fr })}`
  }

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex flex-wrap gap-2 mb-6">
          {regions.map((region) => (
            <Tab
              key={region}
              className={({ selected }) =>
                classNames(
                  'px-6 py-2.5 text-sm font-bold leading-5 tracking-wide rounded-full transition-all',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-800/40 text-gray-300 hover:bg-gray-700/40 hover:text-white'
                )
              }
            >
              {region.charAt(0).toUpperCase() + region.slice(1)}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {regions.map((region) => (
            <Tab.Panel
              key={region}
              className="rounded-xl focus:outline-none space-y-4"
            >
              {screenings[region].map((screening) => (
                <div key={screening.id} className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <FiCalendar className="text-gray-400" />
                        <p className="font-bold text-lg text-white capitalize">{formatDate(screening.date)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock className="text-gray-400" />
                        <p className="text-gray-300">{screening.time}</p>
                      </div>
                    </div>
                    <span className={`${getStatusColor(screening.status)} text-white text-sm px-3 py-1 rounded-full`}>
                      {getStatusText(screening.status)}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-lg text-white">{screening.cinema}</p>
                    <a 
                      href={screening.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FiMapPin />
                      {screening.address}
                    </a>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Tarif: CHF {screening.price}</span>
                    <a 
                      href={screening.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transform transition hover:scale-105"
                    >
                      🎟️ Réserver
                    </a>
                  </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
