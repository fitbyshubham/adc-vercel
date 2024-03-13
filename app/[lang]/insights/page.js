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
import SquareCard from "@/components/SquareCard"
import { chunkArray2 } from "@/utils/arrayChunks"
import Image from "next/image"

const Insights = ({ params }) => {
  const lang = params.lang
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const [insights, setInsights] = useState([
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
        setInsights(res.data)
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
      <Filters filters={insightPageFilters(lang)} />
      {/* <div className="mx-auto px-4 py-10">
        <div className="flex md:flex-col flex-row overflow-scroll bg-red-500 no-scrollbar lg:gap-[100px] gap-[20px] lg:mt-[100px] w-full">
          {insights.map((arr, idx) => (
            <div
              className="flex flex-row md:flex-row lg:gap-[100px] gap-[20px] mx-auto relative"
              key={idx}
            >
              {arr.map((item, idx) => (
                <SquareCard
                  key={idx}
                  title={item?.attributes?.card.title}
                  description={item?.attributes.card?.description}
                  buttonText={"Weiterlesen"}
                  size={item.attributes.card.size}
                  className={"bg-green-500"}
                  imageUrl={
                    item?.attributes.card.image.path.data.attributes.url
                  }
                  position={item?.attributes.card.position}
                />
              ))}
            </div>
          ))}
        </div>
      </div> */}

      <div className="flex md:flex-col flex-row overflow-scroll no-scrollbar lg:gap-[100px] gap-[20px] lg:p-[100px] p-[20px] w-full">
        <div className="flex lg:gap-[100px] gap-[20px] flex-row">
          {insights[0] && (
            <div className="md:w-[411px] w-full">
              <div
                className={`h-full w-full flex flex-col gap-y-4 md:justify-end justify-between md:pb-[60px] pb-0`}
              >
                <div className="flex flex-col gap-y-4">
                  <div className={`relative aspect-square w-[207px]`}>
                    <Image
                      src={
                        config.IMAGE_API_URL +
                        insights[0].attributes.card.image.path.data.attributes
                          .url
                      }
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[30px] leading-none">
                    {insights[0].attributes.card.title}
                  </p>
                  <p>{insights[0].attributes.card.description}</p>
                </div>
                <Button width={120}>
                  <p className="text-xs">Weiterlesen</p>
                </Button>
              </div>
            </div>
          )}
          {insights[1] && (
            <div className="w-full max-w-[720px] flex-1">
              <div
                className={`h-full w-full flex flex-col gap-y-4 justify-between`}
              >
                <div className="flex flex-col gap-y-4">
                  <div
                    className={`relative aspect-square md:w-[411px] w-[207px]`}
                  >
                    <Image
                      src={
                        config.IMAGE_API_URL +
                        insights[1].attributes.card.image.path.data.attributes
                          .url
                      }
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="md:text-[55px] text-[30px]">
                    {insights[1].attributes.card.title}
                  </p>
                  <p>{insights[1].attributes.card.description}</p>
                </div>
                <Button width={120}>
                  <p className="text-xs">Weiterlesen</p>
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="flex lg:gap-[100px] gap-[20px] flex-row">
          {insights[2] && (
            <div className="w-full max-w-[720px] flex-1">
              <div
                className={`h-full w-full flex flex-col gap-y-4 justify-between`}
              >
                <div className="flex flex-col gap-y-4">
                  <div
                    className={`relative aspect-square md:w-[411px] w-[207px]`}
                  >
                    <Image
                      src={
                        config.IMAGE_API_URL +
                        insights[2].attributes.card.image.path.data.attributes
                          .url
                      }
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="md:text-[55px] text-[30px]">
                    {insights[2].attributes.card.title}
                  </p>
                  <p>{insights[2].attributes.card.description}</p>
                </div>
                <Button width={120}>
                  <p className="text-xs">Weiterlesen</p>
                </Button>
              </div>
            </div>
          )}
          {insights[3] && (
            <div className="md:w-[411px] w-full">
              <div
                className={`h-full w-full flex flex-col gap-y-4 md:justify-center justify-between`}
              >
                <div className="flex flex-col gap-y-4">
                  <div className={`relative aspect-square w-[207px]`}>
                    <Image
                      src={
                        config.IMAGE_API_URL +
                        insights[3].attributes.card.image.path.data.attributes
                          .url
                      }
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[30px] leading-none">
                    {insights[3].attributes.card.title}
                  </p>
                  <p>{insights[3].attributes.card.description}</p>
                </div>
                <Button width={120}>
                  <p className="text-xs">Weiterlesen</p>
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="flex lg:gap-[100px] gap-[20px] flex-row md:mx-auto">
          {insights[4] && (
            <div className="md:w-[411px] w-full">
              <div
                className={`h-full w-full flex flex-col gap-y-4 md:justify-end justify-between md:pb-[60px] pb-0`}
              >
                <div className="flex flex-col gap-y-4">
                  <div className={`relative aspect-square w-[207px]`}>
                    <Image
                      src={
                        config.IMAGE_API_URL +
                        insights[4].attributes.card.image.path.data.attributes
                          .url
                      }
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[30px] leading-none">
                    {insights[4].attributes.card.title}
                  </p>
                  <p>{insights[4].attributes.card.description}</p>
                </div>
                <Button width={120}>
                  <p className="text-xs">Weiterlesen</p>
                </Button>
              </div>
            </div>
          )}
          {insights[5] && (
            <div className="md:w-[411px] w-full">
              <div
                className={`h-full w-full flex flex-col gap-y-4 md:justify-end justify-between md:pb-[60px] pb-0`}
              >
                <div className="flex flex-col gap-y-4">
                  <div className={`relative aspect-square w-[207px]`}>
                    <Image
                      src={
                        config.IMAGE_API_URL +
                        insights[5].attributes.card.image.path.data.attributes
                          .url
                      }
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[30px] leading-none">
                    {insights[5].attributes.card.title}
                  </p>
                  <p>{insights[5].attributes.card.description}</p>
                </div>
                <Button width={120}>
                  <p className="text-xs">Weiterlesen</p>
                </Button>
              </div>
            </div>
          )}
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
                <Link
                  key={idx}
                  href={`/${lang}/insights/article/${attributes.slug}`}
                >
                  <Card
                    description={attributes.header.title}
                    size="small"
                    imageUrl={attributes?.image?.path.data.attributes.url}
                    componentStyle={{ width: 250, minHeight: 250 }}
                    className={
                      "w-[98px] sm:w-[105px] lg:w-[162px] aspect-square h-[98px] sm:h-[105px] lg:h-[162px]"
                    }
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
