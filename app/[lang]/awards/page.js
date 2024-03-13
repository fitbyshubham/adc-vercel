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

  const fetchPageData = () => {
    Api.getAwardsPage({ lang })
      .then((res) => setPageData(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchPageData()
  }, [])

  if (!pageData) {
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
        <div className="flex justify-center">
          <div className=" container mx-auto px-4 pt-10 pb-10">
            <div className="grid grid-cols-12 gap-4">
              <Card
                imageCard={false}
                title={"Location: Schloss Sihlberg"}
                width={230}
                buttonText={"ZU google maps"}
                btnWidth={165}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <Filters filters={awardsFilters} />
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
