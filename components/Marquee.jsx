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
  small,
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
          className={`p-10 max-md:p-5 rounded-full flex-col justify-center items-center absolute top-1/2 md:right-[200px] right-1/2 translate-x-1/2 bg-black text-white z-10 flex ${small ? "w-[100px] h-[100px] max-md:w-[80px] max-md:h-[80px]" : "w-[205px] h-[205px] max-md:w-[180px] max-md:h-[180px] gap-5"}`}
        >
          <div
            className={`uppercase text-center ${small ? "sm:text-[14px] text-[12px]" : "md:text-[22px] max-md:text-[16px] ine-clamp-2"}`}
          >
            {title}
          </div>
          {!small ? (
            <div className="text-sm max-md:text-[12px] max-sm:text-[8px]">
              {subTitle}
            </div>
          ) : null}
        </Link>
      )}
    </div>
  )
}

export default Marquee
