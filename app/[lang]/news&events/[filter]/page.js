"use client"
import Image from "next/image"
import Text from "@/components/Text"
import Button from "@/components/Button"
import Card from "@/components/Card"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Api from "@/api"
import config from "@/apiConfig"
import Link from "next/link"

const Detail = ({ content, img, cardTitle, cardDescription, size }) => {
  return (
    <div className="flex  max-sm:flex-col justify-between max-md:gap-5 max-sm:gap-10">
      <div
        className={
          "text-[24px] max-md:text-[22px] w-[750px] max-md:w-[460px] max-sm:w-[335px]"
        }
      >
        {content}
      </div>
      <Card
        imageCard={true}
        imageUrl={img}
        title={cardTitle}
        titleStyle={{ fontSize: "16px" }}
        descriptionStyle={{ fontSize: "15px" }}
        className={"w-[262px] max-md:w-[200px]"}
        size={size}
        description={cardDescription}
      />
    </div>
  )
}

const StoryDetail = () => {
  const imgInfo1 =
    "Charakteristisch für das Hôtel des Horlogers ist die avantgardistische, zickzackförmige Architektur, die der Topografie des Vallée de Joux folgt."

  const [data, setData] = useState({
    id: "",
    attributes: {
      content: "",
      date: "",
      description: "",
      title: "",
      image: {
        visible: true,
        path: {
          data: {
            attributes: {
              url: "",
            },
          },
        },
      },
    },
  })

  const router = useRouter()

  const params = useParams()
  const id = params.filter

  const fetchNewsAndEvent = (id) => {
    Api.getNewsAndEvent(id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    fetchNewsAndEvent(id)
  }, [id])

  return (
    <div className="p-[20px] pt-36 lg:p-[150px] flex flex-col lg:flex-row gap-8">
      <div className="flex flex-col sm:gap-[50px] gap-[40px] order-2 lg:order-1">
        <h1 className="lg:text-[120px] text-[55px] font-bold leading-none break-words">
          {data.attributes.title}
        </h1>
        <div className="flex gap-[50px]">
          <p>{data.attributes.authorName}</p>
          <p>{data.attributes.date}</p>
        </div>
        <p className="sm:text-[34px] text-[22px] font-semibold">
          {data.attributes.description}
        </p>
        <p>{data.attributes.content}</p>
        <p>{data.attributes.content}</p>
        <p>{data.attributes.content}</p>
      </div>
      <div className="lg:w-[360px] lg:h-[360px] sm:w-[387px] sm:h-[387px] w-[217px] h-[217px] aspect-square relative flex-shrink-0 order-1 lg:order-2">
        <Image
          src={
            config.IMAGE_API_URL +
            data.attributes.image.path.data.attributes.url
          }
          alt="image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default StoryDetail
