import React from "react"

const Text = ({
  children,
  capitalize,
  fontSize,
  twClassName,
  onClick,
  style,
}) => {
  const twStyle = capitalize ? twClassName : "uppercase " + twClassName

  return (
    <div className={twStyle} onClick={onClick} style={{ fontSize, ...style }}>
      {children}
    </div>
  )
}

export default Text
