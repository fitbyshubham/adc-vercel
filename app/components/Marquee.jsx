import FastMarquee from 'react-fast-marquee'

const Marquee = ({ children, textSize, speed, delay }) => {
  return (
    <FastMarquee
      style={{ fontSize: `${textSize}px` }}
      speed={speed}
      delay={delay || 1}
      className={'font-semibold'}
    >
      {children}
    </FastMarquee>
  )
}

export default Marquee
