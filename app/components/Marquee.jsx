import FastMarquee from "react-fast-marquee"

const Marquee = ({ children, textSize, speed, delay, style }) => {
  return (
    <FastMarquee
      style={{
        fontSize: `${textSize}px`,
        ...style,
      }}
      autoFill={true}
      speed={speed}
      delay={delay || 1}
      className={"font-semibold"}
    >
      {children}
    </FastMarquee>
  )
}

export default Marquee
