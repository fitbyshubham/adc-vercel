"use client"
import EmptyPage from "@/components/EmptyPage"
import Filters from "@/components/Filters"
import Loading from "@/components/Loading"
import Text from "@/components/Text"
import { awardsFilters } from "@/utils/filters"
import { notFound, useParams } from "next/navigation"
import React, { useState } from "react"
import Ranking from "./Ranking"
import Winners from "./Winners"

const Page = ({ params }) => {
  const [pageData, setPageData] = useState(null)
  const lang = params.lang
  const id = params.id
  const pages = awardsFilters(lang)
  const pageInfoIndex = pages.map((page) => page.id).indexOf(id)

  if (pageInfoIndex === -1) return notFound()

  const pageInfo = pages[pageInfoIndex]

  // if (!pageData) return <Loading size="lg" center />

  return (
    <div className="pt-36">
      <Filters filters={pages} />
      <Text twClassName="text-[120px] max-md:text-[55px] max-sm:text-[30px] leading-[120px] leading-none px-5 py-10">
        {pageInfo.text}
      </Text>
      <Ranking type={pageInfo.id} />
      <Winners type={pageInfo.id} />
    </div>
  )
}

export default Page
