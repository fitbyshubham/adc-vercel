"use client"

import Api from "@/api"
import { notFound } from "next/navigation"
import { creativeDaysFilters } from "@/utils/filters"
import React, { useEffect, useState } from "react"
import Loading from "@/components/Loading"
import Filters from "@/components/Filters"
import Text from "@/components/Text"
import StoryDetail from "@/components/StoryDetail"

const SingleProgram = ({ params }) => {
  const [pageData, setPageData] = useState(null)
  const [isNotFound, setIsNotFound] = useState(false)
  const lang = params?.lang
  const slug = params?.programId
  const pages = creativeDaysFilters(lang)
  const pageInfoIndex = pages.map((page) => page.id).indexOf("program")

  const pageInfo = pages[pageInfoIndex]

  useEffect(() => {
    Api.getProgram({ slug, lang })
      .then((res) => {
        console.log(res.data)
        if (res.data && res.data.length > 0) {
          setPageData(res.data[0])
        } else {
          setIsNotFound(true)
        }
      })
      .catch((err) => console.log(err.message))
  }, [])

  if (isNotFound) return notFound()
  if (!pageData) return <Loading size="lg" center />

  return (
    <div className="pt-24 flex flex-col gap-y-[40px]">
      <Filters filters={pages} />
      <StoryDetail
        back={true}
        imageUrl={pageData.attributes?.image?.path.data.attributes.url}
        title={pageData.attributes?.title}
        subTitle={pageData.attributes?.subTitle}
        content={pageData.attributes?.details}
      />
    </div>
  )
}

export default SingleProgram
