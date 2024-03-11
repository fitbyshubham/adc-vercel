const Button = ({
  children,
  onButtonClick,
  primaryBtn,
  width,
  height,
  bgColor,
  textColor,
  style,
}) => {
  const selectedStyle = primaryBtn ? "bg-black text-[#ffffff]" : "bg-[#EAEAEA]"

  return (
    <button
      className={"uppercase  text-sm p-2 rounded-full " + selectedStyle}
      style={{
        width,
        height,
        backgroundColor: bgColor,
        color: textColor,
        ...style,
      }}
      onClick={onButtonClick}
    >
      {children}
    </button>
  )
}

export default Button