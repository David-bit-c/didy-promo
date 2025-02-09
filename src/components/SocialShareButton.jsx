import React from 'react'

const SocialShareButton = ({ ShareButton, icon: Icon, text, ...props }) => (
  <div className="w-full">
    <ShareButton {...props}>
      <div className="flex items-center w-full px-3 py-2 text-sm text-white rounded-lg hover:bg-white/10 cursor-pointer">
        {Icon && <Icon size={20} round className="mr-2" />}
        {text}
      </div>
    </ShareButton>
  </div>
)

export default SocialShareButton
