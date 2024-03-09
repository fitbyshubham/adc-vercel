"use client"
import Image from "next/image"
import no_image_found from "@/assets/images/bildschirmfoto.png"
import Button from "./Button"
import config from "@/apiConfig"

const CustomCard = ({
  title,
  description,
  buttonText,
  size,
  className,
  imageUrl,
  position,
}) => {
  const concatImageUrl = imageUrl ? config.IMAGE_API_URL + imageUrl : imageUrl
  return (
    <div
      className={`${size === "small" ? "w-[411px]" : size === "medium" ? "w-[500px]" : "w-full max-w-[720px] flex-1"}`}
    >
      <div
        className={` h-full w-full flex flex-col gap-y-4 ${position === "center" ? "justify-center" : position === "bottom" ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`relative aspect-square ${size === "small" ? "w-[207px]" : size === "medium" ? "w-[250px]" : "w-[412px]"}`}
        >
          <Image
            src={concatImageUrl}
            alt="image"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-4xl">{title}</p>
        <p>{description}</p>
        <Button width={120}>
          <p className="text-xs">{buttonText}</p>
        </Button>
      </div>
    </div>
  )
}

export default CustomCard
