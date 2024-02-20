import React from 'react'

const Text = ({
  children,
  smallCase,
  fontSize,
  twClassName,
  onClick,
  style,
}) => {
  const twStyle = smallCase ? twClassName : 'uppercase ' + twClassName

  return (
    <div className={twStyle} onClick={onClick} style={{ fontSize, ...style }}>
      {children}
    </div>
  )
}

export default Text
