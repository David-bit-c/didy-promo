import React, { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { FiMapPin, FiClock, FiCalendar } from 'react-icons/fi'

const screenings = {
  geneve: [
    {
      id: 29,
      date: "2025-02-27",
      time: "16:25",
      cinema: "Ciné BIO Carouge - Salle Patricia Plattner",
      address: "Rue Saint-Joseph 47, 1227 Carouge",
      price: "16.50",
      status: "available",
      mapLink: "https://maps.google.com/?q=Ciné+BIO+Carouge",
      bookingLink: "https://www.advance-ticket.ch/omniticket/cinema-bio?start=&end=&halls=&shows=1020687"
    },
    {
      id: 30,
      date: "2025-03-01",
      time: "16:25",
      cinema: "Ciné BIO Carouge - Salle Patricia Plattner",
      address: "Rue Saint-Joseph 47, 1227 Carouge",
      price: "16.50",
      status: "available",
      mapLink: "https://maps.google.com/?q=Ciné+BIO+Carouge",
      bookingLink: "https://www.advance-ticket.ch/omniticket/cinema-bio?start=&end=&halls=&shows=1020687"
    },
    {
      id: 31,
      date: "2025-03-02",
      time: "18:30",
      cinema: "Ciné BIO Carouge - Salle Patricia Plattner",
      address: "Rue Saint-Joseph 47, 1227 Carouge",
      price: "16.50",
      status: "available",
      mapLink: "https://maps.google.com/?q=Ciné+BIO+Carouge",
      bookingLink: "https://www.advance-ticket.ch/omniticket/cinema-bio?start=&end=&halls=&shows=1020687"
    },
    {
      id: 32,
      date: "2025-03-03",
      time: "16:25",
      cinema: "Ciné BIO Carouge - Salle Patricia Plattner",
      address: "Rue Saint-Joseph 47, 1227 Carouge",
      price: "16.50",
      status: "available",
      mapLink: "https://maps.google.com/?q=Ciné+BIO+Carouge",
      bookingLink: "https://www.advance-ticket.ch/omniticket/cinema-bio?start=&end=&halls=&shows=1020687"
    },
    {
      id: 33,
      date: "2025-03-04",
      time: "16:25",
      cinema: "Ciné BIO Carouge - Salle Patricia Plattner",
      address: "Rue Saint-Joseph 47, 1227 Carouge",
      price: "16.50",
      status: "available",
      mapLink: "https://maps.google.com/?q=Ciné+BIO+Carouge",
      bookingLink: "https://www.advance-ticket.ch/omniticket/cinema-bio?start=&end=&halls=&shows=1020687"
    }
  ],
  vaud: [
    {
      id: 2,
      date: "2025-02-09",
      time: "19:00",
      cinema: "City Pully",
      address: "Rue de la Poste 4, 1009 Pully",
      price: "16.00",
      status: "available",
      mapLink: "https://maps.google.com/?q=CityClub+Pully",
      bookingLink: "https://cityclub.ticketack.com/screening/buy/67301264-c9d6-402f-aedf-b8d7f8cb25f4"
    },
    {
      id: 20,
      date: "2025-02-11",
      time: "18:00",
      cinema: "City Pully",
      address: "Rue de la Poste 4, 1009 Pully",
      price: "16.00",
      status: "available",
      mapLink: "https://maps.google.com/?q=CityClub+Pully",
      bookingLink: "https://cityclub.ticketack.com/screening/buy/67301264-c9d6-402f-aedf-b8d7f8cb25f4"
    },
    {
      id: 3,
      date: "2024-03-20",
      time: "",
      cinema: "La Bobine - Le Sentier",
      address: "Grand-Rue 23, 1347 Le Sentier",
      price: "15.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+La+Bobine+Le+Sentier",
      bookingLink: "https://cinebobine.ch/tarifs-infos-pratiques/"
    },
    {
      id: 4,
      date: "2025-02-15",
      time: "17:00",
      cinema: "Cinéma Royal - Sainte-Croix",
      address: "Rue Centrale 4, 1450 Sainte-Croix",
      price: "15.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Royal+Sainte+Croix",
      bookingLink: "https://www.cinemaroyal.ch/filmotheque/item/4944-didy.html"
    },
    {
      id: 6,
      date: "2025-02-11",
      time: "20:00",
      cinema: "Grain d'sel - Bex",
      address: "Route de l'Allex 7, 1880 Bex",
      price: "15.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Grain+d'sel+Bex",
      bookingLink: "https://graindesel.ch/2024/12/27/didy/"
    },
    {
      id: 21,
      date: "2025-02-17",
      time: "18:00",
      cinema: "Rex - Vevey",
      address: "Rue J.-J. Rousseau 6, 1800 Vevey",
      price: "15.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Rex+Vevey",
      bookingLink: "https://www.rexvevey.ch/"
    },
    {
      id: 22,
      date: "2025-02-18",
      time: "18:00",
      cinema: "Rex - Vevey",
      address: "Rue J.-J. Rousseau 6, 1800 Vevey",
      price: "15.00",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Rex+Vevey",
      bookingLink: "https://www.rexvevey.ch/"
    }
  ],
  fribourg: [
    {
      id: 8,
      date: "",
      time: "",
      cinema: "Rex - Fribourg",
      address: "Boulevard de Pérolles 5A, 1700 Fribourg",
      price: "",
      status: "coming",
      mapLink: "https://maps.google.com/?q=Cinema+Rex+Fribourg",
      bookingLink: "https://www.cineman.ch/fr/film/2004/Didy/seances.html#movie-detail-nav"
    }
  ],
  neuchatel: [
    {
      id: 9,
      date: "2024-03-29",
      time: "18:00",
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
  const regions = Object.keys(screenings).filter(region => region !== 'valais')
  const [selectedTab, setSelectedTab] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
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
              className={classNames(
                'rounded-xl focus:outline-none space-y-3',
                'sm:max-h-[4000px] max-h-[80vh] overflow-y-auto',
                '-webkit-overflow-scrolling-touch'
              )}
            >
              {screenings[region].map((screening) => (
                <div key={screening.id} className="bg-gray-800/40 backdrop-blur-sm p-3 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      {screening.date && (
                        <div className="flex items-center gap-2 mb-1">
                          <FiCalendar className="text-gray-400" />
                          <p className="font-bold text-lg text-white capitalize">{formatDate(screening.date)}</p>
                        </div>
                      )}
                      {screening.time && (
                        <div className="flex items-center gap-2">
                          <FiClock className="text-gray-400" />
                          <p className="text-gray-300">{screening.time}</p>
                        </div>
                      )}
                    </div>
                    <span className={`${getStatusColor(screening.status)} text-white text-sm px-3 py-1 rounded-full`}>
                      {getStatusText(screening.status)}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-3">
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
                    {screening.price && (
                      <span className="text-gray-300">Tarif: CHF {screening.price}</span>
                    )}
                    <a 
                      href={screening.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transform transition hover:scale-105"
                    >
                      🎬 Infos & séances
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
