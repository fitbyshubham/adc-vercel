"use client"
import React, { useEffect, useState } from "react"
import Filters from "@/components/Filters"
import Info from "@/components/Info"
import Impressionen from "@/components/Impressionen"
import { learningFilters } from "@/utils/filters"
import Api from "@/api"
import { chunkArray2 } from "@/utils/arrayChunks"
import InsightCard from "@/components/SquareCard"
import Loading from "@/components/Loading"
import Card from "@/components/Card"

const Learning = ({ params }) => {
  const lang = params?.lang
  const [pageData, setPageData] = useState(null)
  const [note, setNote] = useState(null)

  const fetchLearningPages = async () => {
    const pendingPages = learningFilters(lang).map((page) =>
      Api.getLearnings({ page: page.id, lang })
    )
    Promise.all(pendingPages)
      .then((res) => {
        setPageData(res)
      })
      .catch(console.log)
  }

  const fetchNote = () => {
    Api.getLearningPageNote({ lang })
      .then((res) => {
        setNote(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchLearningPages()
    fetchNote()
  }, [])

  if (!pageData || !note) return <Loading size="lg" center />

  const page1Data = pageData[0].data?.attributes
  const page2Data = pageData[1].data?.attributes
  const page3Data = pageData[2].data?.attributes
  const page4Data = pageData[3].data?.attributes

  return (
    <div className="pt-32">
      <Filters filters={learningFilters(lang)} />
      <div className="flex flex-col p-28">
        <div className="flex max-md:flex-col gap-[250px]">
          <div className="flex flex-col justify-end pt-[28rem]">
            <Card
              title={page1Data.header.title}
              description={page1Data.header.subTitle}
              buttonText={page1Data.redirectButton?.text}
              imageUrl={page1Data.image?.path.data.attributes.url}
              titleStyle={{ fontSize: "16px" }}
              titleClassName="text-[16px]"
              className="w-[413px]"
              size="small"
            />
          </div>
          <div className="">
            <Card
              size="large"
              title={page2Data.header.title}
              description={page2Data.header.subTitle}
              buttonText={page2Data.redirectButton?.text}
              imageUrl={page2Data.image?.path.data.attributes.url}
              titleStyle={{ fontSize: "16px" }}
              descriptionStyle={{ fontSize: "15px" }}
              titleClassName="text-[16px]"
              className="w-[413px]"
            />
          </div>
        </div>
        <div className="flex xl:gap-[280px] lg:gap-[180px] md:gap-[100px] sm:gap-[50px] max-md:flex-col lg:justify-end justify-center">
          <div className="pt-[360px]">
            <Card
              title={page4Data.header.title}
              description={page4Data.header.subTitle}
              buttonText={page4Data.redirectButton?.text}
              imageUrl={page4Data.image?.path.data.attributes.url}
              titleStyle={{ fontSize: "16px" }}
              className="w-[413px]"
              size="small"
            />
          </div>
          <div className="">
            <Card
              title={page3Data.header.title}
              description={page3Data.header.subTitle}
              buttonText={page3Data.redirectButton?.text}
              imageUrl={page3Data.image?.path.data.attributes.url}
              titleStyle={{ fontSize: "16px" }}
              className="w-[413px]"
              titleClassName="text-[16px]"
              size="small"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-28 max-sm:p-5">
        <Info
          title={note.attributes.note.title}
          descriptionFontSize={25}
          description={note.attributes.note.description}
          btnTitle={note.attributes.note.button.text}
          covered={true}
        />
      </div>
      <Impressionen />
    </div>
  )
}

export default Learning
