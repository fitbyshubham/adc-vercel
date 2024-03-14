"use client"
import Image from "next/image"
import no_image_found from "@/assets/images/bildschirmfoto.png"
import Button from "./Button"
import config from "@/apiConfig"

const Card = ({
  title,
  heading,
  description,
  imageUrl,
  buttonText,
  onButtonClick,
  size,
  width,
  covered,
  componentStyle,
  btnHeight,
  primaryBtn,
  btnBgColor,
  btnTextColor,
  imageCard = true,
  btnWidth,
  headingStyle,
  titleStyle,
  descriptionStyle,
  columnSpan,
  className,
  imageStyle,
  name,
  nameStyle,
  imageClassName,
}) => {
  const large = size === "large" && !covered
  const coverCardAddedStyles = covered
    ? "bg-[#EAEAEA] w-[295px] min-w-[295px] rounded-xl p-8 justify-between " +
      className
    : className

  const imgClassName = covered
    ? "w-[105px] " + imageClassName
    : large
      ? "w-[400px] " + imageClassName
      : "w-[200px] " + imageClassName

  const concatImageUrl = imageUrl ? config.IMAGE_API_URL + imageUrl : imageUrl
  return (
    <div
      style={{ width, ...componentStyle }}
      className={"flex flex-col gap-5 min-h-[26rem] " + coverCardAddedStyles}
      columnspan={columnSpan}
    >
      <div className="flex justify-between">
        {heading ? (
          <div className="text-[12px]" style={headingStyle}>
            {heading}
          </div>
        ) : null}
        {imageCard ? (
          <Image
            src={concatImageUrl || no_image_found}
            alt="Card img"
            width={100}
            height={100}
            className={imgClassName}
            style={imageStyle}
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-5">
        {name ? (
          <div className="text-[15px] uppercase" style={nameStyle}>
            {name}
          </div>
        ) : null}
        {title ? (
          <div
            className={
              covered ? "text-[26px]" : large ? "text-[55px]" : "text-[30px]"
            }
            style={titleStyle}
          >
            {title}
          </div>
        ) : null}
        {description ? (
          <div
            className={large ? "text-[26px]" : "text-[15px]"}
            style={descriptionStyle}
          >
            {description}
          </div>
        ) : null}
        {buttonText ? (
          <Button
            onButtonClick={onButtonClick}
            width={btnWidth || 130}
            height={btnHeight}
            primaryBtn={primaryBtn}
            bgColor={btnBgColor}
            textColor={btnTextColor}
          >
            {buttonText}
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default Card
