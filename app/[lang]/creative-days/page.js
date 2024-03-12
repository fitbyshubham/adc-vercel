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

const CreativeDays = () => {
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
  useEffect(() => {
    Api.getCreativeDaysPage()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div className="creative-gradient-background flex flex-col h-[90rem]">
        <Marquee speed={200} textSize={220} style={{ marginTop: 80 }}>
          <MarqueeChildren
            data={{ content: "Creative day 2024", visible: true }}
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
      <div className="flex flex-col items-center mt-10 pb-20">
        <Filters filters={filters} />
        <Info
          title={data.attributes.title}
          description={data.attributes.content}
          btnTitle={data.attributes.button.text}
          btnWidth={220}
          primaryBtn={true}
          btnBgColor={"#000000"}
          componentStyle={{ background: "none" }}
        />
        <Impressionen />
      </div>
    </div>
  )
}

export default CreativeDays
