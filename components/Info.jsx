"use client"
import React from "react"
import Button from "./Button"

const Description = ({ data }) => {
  if (Array.isArray(data)) {
    return (
      <div className="flex flex-col gap-5">
        {data.map((item, idx) => (
          <p className="text-[24px]" key={idx}>
            {item}
          </p>
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
      className="bg-[#EAEAEA] p-5 w-full flex justify-center"
      style={componentStyle}
    >
      <div className="w-[52rem] flex flex-col gap-10">
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
    </div>
  )
}

export default Info
