import Link from "next/link"
import FastMarquee from "react-fast-marquee"

const Marquee = ({
  children,
  textSize,
  speed,
  delay,
  style,
  title,
  subTitle,
  visible,
  url,
}) => {
  return (
    <div className="relative w-full">
      <FastMarquee
        style={{
          fontSize: `${textSize}px`,
          ...style,
        }}
        autoFill={true}
        speed={speed}
        delay={delay | 0}
        className={"font-semibold"}
      >
        {children}
      </FastMarquee>
      {visible && (
        <Link
          href={url}
          className="w-[205px] h-[205px] max-md:w-[180px] max-md:h-[180px] p-10 max-md:p-5 max-md:right-[2rem] rounded-full flex-col justify-center items-center gap-5 absolute top-1/2 right-[200px] bg-black text-white z-10 flex"
        >
          <div className="uppercase text-[22px] max-md:text-[16px] text-center">
            {title}
          </div>
          <div className="text-sm max-md:text-[12px] max-sm:text-[8px]">
            {subTitle}
          </div>
        </Link>
      )}
    </div>
  )
}

export default Marquee
