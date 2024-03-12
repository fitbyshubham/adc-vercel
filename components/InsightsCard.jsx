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
      className={`${size === "small" ? "md:w-[411px]" : size === "medium" ? "md:w-[500px]" : "w-full md:max-w-[720px] flex-1"}`}
    >
      <div
        className={` h-full w-full flex flex-col gap-y-4 justify-between ${position === "center" ? "md:justify-center" : position === "bottom" ? "md:justify-end" : "md:justify-start"}`}
      >
        <div className="flex flex-col gap-y-4">
          <div
            className={`relative aspect-square w-[217px] ${size === "small" ? "md:w-[207px]" : size === "medium" ? "md:w-[250px]" : "md:w-[412px]"}`}
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
        </div>
        <Button width={120}>
          <p className="text-xs">{buttonText}</p>
        </Button>
      </div>
    </div>
  )
}

export default CustomCard
