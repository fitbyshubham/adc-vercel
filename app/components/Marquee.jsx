import React from 'react'

const Marquee = ({ children, textSize, scrollamount }) => {
  return (
    <marquee
      style={{ fontSize: `${textSize}px` }}
      scrollamount={String(scrollamount)}
      className={`font-semibold`}
    >
      {children}
    </marquee>
  )
}

export default Marquee
