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
  titleClassName,
  name,
  nameStyle,
  imageClassName,
  buttonStyle,
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
      : "w-[200px] h-[200px] " + imageClassName

  const twClassName = covered
    ? `${titleClassName ? titleClassName : "text-md "} uppercase line-clamp-4`
    : large
      ? `${titleClassName ? titleClassName : "text-lg"} uppercase`
      : `${titleClassName ? titleClassName : "text-xm"} uppercase`

  const concatImageUrl = imageUrl ? config.IMAGE_API_URL + imageUrl : imageUrl
  return (
    <div
      style={{ width, ...componentStyle }}
      className={"flex flex-col gap-5 min-h-[26rem] " + coverCardAddedStyles}
      columnspan={columnSpan}
    >
      <div className="flex justify-between">
        {heading ? (
          <div className="text-xxs uppercase" style={headingStyle}>
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
          <div className="text-xs uppercase" style={nameStyle}>
            {name}
          </div>
        ) : null}
        {title ? (
          <div className={twClassName} style={titleStyle}>
            {title}
          </div>
        ) : null}
        {description ? (
          <div
            className={large ? "text-md" : "text-xs"}
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
            style={buttonStyle}
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
