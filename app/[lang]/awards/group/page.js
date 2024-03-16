"use client"
import Filters from "@/components/Filters"
import { notFound, useSearchParams } from "next/navigation"
import { awardsFilters } from "@/utils/filters"
import Ranking from "../[id]/Ranking"
import Winners from "../[id]/Winners"

const Category = ({ params }) => {
  const lang = params?.lang
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
  //   const pageExist = awardsFilters.map((page) => page.id).includes(type)

  //   if (!pageExist) {
  //     return notFound()
  //   }

  return (
    <div className="pt-36">
      <Filters filters={awardsFilters(lang)} activeFilter={type} />
      <Winners type={type} />
      <Ranking type={type} />
    </div>
  )
}

export default Category
