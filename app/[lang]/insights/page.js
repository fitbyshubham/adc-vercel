"use client"
import Link from "next/link"
import Filters from "@/components/Filters"
import Card from "@/components/Card"
import Button from "@/components/Button"
import { insightPageFilters } from "../../../utils/filters"
import { useState, useEffect } from "react"
import Api from "@/api"
import Loading from "@/components/Loading"
import config from "@/apiConfig"
import InsightCard from "@/components/InsightsCard"
import { chunkArray2 } from "@/utils/arrayChunks"

const Insights = ({ params }) => {
  const lang = params.lang
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const [insights, setInsights] = useState([
    [
      {
        attributes: {
          content: "",
          group: "",
          slug: "",
          card: {
            description: "",
            featured: true,
            position: "",
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
        },
      },
    ],
  ])

  const fetchArticles = async (page = 1) => {
    Api.getArticles({ lang, page, pageSize: 8 })
      .then((res) => {
        setArticles(res.data)
        setLoading(false)
      })
      .catch(console.log)
  }

  const fetchInsights = async () => {
    Api.getInsights({ lang, type: "", featured: true })
      .then((res) => {
        setInsights(chunkArray2(res.data))
      })
      .catch(console.log)
  }

  useEffect(() => {
    fetchArticles()
    fetchInsights()
  }, [])

  const cards2 = [
    {
      id: 1,
      title: "ADC Switzerland: Acht neue Mitglieder",
      headline: "Sparks",
      covered: true,
      imageCard: false,
      buttonText: "Artikel ansehen",
      btnWidth: 150,
      btnBgColor: "#ffffff",
      btnTextColor: "#000000",
    },
    {
      id: 2,
      title: "Fertig lustig?",
      headline: "Impulse",
      covered: true,
      imageCard: false,
      buttonText: "Artikel ansehen",
      btnWidth: 150,
      btnBgColor: "#ffffff",
      btnTextColor: "#000000",
    },
    {
      id: 3,
      title: "Fertig lustig?",
      headline: "Impulse",
      covered: true,
      imageCard: false,
      buttonText: "Artikel ansehen",
      btnWidth: 150,
      btnBgColor: "#ffffff",
      btnTextColor: "#000000",
    },
    {
      id: 4,
      title: "Fertig lustig?",
      headline: "Impulse",
      covered: true,
      imageCard: false,
      buttonText: "Artikel ansehen",
      btnWidth: 150,
      btnBgColor: "#ffffff",
      btnTextColor: "#000000",
    },
  ]

  return (
    <div className="pt-32">
      <Filters filters={insightPageFilters} />
      <div className=" container mx-auto px-4 py-10">
        <div className="flex sm:flex-col flex-row overflow-scroll no-scrollbar sm:gap-[100px] gap-[20px] sm:mt-[100px] w-full">
          {insights.map((arr, idx) => (
            <div
              className="flex sm:flex-col flex-row md:flex-row lg:gap-[100px] gap-[20px] mx-auto relative"
              key={idx}
            >
              {arr.map((item, idx) => (
                <InsightCard
                  key={idx}
                  title={item.attributes.card.title}
                  description={item.attributes.card.description}
                  buttonText={"Weiterlesen"}
                  size={item.attributes.card.size}
                  className={"bg-green-500"}
                  imageUrl={item.attributes.card.image.path.data.attributes.url}
                  position={item.attributes.card.position}
                />
              ))}
            </div>
          ))}
          {/* <div className="col-span-12 md:col-start-5 md:col-span-8 lg:col-start-5 lg:col-span-6">
            <Card
              title={"Fünf Kreative und ihre BÜrosessel"}
              description={"Sesselwechsel auch ohne Jobwechsel."}
              buttonText={"Weiterlesen"}
              size={"small"}
            />
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <Card
              title={"Heureka"}
              description={
                "Den einen bläst sie auf 3000 Metern entgegen, den anderen kommt sie beim Kartoffelschälen und wieder anderen beim Anblick eines schlafenden Prinzen: Die beste Idee."
              }
              buttonText={"Weiterlesen"}
              size={"large"}
            />
          </div>
          <div className="col-span-5 md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-5">
            <Card
              title={"Heureka"}
              description={
                "Den einen bläst sie auf 3000 Metern entgegen, den anderen kommt sie beim Kartoffelschälen und wieder anderen beim Anblick eines schlafenden Prinzen: Die beste Idee."
              }
              buttonText={"Weiterlesen"}
              size={"small"}
            />
          </div>
          <div className="col-span-12 md:col-start-5 md:col-span-8 lg:col-start-5 lg:col-span-6">
            <Card
              title={"Fünf Kreative und ihre BÜrosessel"}
              description={"Sesselwechsel auch ohne Jobwechsel."}
              buttonText={"Weiterlesen"}
              size={"small"}
            />
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <Card
              title={"Heureka"}
              description={
                "Den einen bläst sie auf 3000 Metern entgegen, den anderen kommt sie beim Kartoffelschälen und wieder anderen beim Anblick eines schlafenden Prinzen: Die beste Idee."
              }
              buttonText={"Weiterlesen"}
              size={"large"}
            />
          </div>
          <div className="col-span-5 md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-5">
            <Card
              title={"Heureka"}
              description={
                "Den einen bläst sie auf 3000 Metern entgegen, den anderen kommt sie beim Kartoffelschälen und wieder anderen beim Anblick eines schlafenden Prinzen: Die beste Idee."
              }
              buttonText={"Weiterlesen"}
              size={"small"}
            />
          </div> */}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:gap-28 gap-[20px] md:pt-24 pt-8 pb-24 p-5 w-full">
        <div>KATEGORIEN</div>
        <div className="flex gap-8 overflow-scroll no-scrollbar w-full lg:pl-[150px]">
          {cards2.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              headline={card.headline}
              covered={true}
              imageCard={false}
              buttonText={card.buttonText}
              btnWidth={150}
              btnBgColor={"#ffffff"}
              btnTextColor={"#000000"}
            />
          ))}
          {cards2.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              headline={card.headline}
              covered={true}
              imageCard={false}
              buttonText={card.buttonText}
              btnWidth={150}
              btnBgColor={"#ffffff"}
              btnTextColor={"#000000"}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center gap-[20px] md:gap-16">
          <p>Weitere Artikel</p>
          {loading ? (
            <div className="flex justify-center items-center h-[20rem]">
              <Loading size="md" />
            </div>
          ) : (
            <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-24">
              {articles.map(({ attributes }, idx) => (
                <Link key={idx} href={`/insights/article/${attributes.slug}`}>
                  <Card
                    description={attributes.header.title}
                    size="small"
                    imageUrl={attributes?.image?.path.data.attributes.url}
                    componentStyle={{ width: 250, minHeight: 250 }}
                  />
                </Link>
              ))}
            </div>
          )}
          <div className="p-20">
            <Button onButtonClick={() => {}} width={200}>
              Show All Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights
