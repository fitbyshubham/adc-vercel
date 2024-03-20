"use client"
import React from "react"
import Button from "./Button"
import MarkdownText from "./MarkdownText"

const Description = ({ data }) => {
  if (Array.isArray(data)) {
    return (
      <div className="flex flex-col gap-5">
        {data.map((item, idx) => (
          <p className="text-sm" key={idx}>
            {item}
          </p>
        ))}
      </div>
    )
  }

  return <div className="text-sm">{data}</div>
}

const Info = ({
  title,
  description,
  primaryBtn,
  btnWidth,
  btnTitle,
  btnBgColor,
  descriptionFontSize,
  componentStyle,
}) => {
  return (
    <div
      className="bg-[#EAEAEA] pr-4 flex justify-center p-5"
      style={componentStyle}
    >
      <div className="xl:w-[52rem] md:w-[40rem] w-[20rem] flex flex-col gap-[50px]">
        {title ? <div className="leading-3">{title.toUpperCase()}</div> : null}
        <MarkdownText fontSize={descriptionFontSize}>
          {description}
        </MarkdownText>
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
