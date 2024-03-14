const Button = ({
  children,
  onButtonClick,
  primaryBtn,
  width,
  height,
  bgColor,
  textColor,
  className,
  style,
}) => {
  const selectedStyle = primaryBtn
    ? "bg-black text-[#ffffff] " + className
    : "bg-[#EAEAEA] " + className

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
