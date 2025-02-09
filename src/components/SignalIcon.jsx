import React from 'react'

const SignalIcon = ({ size = 20, className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
  >
    <g fill="#3A76F0">
      <circle cx="12" cy="12" r="12"/>
      <path 
        d="M12 6.5c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5c.935 0 1.815-.234 2.587-.645l2.063 2.063c.195.195.512.195.707 0s.195-.512 0-.707l-2.063-2.063c.411-.772.645-1.652.645-2.587 0-3.038-2.462-5.5-5.5-5.5z"
        fill="white"
      />
    </g>
  </svg>
)

export default SignalIcon
