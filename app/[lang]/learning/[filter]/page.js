"use client"
import StoryDetail from "@/components/StoryDetail"
import Text from "@/components/Text"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import Api from "@/api"

const Page = () => {
  const params = useParams()
  const heading = params.filter
  const [data, setData] = useState({
    attributes: {
      content: "",
      card: {
        description: "",
        featured: false,
        position: "",
        size: "",
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
    },
  })
  useEffect(() => {
    Api.getLearnings(heading)
      .then((res) => {
        console.log(res.data[0])
        // setData(res.data[0])
      })
      .catch((err) => console.log(err.message))
  }, [])
  return (
    <div className="pt-24 flex flex-col gap-y-[40px]">
      <Text twClassName={"md:text-[90px] text-[55px] px-[30px]"}>
        {heading}
      </Text>
      <StoryDetail
        back={false}
        author={"Krish"}
        content={data.attributes.card.description}
        imageUrl={data.attributes.card.image.path.data.attributes.url}
        subTitle={data.attributes.card.title}
        title={data.attributes.card.title}
      />
    </div>
  )
}

export default Page
