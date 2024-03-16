"use client"
import Image from "next/image"
import Text from "@/components/Text"
import Button from "@/components/Button"
import Card from "@/components/Card"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Api from "@/api"
import config from "@/apiConfig"
import Loading from "@/components/Loading"
import moment from "moment"
import StoryDetail from "@/components/StoryDetail"

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

const NewsAndEventsDetail = ({ params }) => {
  const [data, setData] = useState(null)
  const id = params.filter
  const lang = params.lang

  const fetchNewsAndEvent = (id, leading) => {
    Api.getNewsAndEvent({ id, lang })
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setData(res.data[0])
        }
      })
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    fetchNewsAndEvent(id, lang)
  }, [id])

  if (!data) return <Loading size="lg" center />

  return (
    <div className="flex justify-center">
      <StoryDetail
        back={true}
        shareable={true}
        imageUrl={data?.attributes?.image?.path.data.attributes.url}
        title={data.attributes?.title}
        subTitle={data?.attributes.description}
        author={data.attributes.author}
        content={data.attributes.content}
        dateFormat="DD. MM.YYYY"
        date={data.attributes?.date}
        lang={lang}
      />
    </div>
  )
}

export default NewsAndEventsDetail
