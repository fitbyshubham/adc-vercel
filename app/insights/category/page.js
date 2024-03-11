"use client"
import Filters from "@/components/Filters"
import Text from "@/components/Text"
import { useSearchParams } from "next/navigation"
import { insightPageFilters } from "../../../utils/filters"
import { notFound } from "next/navigation"
import ArticlesLayout from "@/components/ArticlesLayout"
import Api from "@/api"
import { useEffect, useState } from "react"

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
  },
  sparks: {
    header: "Sparks",
  },
  "queens-and-kings": {
    header: "queens and kings",
  },
  "point-of-view": {
    header: "point of view",
  },
  picky: {
    header: "picky",
  },
}

const Category = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
  const pageFixedData = mapPage[type]

  const [insights, setInsights] = useState([
    [
      {
        attributes: {
          card: {
            description: "",
            featured: true,
            position: "",
            group: "",
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
            size: "",
            title: "",
          },
          content: "",
        },
        id: "",
      },
    ],
  ])

  const fetchInsights = async (type) => {
    Api.getInsights(type === "all" ? "" : type)
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

  const cards3 = [
    {
      id: 1,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 2,
      description: "Fünf Kreative und ihre Bürosessel",
      size: "small",
    },
    {
      id: 3,
      description: "Sesselwechsel auch ohne Jobwechsel.",
      size: "small",
    },
    {
      id: 4,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 5,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 6,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 7,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 8,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 9,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 10,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 11,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 1,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 2,
      description: "Fünf Kreative und ihre Bürosessel",
      size: "small",
    },
    {
      id: 3,
      description: "Sesselwechsel auch ohne Jobwechsel.",
      size: "small",
    },
    {
      id: 4,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 5,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 6,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 7,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 8,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 9,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 10,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 11,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 1,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 2,
      description: "Fünf Kreative und ihre Bürosessel",
      size: "small",
    },
    {
      id: 3,
      description: "Sesselwechsel auch ohne Jobwechsel.",
      size: "small",
    },
    {
      id: 4,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 5,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 6,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 7,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 8,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 9,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 10,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 11,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 1,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 2,
      description: "Fünf Kreative und ihre Bürosessel",
      size: "small",
    },
    {
      id: 3,
      description: "Sesselwechsel auch ohne Jobwechsel.",
      size: "small",
    },
    {
      id: 4,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 5,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 6,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 7,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 8,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 9,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 10,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 11,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 1,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 2,
      description: "Fünf Kreative und ihre Bürosessel",
      size: "small",
    },
    {
      id: 3,
      description: "Sesselwechsel auch ohne Jobwechsel.",
      size: "small",
    },
    {
      id: 4,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 5,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 6,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 7,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 8,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 9,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 10,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 11,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 1,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 2,
      description: "Fünf Kreative und ihre Bürosessel",
      size: "small",
    },
    {
      id: 3,
      description: "Sesselwechsel auch ohne Jobwechsel.",
      size: "small",
    },
    {
      id: 4,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 5,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 6,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 7,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 8,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 9,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 10,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 11,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 10,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 11,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },

    {
      id: 10,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 11,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 10,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 11,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 10,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 11,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
  ]

  return (
    <div className="py-32">
      <Filters filters={insightPageFilters} activeFilter={type} />
      <Text twClassName="text-center text-[55px] mt-8">
        {pageFixedData.header}
      </Text>
      <ArticlesLayout data={insights} />
      {/* <div className="flex flex-col gap-[100px] mt-[100px] w-full md:px-20 px-4">
        {insights.map((arr, idx) => (
          <div
            className="flex flex-col md:flex-row gap-[100px] mx-auto relative"
            key={idx}
          >
            {arr.map((item, idx) => (
              <Card
                key={idx}
                title={item.attributes.card.title}
                description={item.attributes.card.description}
                buttonText={"Weiterlesen"}
                size={"small"}
                className={"bg-green-500"}
                imageUrl={item.attributes.card.image.path.data.attributes.url}
                position={item.attributes.card.position}
              />
            ))}
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Category
