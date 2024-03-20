"use client"
import Card from "@/components/Card"
import Filters from "@/components/Filters"
import Impressionen from "@/components/Impressionen"
import Info from "@/components/Info"
import Marquee from "@/components/Marquee"
import MarqueeChildren from "@/components/MarqueeChildren"
import "../style.css"
import { creativeDaysFilters as filters } from "../../../utils/filters"
import { useEffect, useState } from "react"
import Api from "@/api"
import Loading from "@/components/Loading"

const CreativeDays = ({ params }) => {
  const lang = params?.lang
  const [data, setData] = useState({
    attributes: {
      button: {
        text: "",
      },
      title: "",
      marquee: "",
      content: "",
    },
  })
  const [pageData, setPageData] = useState(null)

  const fetchCreativeDaysPage = () => {
    Api.getCreativeDaysNote({ lang })
      .then((res) => setPageData(res.data))
      .catch((err) => console.log(err))
  }

  const fetchCards = () => {
    Api.getCreativeDaysPage({ lang })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchCreativeDaysPage()
    fetchCards()
  }, [])

  if (!pageData) return <Loading size="lg" center />

  return (
    <div>
      <div className="creative-gradient-background flex flex-col h-[90rem]">
        <Marquee speed={200} style={{ marginTop: 80 }}>
          <MarqueeChildren content={pageData?.attributes?.marquee} />
        </Marquee>
        <div className="flex justify-center">
          <div className=" container mx-auto px-4 pt-10 gap-[200px] pb-10">
            <div className="flex flex-col">
              <Card
                imageCard={false}
                title={data[0]?.attributes?.title}
                width={400}
                buttonText={data[0]?.attributes?.button.text}
                btnWidth={100}
                className="min-h-[90px] md:ml-[200px]"
                titleClassName="text-xm line-clamp-3"
                buttonStyle={{ padding: 4 }}
              />
              <Card
                imageCard={false}
                title={data[0]?.attributes?.title}
                width={400}
                buttonText={data[0]?.attributes?.button.text}
                btnWidth={100}
                className="min-h-[90px] md:self-end"
                titleClassName="text-xm line-clamp-3"
                buttonStyle={{ padding: 4 }}
              />
              <Card
                imageCard={false}
                title={data[0]?.attributes?.title}
                width={400}
                buttonText={data[0]?.attributes?.button.text}
                btnWidth={100}
                className="min-h-[90px]"
                titleClassName="text-lg line-clamp-3"
                buttonStyle={{ padding: 4 }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 pb-20">
        <Filters filters={filters(lang)} />
        <div className="pt-20 pb-20">
          <Info
            title={pageData.attributes?.title}
            description={pageData.attributes?.content}
            btnTitle={pageData.attributes?.button?.text}
            btnWidth={220}
            descriptionFontSize={25}
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

export default CreativeDays
