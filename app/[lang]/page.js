"use client"
import Api from "@/api"
import config from "@/apiConfig"
import Button from "@/components/Button"
import Card from "@/components/Card"
import Filters from "@/components/Filters"
import Loading from "@/components/Loading"
import Marquee from "@/components/Marquee"
import MarqueeChildren from "@/components/MarqueeChildren"
import Text from "@/components/Text"
import { getHomeFilters } from "@/utils/filters"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../context"
import "./style.css"
export default function Home({ params }) {
  const lang = params?.lang
  const [pageData, setPageData] = useState(null)
  //   const [insights, setInsights] = useState(null)
  const [highlightedNewsEvents, setHighlightedNewsEvents] = useState(null)
  const { menuItems } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Api.getHomePage({ lang })
      .then((res) => {
        const data = res.data.attributes
        console.log(data)
        setPageData(data)
        Api.getNewsEvents({ lang, pageSize: 4 })

          .then((res) => {
            const data = res.data
            setHighlightedNewsEvents(data)
            setLoading(false)
          })
          .catch(console.log)
      })
      .catch(console.log)
  }, [])

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading size="lg" />
      </div>
    )

  return (
    <main>
      <div className="gradient-background">
        <div className="flex justify-center items-center h-[45rem]">
          <Marquee
            speed={200}
            visible={pageData?.hero?.circularFloatingButton?.visible}
            title={pageData?.hero?.circularFloatingButton?.title}
            subTitle={pageData?.hero?.circularFloatingButton?.subTitle}
            url={pageData?.hero?.circularFloatingButton?.url}
          >
            <MarqueeChildren content={pageData?.hero?.headline} />
          </Marquee>
        </div>
      </div>
      <div className="pt-8">
        <Filters filters={getHomeFilters(menuItems, lang)} />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col overflow-scroll no-scrollbar lg:gap-[100px] sm:gap-[20px] gap-[50px] lg:p-[100px] p-[20px] ">
          <div className="flex lg:gap-[100px] sm:gap-[20px] gap-[50px] sm:flex-row flex-col">
            <div className="md:w-[411px] w-[720px]">
              <div
                className={`h-full w-full flex flex-col gap-y-4 md:justify-end justify-between md:pb-[60px] pb-0`}
              >
                <div className="flex flex-col gap-y-4 max-sm:w-[280px]">
                  <div className={`relative aspect-square w-[207px]`}>
                    <Image
                      src={
                        config.IMAGE_API_URL +
                        pageData.insight1.data.attributes.image.path.data
                          .attributes.url
                      }
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Text twClassName=" text-xm">
                    {pageData.insight1.data.attributes?.header.title}
                  </Text>
                  <p>{pageData.insight1.data.attributes?.header.subTitle}</p>
                </div>
                <Link
                  href={`/${lang}/insights/article/${pageData.insight1.data.attributes?.slug}`}
                >
                  <Button width={120} className="text-xs">
                    {pageData.insight1.data.attributes?.button?.text ||
                      "Weiterlesen"}
                  </Button>
                </Link>
              </div>
            </div>
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
                        pageData.insight2.data.attributes.image.path.data
                          ?.attributes.url
                      }
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Text twClassName="md:text-lg text-xm">
                    {pageData.insight2.data.attributes?.header.title}
                  </Text>
                  <p>{pageData.insight2.data.attributes?.header.subTitle}</p>
                </div>
                <Link
                  href={`/${lang}/insights/article/${pageData.insight2.data.attributes?.slug}`}
                >
                  <Button width={120} className="text-xs">
                    {pageData.insight2.data.attributes?.button?.text ||
                      "Weiterlesen"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="md:w-[411px] w-full">
              <div
                className={`h-full w-full flex flex-col gap-y-4 md:justify-center justify-between`}
              >
                <div className="flex flex-col gap-y-4">
                  <div className={`relative aspect-square w-[207px]`}>
                    <Image
                      src={
                        config.IMAGE_API_URL +
                        pageData.insight3.data.attributes.image.path.data
                          ?.attributes.url
                      }
                      alt="image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Text twClassName=" text-xm">
                    {pageData.insight3.data.attributes?.header.title}
                  </Text>
                  <p>{pageData.insight3.data.attributes?.header.subTitle}</p>
                </div>
                <Link
                  href={`/${lang}/insights/article/${pageData.insight3.data.attributes?.slug}`}
                >
                  <Button width={120} className="text-xs">
                    {pageData.insight3.data.attributes?.button?.text ||
                      "Weiterlesen"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link href={`/${lang}/insights`} className="flex justify-center p-20">
        <Button primaryBtn={true} width={200}>
          WEITER zu insights
        </Button>
      </Link>
      <div
        className={
          pageData?.marquee1?.visible
            ? "border-b-[1px] border-t-[1px] border-black mt-10"
            : ""
        }
      >
        <div className="p-1">
          <Marquee
            speed={200}
            size="sm"
            visible={pageData?.marquee1?.circularFloatingButton?.visible}
            title={pageData?.marquee1?.circularFloatingButton?.title}
            subTitle={pageData?.marquee1?.circularFloatingButton?.subTitle}
            url={pageData?.marquee1?.circularFloatingButton?.url}
            small={true}
          >
            <MarqueeChildren
              content={pageData?.marquee1?.headline?.text}
              images={pageData?.marquee1?.headline?.images}
              visible={pageData?.marquee1?.visible}
            />
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-28 pt-24 pb-24 p-5">
        <Text>NEWS & EVENTS</Text>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-14">
          {highlightedNewsEvents
            ? highlightedNewsEvents.map(({ id, attributes }) => (
                <Link
                  key={id}
                  href={`/${lang}/news-and-events/${attributes?.slug}`}
                >
                  <Card
                    title={attributes.title}
                    heading={moment(attributes.date).format("DD.MM.YYYY")}
                    covered={true}
                    imageCard={Boolean(attributes?.image)}
                    imageUrl={attributes?.image?.path?.data?.attributes.url}
                    buttonText="WEITERLESEN"
                    btnWidth={150}
                    btnBgColor={"#ffffff"}
                    btnTextColor={"#000000"}
                  />
                </Link>
              ))
            : null}
        </div>
        <Link href={`/${lang}/news-and-events`}>
          <Button primaryBtn={true} width={180}>
            ALLE ANZEIGEN
          </Button>
        </Link>
      </div>
      <div
        className={
          pageData?.marquee2?.visible
            ? "border-b-[1px] border-t-[1px] border-black mt-10"
            : "border-b-[1px] border-black "
        }
      >
        <div className="p-1">
          <Marquee
            speed={200}
            size="sm"
            visible={pageData?.marquee2?.circularFloatingButton?.visible}
            title={pageData?.marquee2?.circularFloatingButton?.title}
            subTitle={pageData?.marquee2?.circularFloatingButton?.subTitle}
            url={pageData?.marquee2?.circularFloatingButton?.url}
            small
          >
            <MarqueeChildren
              content={pageData?.marquee2?.headline?.text}
              images={pageData?.marquee2?.headline.images}
              visible={pageData?.marquee2?.visible}
            />
          </Marquee>
        </div>
      </div>
      <div
        className={
          pageData?.marquee3?.visible
            ? "border-b-[1px] border-black mb-20"
            : "mb-20"
        }
      >
        <div className="p-1">
          <Marquee
            speed={200}
            size="sm"
            visible={pageData?.marquee3?.circularFloatingButton?.visible}
            title={pageData?.marquee3?.circularFloatingButton?.title}
            subTitle={pageData?.marquee3?.circularFloatingButton?.subTitle}
            url={pageData?.marquee3?.circularFloatingButton?.url}
            small
          >
            <MarqueeChildren
              content={pageData?.marquee3?.headline.text}
              images={pageData?.marquee3?.headline.images}
              visible={pageData?.marquee3?.visible}
            />
          </Marquee>
        </div>
      </div>
    </main>
  )
}
