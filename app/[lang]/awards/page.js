"use client"
import Card from "@/components/Card"
import Filters from "@/components/Filters"
import Impressionen from "@/components/Impressionen"
import Info from "@/components/Info"
import Marquee from "@/components/Marquee"
import MarqueeChildren from "@/components/MarqueeChildren"
import "../style.css"
import { awardsFilters } from "@/utils/filters"
import { useEffect, useState } from "react"
import Api from "@/api"
import Loading from "@/components/Loading"

const AwardsPage = ({ params }) => {
  const lang = params?.lang
  const [pageData, setPageData] = useState(null)
  const [cards, setCards] = useState(null)

  const fetchPageData = () => {
    Api.getAwardsPage({ lang })
      .then((res) => setPageData(res.data))
      .catch((err) => console.log(err))
  }

  const fetchAwardsCards = () => {
    Api.getAwardsCards({ lang })
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchPageData()
    fetchAwardsCards()
  }, [])

  if (!pageData || !cards) {
    return (
      <div className="h-[50rem] w-full flex justify-center items-center">
        <Loading size="lg" />
      </div>
    )
  }

  return (
    <div>
      <div className="awards-gradient-background flex flex-col h-[90rem]">
        <Marquee speed={200} textSize={220} style={{ marginTop: 80 }}>
          <MarqueeChildren
            data={{ content: pageData.attributes?.marquee, visible: true }}
          />
        </Marquee>
        {cards.map(({ id, attributes }) => (
          <Card
            key={id}
            imageCard={false}
            title={attributes?.title}
            width={230}
            buttonText={attributes?.button?.text}
            btnWidth={165}
          />
        ))}
      </div>
      <div className="flex flex-col items-center mt-8">
        <Filters filters={awardsFilters(lang)} />
        <div className="pt-20 pb-20">
          <Info
            description={pageData.attributes?.content}
            btnTitle={pageData.attributes?.button?.text}
            btnWidth={220}
            primaryBtn={true}
            btnBgColor={"#000000"}
            componentStyle={{ background: "none" }}
          />
        </div>
        <Impressionen />
      </div>
    </div>
  )
}

export default AwardsPage
