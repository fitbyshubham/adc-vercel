import Card from "@/components/Card"
import Filters from "@/components/Filters"
import Text from "@/components/Text"
import { creativeDaysFilters } from "@/utils/filters"
import React from "react"

const Speakers = ({ params }) => {
  const lang = params?.lang
  const speakerId = params?.speakerId
  const pages = creativeDaysFilters(lang)

  return (
    <div className="pt-[100px] flex flex-col items-center gap-[100px]">
      <Filters filters={pages} />
      <Text>ALLE SPEAKERS</Text>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[100px]">
        <Card
          imageCard={true}
          className="w-[308px] max-md:w-[200px]"
          name={"Pascal geissbühler"}
          title={"«Playful Exploration in Midjourney»"}
          description={"Donnerstag, 8. Juni // 15 – 17 UHR"}
          titleStyle={{ fontSize: 24 }}
          descriptionStyle={{ fontSize: 12 }}
        />
        <Card
          imageCard={true}
          className="w-[308px] max-md:w-[200px]"
          name={"Pascal geissbühler"}
          title={"«Playful Exploration in Midjourney»"}
          description={"Donnerstag, 8. Juni // 15 – 17 UHR"}
          titleStyle={{ fontSize: 24 }}
          descriptionStyle={{ fontSize: 12 }}
        />
        <Card
          imageCard={true}
          className="w-[308px] max-md:w-[200px]"
          name={"Pascal geissbühler"}
          title={"«Playful Exploration in Midjourney»"}
          description={"Donnerstag, 8. Juni // 15 – 17 UHR"}
          titleStyle={{ fontSize: 24 }}
          descriptionStyle={{ fontSize: 12 }}
        />
        <Card
          imageCard={true}
          className="w-[308px] max-md:w-[200px]"
          name={"Pascal geissbühler"}
          title={"«Playful Exploration in Midjourney»"}
          description={"Donnerstag, 8. Juni // 15 – 17 UHR"}
          titleStyle={{ fontSize: 24 }}
          descriptionStyle={{ fontSize: 12 }}
        />
        <Card
          imageCard={true}
          className="w-[308px] max-md:w-[200px]"
          name={"Pascal geissbühler"}
          title={"«Playful Exploration in Midjourney»"}
          description={"Donnerstag, 8. Juni // 15 – 17 UHR"}
          titleStyle={{ fontSize: 24 }}
          descriptionStyle={{ fontSize: 12 }}
        />
        <Card
          imageCard={true}
          className="w-[308px] max-md:w-[200px]"
          name={"Pascal geissbühler"}
          title={"«Playful Exploration in Midjourney»"}
          description={"Donnerstag, 8. Juni // 15 – 17 UHR"}
          titleStyle={{ fontSize: 24 }}
          descriptionStyle={{ fontSize: 12 }}
        />
        <Card
          imageCard={true}
          className="w-[308px] max-md:w-[200px]"
          name={"Pascal geissbühler"}
          title={"«Playful Exploration in Midjourney»"}
          description={"Donnerstag, 8. Juni // 15 – 17 UHR"}
          titleStyle={{ fontSize: 24 }}
          descriptionStyle={{ fontSize: 12 }}
        />
        <Card
          imageCard={true}
          className="w-[308px] max-md:w-[200px]"
          name={"Pascal geissbühler"}
          title={"«Playful Exploration in Midjourney»"}
          description={"Donnerstag, 8. Juni // 15 – 17 UHR"}
          titleStyle={{ fontSize: 24 }}
          descriptionStyle={{ fontSize: 12 }}
        />
        <Card
          imageCard={true}
          className="w-[308px] max-md:w-[200px]"
          name={"Pascal geissbühler"}
          title={"«Playful Exploration in Midjourney»"}
          description={"Donnerstag, 8. Juni // 15 – 17 UHR"}
          titleStyle={{ fontSize: 24 }}
          descriptionStyle={{ fontSize: 12 }}
        />
      </div>
    </div>
  )
}

export default Speakers
