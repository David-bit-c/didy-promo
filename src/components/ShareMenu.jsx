import React, { useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import QRCode from 'react-qr-code'
import {
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  WhatsappIcon,
  TelegramIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share'
import SignalIcon from './SignalIcon'

const MenuItem = ({ children, onClick, className = '' }) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    className={`flex items-center w-full px-3 py-2 text-sm text-white rounded-lg hover:bg-white/10 cursor-pointer ${className}`}
  >
    {children}
  </div>
)

const ShareMenuItem = ({ children, onClick, className = '' }) => (
  <Menu.Item>
    {({ active }) => (
      <MenuItem onClick={onClick} className={active ? 'bg-white/10' : ''}>
        {children}
      </MenuItem>
    )}
  </Menu.Item>
)

export default function ShareMenu() {
  const [showQR, setShowQR] = useState(false)
  const [showCopySuccess, setShowCopySuccess] = useState(false)
  const shareUrl = window.location.href
  const title = "DIDY - Un film de Gaël Kamilindi & François-Xavier Destors"

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setShowCopySuccess(true)
      setTimeout(() => setShowCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleSignalShare = () => {
    const encodedText = encodeURIComponent(`${title}\n${shareUrl}`)
    window.location.href = `sgnl://send?text=${encodedText}`
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-sm transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
        </Menu.Button>

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute right-0 bottom-full mb-2 w-56 origin-bottom-right bg-black/80 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-gray-700">
            {/* QR Code et Copier */}
            <div className="p-2 space-y-1">
              <ShareMenuItem onClick={() => setShowQR(true)}>
                <span className="mr-2">📱</span>
                QR Code
              </ShareMenuItem>
              <ShareMenuItem onClick={handleCopyLink}>
                <span className="mr-2">📋</span>
                {showCopySuccess ? 'Copié !' : 'Copier le lien'}
              </ShareMenuItem>
            </div>

            {/* Messageries */}
            <div className="border-t border-gray-700 p-2 space-y-1">
              <WhatsappShareButton url={shareUrl} title={title}>
                <MenuItem>
                  <WhatsappIcon size={20} round className="mr-2" />
                  WhatsApp
                </MenuItem>
              </WhatsappShareButton>
              <ShareMenuItem onClick={handleSignalShare}>
                <SignalIcon className="mr-2" />
                Signal
              </ShareMenuItem>
              <TelegramShareButton url={shareUrl} title={title}>
                <MenuItem>
                  <TelegramIcon size={20} round className="mr-2" />
                  Telegram
                </MenuItem>
              </TelegramShareButton>
            </div>

            {/* Réseaux sociaux */}
            <div className="border-t border-gray-700 p-2 space-y-1">
              <TwitterShareButton url={shareUrl} title={title}>
                <MenuItem>
                  <TwitterIcon size={20} round className="mr-2" />
                  X (Twitter)
                </MenuItem>
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={title}>
                <MenuItem>
                  <LinkedinIcon size={20} round className="mr-2" />
                  LinkedIn
                </MenuItem>
              </LinkedinShareButton>
              <FacebookShareButton url={shareUrl} quote={title}>
                <MenuItem>
                  <FacebookIcon size={20} round className="mr-2" />
                  Facebook
                </MenuItem>
              </FacebookShareButton>
            </div>

            {/* Email */}
            <div className="border-t border-gray-700 p-2">
              <EmailShareButton url={shareUrl} subject={title}>
                <MenuItem>
                  <EmailIcon size={20} round className="mr-2" />
                  Email
                </MenuItem>
              </EmailShareButton>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Modal QR Code */}
      {showQR && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Scanner pour partager</h3>
              <button
                onClick={() => setShowQR(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <QRCode
                value={shareUrl}
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
