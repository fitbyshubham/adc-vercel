const Poster = ({ title, subTitle, visible }) => {
  return (
    <div
      className="w-[205px] h-[205px] max-md:w-[180px] max-md:h-[180px] p-10 max-md:p-5 top-[23rem] right-[18rem] max-md:right-[2rem] rounded-full flex-col justify-center items-center gap-5 absolute bg-black text-white z-10"
      style={{
        display: visible ? "flex" : "none",
      }}
    >
      <div className="uppercase text-[22px] max-md:text-[16px] text-center">
        {title}
      </div>
      <div className="text-sm max-md:text-[12px] max-sm:text-[8px]">
        {subTitle}
      </div>
    </div>
  )
}

export default Poster
