import React from 'react'

const Text = ({ children, smallCase, twClassName, onClick, style }) => {
  const twStyle = smallCase ? twClassName : 'uppercase ' + twClassName

  return (
    <div className={twStyle} onClick={onClick} style={style}>
      {children}
    </div>
  )
}

export default Text
