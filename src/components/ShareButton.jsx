import React from 'react'

const ShareButton = ({ children, className = '', ...props }) => {
  const { networkName, ...rest } = props
  return (
    <div
      role="button"
      tabIndex={0}
      className={`flex items-center w-full px-3 py-2 text-sm text-white rounded-lg hover:bg-white/10 cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}

export default ShareButton
