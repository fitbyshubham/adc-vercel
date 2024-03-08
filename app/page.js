"use client"
import { useEffect, useState, useContext } from "react"
import Link from "next/link"
import Button from "./components/Button"
import Card from "./components/Card"
import Filters from "./components/Filters"
import Marquee from "./components/Marquee"
import MarqueeChildren from "./components/MarqueeChildren"
import Api from "./api"
import "./style.css"
import Poster from "./components/Poster"
import Text from "./components/Text"
import Loading from "./components/Loading"
import moment from "moment"
import { getHomeFilters } from "./utils/filters"
import { Context } from "./context"

export default function Home() {
  const [pageData, setPageData] = useState(null)
  const [highlightedNewsEvents, setHighlightedNewsEvents] = useState(null)
  const { menuItems } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Api.getHomePage()
      .then((res) => {
        const data = res.data.attributes
        setPageData(data)
        Api.getNewsEvents("", 1, 4)
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
          <Marquee speed={200} textSize={220}>
            <MarqueeChildren content={pageData?.hero?.headline} />
          </Marquee>
        </div>
        <Poster
          visible={pageData?.hero?.circularFlowButton?.visible}
          title={pageData?.hero?.circularFlowButton?.title}
          subTitle={pageData?.hero?.circularFlowButton?.subTitle}
        />
      </div>
      <div className="pt-8">
        <Filters filters={getHomeFilters(menuItems)} />
      </div>
      <div className=" container mx-auto px-4 pt-16">
        <div className="grid grid-cols-12 max-sm:grid-cols-1 gap-4">
          {pageData.insights.map((insight, index) => (
            <div className={cardsClassName[index]} key={insight.id}>
              <Card
                title={insight?.title}
                description={insight?.description}
                buttonText="Weiterlesen"
                imageUrl={insight?.image?.path.data.attributes.url}
                size={insight?.size}
              />
            </div>
          ))}
        </div>
      </div>
      <Link href="/insights" className="flex justify-center p-20">
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
          <Marquee speed={200} textSize={150}>
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
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
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
                />
              ))
            : null}
        </div>
        <Link href="/news&events">
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
          <Marquee speed={200} textSize={150}>
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
          <Marquee speed={200} textSize={150}>
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
