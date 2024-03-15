"use client"
import Filters from "@/components/Filters"
import Text from "@/components/Text"
import { useSearchParams } from "next/navigation"
import { insightPageFilters } from "../../../../utils/filters"
import { notFound } from "next/navigation"
import ArticlesLayout from "@/components/ArticlesLayout"
import Api from "@/api"
import { useEffect, useState } from "react"
import Loading from "@/components/Loading"

const mapPage = {
  all: {
    header: "all",
  },
  conscious: {
    header: "conscious",
    subHeader:
      "Gemeinsam die Welt verändern. Kreative ESG-Benchmarks aus den Bereichen Umwelt, Soziales und Unternehmensführung.",
  },
  impulse: {
    header: "impulse",
    subHeader:
      "Gemeinsam die Welt verändern. Kreative ESG-Benchmarks aus den Bereichen Umwelt, Soziales und Unternehmensführung.",
  },
  sparks: {
    header: "Sparks",
    subHeader:
      "Gemeinsam die Welt verändern. Kreative ESG-Benchmarks aus den Bereichen Umwelt, Soziales und Unternehmensführung.",
  },
  "queens-and-kings": {
    header: "queens and kings",
    subHeader:
      "Gemeinsam die Welt verändern. Kreative ESG-Benchmarks aus den Bereichen Umwelt, Soziales und Unternehmensführung.",
  },
  "point-of-view": {
    header: "point of view",
    subHeader:
      "Gemeinsam die Welt verändern. Kreative ESG-Benchmarks aus den Bereichen Umwelt, Soziales und Unternehmensführung.",
  },
  picky: {
    header: "picky",
    subHeader:
      "Gemeinsam die Welt verändern. Kreative ESG-Benchmarks aus den Bereichen Umwelt, Soziales und Unternehmensführung.",
  },
}

const Category = ({ params }) => {
  const lang = params?.lang
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
  const pageFixedData = mapPage[type]

  const [insights, setInsights] = useState(null)

  const fetchInsights = async (type) => {
    Api.getArticles({
      lang,
      type: type === "all" ? null : type,
    })
      .then((res) => {
        setInsights(res.data)
      })
      .catch(console.log)
  }

  useEffect(() => {
    fetchInsights(type)
  }, [type])

  if (!pageFixedData) {
    return notFound()
  }

  if (!insights) return <Loading size="lg" center />

  return (
    <div className="py-32">
      <Filters filters={insightPageFilters(lang)} activeFilter={type} />
      <Text twClassName="text-center text-[55px] mt-8">
        {pageFixedData.header}
      </Text>
      <Text twClassName="text-center text-lg mt-8 max-w-[546px] mx-auto">
        {pageFixedData.subHeader}
      </Text>
      <ArticlesLayout data={insights} lang={lang} />
    </div>
  )
}

export default Category
