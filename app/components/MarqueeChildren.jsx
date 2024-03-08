import Image from "next/image"
import config from "../apiConfig"

const MarqueeChildren = ({ content, images, visible = true }) => {
  if (!visible) return null

  if (content)
    return (
      <div className="flex gap-4 items-center pr-28">
        <div>{content.toUpperCase()}</div>
        <div className="flex gap-3">
          {images?.data?.map((image) => (
            <Image
              key={image.id}
              src={config.IMAGE_API_URL.concat(image?.attributes.url)}
              alt="Img"
              width={50}
              height={50}
              className={"w-28 h-28"}
            />
          ))}
        </div>
      </div>
    )
}

export default MarqueeChildren
