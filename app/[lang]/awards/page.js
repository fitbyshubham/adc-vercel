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
          <MarqueeChildren content={pageData.attributes?.marquee} />
        </Marquee>
        <div className="flex justify-center">
          <div className=" container mx-auto px-4 pt-20 gap-[200px] pb-10">
            <div className="flex flex-col">
              <Card
                imageCard={false}
                title={cards[0]?.attributes?.title}
                width={390}
                buttonText={cards[0]?.attributes?.button.text}
                btnWidth={165}
                className="min-h-[200px] md:ml-[200px]"
                titleClassName="text-[30px]"
              />
              <Card
                imageCard={false}
                title={cards[0]?.attributes?.title}
                width={390}
                buttonText={cards[0]?.attributes?.button.text}
                btnWidth={165}
                className="min-h-[200px] md:self-end"
                titleClassName="text-[30px]"
              />
              <Card
                imageCard={false}
                title={cards[0]?.attributes?.title}
                width={390}
                buttonText={cards[0]?.attributes?.button.text}
                btnWidth={165}
                className="min-h-[200px]"
                titleClassName="text-[55px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <Filters filters={awardsFilters(lang)} />
        <div className="pt-20 pb-20">
          <Info
            description={pageData.attributes?.content}
            btnTitle={pageData.attributes?.button?.text}
            descriptionFontSize={25}
            btnWidth={220}
            primaryBtn={true}
            btnBgColor={"#000000"}
            componentStyle={{ background: "none" }}
          />
        </div>
      </div>
      <Impressionen />
    </div>
  )
}

export default AwardsPage
