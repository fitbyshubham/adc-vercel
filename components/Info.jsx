"use client"
import React from "react"
import Button from "./Button"

const Description = ({ data }) => {
  if (Array.isArray(data)) {
    return (
      <div className="flex flex-col gap-5">
        {data.map((item, idx) => (
          <div className="text-[24px]" key={idx}>
            {item}
          </div>
        ))}
      </div>
    )
  }

  return <div className="text-[24px]">{data}</div>
}

const Info = ({
  title,
  description,
  primaryBtn,
  btnWidth,
  btnTitle,
  btnBgColor,
  componentStyle,
}) => {
  return (
    <div
      className="bg-[#EAEAEA] flex flex-col gap-10 w-[52rem] max-md:w-[40rem] max-sm:w-full p-8 rounded-xl"
      style={componentStyle}
    >
      {title ? <div className="leading-3">{title.toUpperCase()}</div> : null}
      <Description data={description} />
      <div>
        <Button
          bgColor={btnBgColor || "#FFFFFF"}
          width={btnWidth}
          primaryBtn={primaryBtn}
        >
          {btnTitle || "Weitere Informationen"}
        </Button>
      </div>
    </div>
  )
}

export default Info
