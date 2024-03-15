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
import Image from "next/image"
import Text from "@/components/Text"

const category = {
  sparks: "Sparks",
  impulse: "Impulse",
  conscious: "Conscious",
  "queens-and-kings": "Queens and Kings",
  "point-of-view": "Point of View",
  picky: "Picky",
}

const Insights = ({ params }) => {
  const lang = params.lang
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState(null)
  const [insights, setInsights] = useState(null)

  const fetchArticles = async (page = 1) => {
    Api.getArticles({ lang, page, pageSize: 8 })
      .then((res) => {
        setArticles(res.data)
        setLoading(false)
      })
      .catch(console.log)
  }

  const fetchFeaturedArticles = async () => {
    Api.getArticles({ lang, pageSize: 8, featured: true })
      .then((res) => {
        setInsights(res.data)
      })
      .catch(console.log)
  }

  useEffect(() => {
    fetchArticles()
    fetchFeaturedArticles()
  }, [])

  if (loading || !insights) return <Loading size="lg" center />

  return (
    <div className="pt-32">
      <Filters filters={insightPageFilters(lang)} />
      <div className="flex justify-center">
        <div className="flex flex-col sm:gap-[100px] gap-[70px] lg:py-[100px] py-[20px] p-5">
          <div className="flex sm:flex-row flex-col lg:gap-[100px] gap-[50px]">
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
                          insights[0].attributes.image.path.data.attributes.url
                        }
                        alt="image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Text twClassName=" text-[30px] leading-none">
                      {insights[0].attributes?.header.title}
                    </Text>
                    <p>{insights[0].attributes?.header.subTitle}</p>
                  </div>
                  <Link
                    href={`/${lang}/insights/article/${insights[0].attributes?.slug}`}
                  >
                    <Button width={120} className="text-xs">
                      {insights[0].attributes?.button?.text || "Weiterlesen"}
                    </Button>
                  </Link>
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
                          insights[1].attributes.image.path.data.attributes.url
                        }
                        alt="image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Text twClassName=" text-[30px] leading-none">
                      {insights[1].attributes?.header.title}
                    </Text>
                    <p>{insights[1].attributes?.header.subTitle}</p>
                  </div>
                  <Link
                    href={`/${lang}/insights/article/${insights[1].attributes?.slug}`}
                  >
                    <Button width={120} className="text-xs">
                      {insights[1].attributes?.button?.text || "Weiterlesen"}
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex sm:gap-[100px] gap-[70px] sm:flex-row flex-col">
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
                          insights[2].attributes.image.path.data.attributes.url
                        }
                        alt="image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Text twClassName=" text-[30px] leading-none">
                      {insights[2].attributes?.header.title}
                    </Text>
                    <p>{insights[2].attributes?.header.subTitle}</p>
                  </div>
                  <Link
                    href={`/${lang}/insights/article/${insights[2].attributes?.slug}`}
                  >
                    <Button width={120} className="text-xs">
                      {insights[2].attributes?.button?.text || "Weiterlesen"}
                    </Button>
                  </Link>
                </div>
              </div>
            )}
            {insights[3] && (
              <div className="md:w-[411px] w-full">
                <div
                  className={`h-full w-full flex flex-col gap-y-4 sm:justify-start`}
                >
                  <div className="flex flex-col gap-y-4">
                    <div className={`relative aspect-square w-[207px]`}>
                      <Image
                        src={
                          config.IMAGE_API_URL +
                          insights[3].attributes.image.path.data.attributes.url
                        }
                        alt="image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Text twClassName=" text-[30px] leading-none">
                      {insights[3].attributes?.header.title}
                    </Text>
                    <p>{insights[3].attributes?.header.subTitle}</p>
                  </div>
                  <Link
                    href={`/${lang}/insights/article/${insights[3].attributes?.slug}`}
                  >
                    <Button width={120} className="text-xs">
                      {insights[3].attributes?.button?.text || "Weiterlesen"}
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="flex sm:gap-[100px] gap-[70px] sm:flex-row flex-col md:mx-auto">
            {insights[4] && (
              <div className="md:w-[411px] w-full">
                <div className={`h-full w-full flex flex-col gap-y-4`}>
                  <div className="flex flex-col gap-y-4">
                    <div className={`relative aspect-square w-[207px]`}>
                      <Image
                        src={
                          config.IMAGE_API_URL +
                          insights[4].attributes.image.path.data.attributes.url
                        }
                        alt="image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Text twClassName=" text-[30px] leading-none">
                      {insights[4].attributes?.header.title}
                    </Text>
                    <p>{insights[4].attributes?.header.subTitle}</p>
                  </div>
                  <Link
                    href={`/${lang}/insights/article/${insights[4].attributes?.slug}`}
                  >
                    <Button width={120} className="text-xs">
                      {insights[4].attributes?.button?.text || "Weiterlesen"}
                    </Button>
                  </Link>
                </div>
              </div>
            )}
            {insights[5] && (
              <div className="md:w-[411px] w-full ">
                <div
                  className={`h-full w-full flex flex-col gap-y-4 sm:justify-end justify-between sm:mt-[6rem]`}
                >
                  <div className="flex flex-col gap-y-4">
                    <div className={`relative aspect-square w-[207px]`}>
                      <Image
                        src={
                          config.IMAGE_API_URL +
                          insights[5].attributes.image.path.data.attributes.url
                        }
                        alt="image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Text twClassName=" text-[30px] leading-none">
                      {insights[5].attributes?.header.title}
                    </Text>
                    <p>{insights[5].attributes?.header.subTitle}</p>
                  </div>
                  <Link
                    href={`/${lang}/insights/article/${insights[5].attributes?.slug}`}
                  >
                    <Button width={120} className="text-xs">
                      {insights[5].attributes?.button?.text || "Weiterlesen"}
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center md:gap-28 gap-[20px] lg:pt-24 sm:pt-[200px] pt-[70px]  pb-24 p-5 w-full">
        <div>KATEGORIEN</div>
        <div className="flex gap-8 overflow-scroll no-scrollbar md:pl-[150px] sm:pl-[100px] pl-[50px] xl:w-[80rem] lg:w-[50rem] md:w-[50rem] sm:w-[45rem] w-[21rem]">
          {articles.map(({ attributes, id }) => (
            <Link
              key={id}
              href={`/${lang}/insights/article/${attributes.slug}`}
            >
              <Card
                title={attributes?.header?.title}
                headline={attributes?.header?.subTitle}
                heading={category[attributes?.category]}
                covered={true}
                imageCard={false}
                buttonText={attributes?.button?.text}
                btnWidth={150}
                btnBgColor={"#ffffff"}
                btnTextColor={"#000000"}
              />
            </Link>
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
            <div className="flex justify-center">
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-10 sm:gap-7 gap-10">
                {articles.map(({ attributes }, idx) => (
                  <Link
                    key={idx}
                    href={`/${lang}/insights/article/${attributes.slug}`}
                  >
                    <Card
                      description={attributes.header.title}
                      size="small"
                      imageUrl={attributes?.image?.path.data.attributes.url}
                      componentStyle={{ minHeight: 150 }}
                      className="w-[250px] sm:w-[200px] max-sm:w-[100px]"
                      imageClassName="md:w-[162px] md:h-[162px] w-[92px] h-[92px]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="p-20">
            <Link href={`/${lang}/insights/category?type=all`}>
              <Button width={200}>Show All Articles</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights
