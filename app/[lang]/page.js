"use client"
import { useEffect, useState, useContext } from "react"
import Link from "next/link"
import Button from "@/components/Button"
import Card from "@/components/Card"
import Filters from "@/components/Filters"
import Marquee from "@/components/Marquee"
import MarqueeChildren from "@/components/MarqueeChildren"
import Api from "@/api"
import "./style.css"
import Text from "@/components/Text"
import Loading from "@/components/Loading"
import moment from "moment"
import { getHomeFilters } from "@/utils/filters"
import { Context } from "../../context"
import Image from "next/image"
import config from "@/apiConfig"
import { useRouter } from "next/navigation"

export default function Home({ params }) {
  const lang = params?.lang
  const [pageData, setPageData] = useState(null)
  const [highlightedNewsEvents, setHighlightedNewsEvents] = useState(null)
  const { menuItems } = useContext(Context)
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    Api.getHomePage({ lang })
      .then((res) => {
        const data = res.data.attributes
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

  const cardsClassName = [
    "col-span-6 md:col-start-5 md:col-span-8 lg:col-start-5 lg:col-span-6",
    "col-span-3 md:col-span-3 lg:col-span-3",
    "col-span-5 md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-5",
  ]

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
            textSize={220}
            visible={pageData?.hero?.circularFlowButton?.visible}
            title={pageData?.hero?.circularFlowButton?.title}
            subTitle={pageData?.hero?.circularFlowButton?.subTitle}
            url={pageData?.hero?.circularFlowButton?.url}
          >
            <MarqueeChildren content={pageData?.hero?.headline} />
          </Marquee>
        </div>
      </div>
      <div className="pt-8">
        <Filters filters={getHomeFilters(menuItems, lang)} />
      </div>

      <div className="flex md:flex-col flex-row overflow-scroll no-scrollbar lg:gap-[100px] gap-[20px] lg:p-[100px] p-[20px] w-full">
        <div className="flex lg:gap-[100px] gap-[20px] flex-row">
          <div className="md:w-[411px] w-full">
            <div
              className={`h-full w-full flex flex-col gap-y-4 md:justify-end justify-between md:pb-[60px] pb-0`}
            >
              <div className="flex flex-col gap-y-4">
                <div className={`relative aspect-square w-[207px]`}>
                  <Image
                    src={
                      config.IMAGE_API_URL +
                      pageData?.insight1?.image?.path?.data?.attributes?.url
                    }
                    alt="image"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[30px] leading-none">
                  {pageData.insight1.title}
                </p>
                <p>{pageData.insight1.description}</p>
              </div>
              <Button width={120}>
                <p className="text-xs">Weiterlesen</p>
              </Button>
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
                      pageData?.insight2?.image?.path?.data?.attributes?.url
                    }
                    alt="image"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="md:text-[55px] text-[30px]">
                  {pageData.insight2.title}
                </p>
                <p>{pageData.insight2.description}</p>
              </div>
              <Button width={120}>
                <p className="text-xs">Weiterlesen</p>
              </Button>
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
                      pageData?.insight3?.image?.path?.data?.attributes?.url
                    }
                    alt="image"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[30px] leading-none">
                  {pageData.insight3.title}
                </p>
                <p>{pageData.insight3.description}</p>
              </div>
              <Button width={120}>
                <p className="text-xs">Weiterlesen</p>
              </Button>
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
            textSize={150}
            visible={pageData?.marquee1?.circularFlowButton?.visible}
            title={pageData?.marquee1?.circularFlowButton?.title}
            subTitle={pageData?.marquee1?.circularFlowButton?.subTitle}
            url={pageData?.marquee1?.circularFlowButton?.url}
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
        <div className="flex overflow-scroll w-full no-scrollbar gap-8">
          {highlightedNewsEvents
            ? highlightedNewsEvents.map(({ id, attributes }) => (
                <Card
                  key={id}
                  title={attributes.title}
                  heading={moment(attributes.date).format("DD.MM.YYYY")}
                  covered={true}
                  imageCard={Boolean(attributes?.image)}
                  imageUrl={attributes?.image?.path.data.attributes.url}
                  buttonText="WEITERLESEN"
                  btnWidth={150}
                  btnBgColor={"#ffffff"}
                  btnTextColor={"#000000"}
                  onButtonClick={() =>
                    router.push(`/${lang}/news-and-events/${id}`)
                  }
                />
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
            textSize={150}
            visible={pageData?.marquee2?.circularFlowButton?.visible}
            title={pageData?.marquee2?.circularFlowButton?.title}
            subTitle={pageData?.marquee2?.circularFlowButton?.subTitle}
            url={pageData?.marquee2?.circularFlowButton?.url}
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
            textSize={150}
            visible={pageData?.marquee3?.circularFlowButton?.visible}
            title={pageData?.marquee3?.circularFlowButton?.title}
            subTitle={pageData?.marquee3?.circularFlowButton?.subTitle}
            url={pageData?.marquee3?.circularFlowButton?.url}
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
