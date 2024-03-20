"use client"
import StoryDetail from "@/components/StoryDetail"
import Text from "@/components/Text"
import { notFound } from "next/navigation"
import React, { useEffect, useState } from "react"
import Api from "@/api"
import { learningFilters } from "@/utils/filters"
import Filters from "@/components/Filters"
import Loading from "@/components/Loading"

const Page = ({ params }) => {
  const [pageData, setPageData] = useState(null)
  const lang = params.lang
  const id = params.id
  const pages = learningFilters(lang)
  const pageInfoIndex = pages.map((page) => page.id).indexOf(id)

  if (pageInfoIndex === -1) return notFound()

  const pageInfo = pages[pageInfoIndex]

  useEffect(() => {
    Api.getLearnings({ page: id, lang })
      .then((res) => {
        setPageData(res.data)
      })
      .catch((err) => console.log(err.message))
  }, [])

  if (!pageData) return <Loading size="lg" center />

  return (
    <div className="pt-24 flex flex-col gap-y-[40px]">
      <Filters filters={pages} />
      <Text twClassName={"md:text-[90px] text-lg px-[30px]"}>
        {pageInfo.text}
      </Text>
      <StoryDetail
        back={false}
        author={pageData.attributes.author}
        imageUrl={pageData.attributes?.image?.path.data.attributes.url}
        title={pageData.attributes?.header.title}
        subTitle={pageData.attributes?.header.subTitle}
        content={pageData.attributes?.content}
      />
    </div>
  )
}

export default Page
