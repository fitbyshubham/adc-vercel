"use client"
import Button from "@/components/Button"
import Text from "@/components/Text"
import Image from "next/image"

import Card from "@/components/Card"
import Link from "next/link"
import Filters from "@/components/Filters"
import { creativeDaysFilters } from "@/utils/filters"
import { useSearchParams } from "next/navigation"
import no_image_found from "@/assets/images/bildschirmfoto.png"
import right_arrow from "@/assets/icons/right_arrow.png"
import { useState } from "react"
import line from "@/assets/icons/line.png"
import expend from "@/assets/icons/expend.png"

const ProgramView = ({ params }) => {
  const lang = params?.lang

  return (
    <div className="pt-[100px] max-md:pt-[100px] flex flex-col md:gap-y-[100px]">
      <Filters filters={creativeDaysFilters(lang)} />
      <ProgramFilter />
    </div>
  )
}

const Program = ({ id, title, time, info }) => {
  if (info) {
    return (
      <div className="flex flex-col gap-4 pb-5">
        <div className="flex gap-5">
          <Text twClassName="w-[82px] text-[12px] max-md:text-[9px]">
            {time}
          </Text>
          <div className="w-full flex flex-col gap-3">
            <Text twClassName="leading-tight text-[24px] max-md:text-[16px]">
              {title}
            </Text>
            <Text
              capitalize={true}
              twClassName="text-[22px] max-md:text-[15px]"
            >
              {info}
            </Text>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-4  pb-5">
      <Text twClassName="w-[96px] text-[12px] max-md:text-[9px]">{time}</Text>
      <div className="flex justify-between w-full">
        <Text
          twClassName={
            "leading-tight w-[249px] max-md:w-[165px] text-[24px] max-md:text-[16px]"
          }
        >
          {title}
        </Text>
        <Link
          className="w-[30px] h-[30px] rounded-full bg-[#EAEAEA] p-2 flex justify-center items-center"
          href={`/modules-detail/${id}`}
        >
          <Image src={right_arrow} alt="Arrow" className="w-2 h-2" />
        </Link>
      </div>
    </div>
  )
}

const ProgramDays = ({ data }) => {
  const [openedProgram, setOpenedProgram] = useState(data[0].id)

  const handleOpen = (id) => {
    if (id === openedProgram) setOpenedProgram(null)
    else setOpenedProgram(id)
  }

  return (
    <div className="lg:w-[751px] xl:ml-[100px] lg:ml-[30px] ml-0 w-full">
      {data.map((items) => {
        return (
          <div key={items.id}>
            <div className="border-b-2 border-black pb-5 pt-5 flex justify-between">
              <Text>{items.date}</Text>
              {openedProgram === items.id ? (
                <div
                  className="w-[30px] h-[30px] p-2 bg-black flex items-center rounded-full"
                  onClick={() => handleOpen(items.id)}
                >
                  <Image src={line} alt="Line" />
                </div>
              ) : (
                <div
                  className="w-[30px] h-[30px] p-2 bg-black flex items-center rounded-full"
                  onClick={() => handleOpen(items.id)}
                >
                  <Image src={expend} alt="Expend" />
                </div>
              )}
            </div>
            <div
              className={`transition-opacity duration-300 ${
                openedProgram === items.id ? "" : "hidden"
              }`}
            >
              <div
                className={
                  items?.programsDetail
                    ? "border-b-2 border-black pt-5 pb-5"
                    : ""
                }
              >
                {items?.programsDetail?.map((program) => (
                  <Program
                    key={program.id}
                    id={program.id}
                    time={program.time}
                    title={program.title}
                  />
                ))}
              </div>
              <div
                className={
                  items?.programSortDetail
                    ? "border-b-2 border-black pt-5 pb-5"
                    : ""
                }
              >
                {items?.programSortDetail?.map((program) => (
                  <Program
                    key={program.id}
                    id={program.id}
                    time={program.time}
                    title={program.title}
                    info={program.info}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const ProgramFilter = () => {
  const programList = [
    {
      id: "1",
      date: "DONNERSTAG - 8. JUNI 2023",
      programsDetail: [
        {
          id: "1",
          time: "13 — 15 Uhr",
          title: "DORA OSINDE «COME AS YOU ARE» ADC FORWARD",
          link: "#",
        },
        {
          id: "2",
          time: "13 — 15 Uhr",
          title: "DORA OSINDE «COME AS YOU ARE» ADC FORWARD",
          link: "#",
        },
        {
          id: "3",
          time: "13 — 15 Uhr",
          title: "DORA OSINDE «COME AS YOU ARE» ADC FORWARD",
          link: "#",
        },
      ],
      programSortDetail: [
        {
          id: "1",
          time: "13 — 15 Uhr",
          title: "Swissfilm Association",
          info: "Im Rahmen der ADC Creative Days 2023 findet erneut ein Get-together Abend, welcher von der SWISSFILM ASSOCIATION zusammen mit dem ADC Switzerland organisiert wird, statt und an die legendären Swiss Partys in Cannes angelehnt ist – inklusive einer Diversity Review von Werbespots aus den 80ern und 90ern, kommentiert mit einem Augenzwinkern und viel Humor von Comedian Leila Ladari.Guest List only!",
        },
      ],
    },
    {
      id: "2",
      date: "DONNERSTAG - 8. JUNI 2023",
      programsDetail: [
        {
          id: "1",
          time: "1 — 5 Uhr",
          title: "DORA OSINDE«COME AS YOU ARE»ADC FORWARD",
          link: "#",
        },
      ],
    },
  ]
  return (
    <div className="max-md:flex w-full mb-[200px]">
      <div className="max-md:p-5 flex flex-col gap-[132px] w-full">
        <Text
          style={{ textAlign: "center" }}
          twClassName={
            "text-center text-[120px] max-md:text-[90px] max-sm:text-[50px]"
          }
        >
          Programm
        </Text>
        <div className="flex flex-col gap-8 w-full lg:flex-row justify-between md:px-8">
          <div className="sm:hidden flex gap-5">
            <Image
              src={no_image_found}
              alt="Image"
              className="w-[98px] h-[98px]"
            />
            <div className="flex flex-col gap-4">
              <Text>{"Festival Pass"}</Text>
              <Button onButtonClick={() => {}} width={130}>
                {"JETZT KAUFEN"}
              </Button>
            </div>
          </div>
          <ProgramDays data={programList} />
          <div className="max-sm:hidden">
            <Card
              description={"Festival Pass".toUpperCase()}
              size={"small"}
              buttonText={"JETZT KAUFEN"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const SpeakerFilter = () => {
  const cardInfo = `ADC forward findet erstmalig während der ADC Creative Days 2023 im Schloss Sihlberg statt.

    Für nur 195 CHF (3-Tagespass) bekommst du Zugang zu diesem und allen anderen Workshops, interessanten Talks, der ADC Award Ceremony und Partynacht.
    
    Teilnahme nur nach Anmeldung und mit dem Festivalpass, der vom 8. bis 10. Juni 2023 Zugang zu allen Talks und Events im Schloss Sihlberg gewährt.
    
    Die Platzzahl am Workshop ist limitiert: First come, first served.`
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[100px] px-8">
        <Text>ALLE SPEAKERS</Text>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
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
      <div className="md:px-8 px-5 self-center mb-[100px]">
        <div className="bg-[#EAEAEA] rounded-3xl p-10 flex flex-col gap-5 w-[752px] max-md:w-full">
          <Text>ADC Forward</Text>
          <Text fontSize={15} capitalize={true}>
            {cardInfo}
          </Text>
          <Button
            primaryBtn={true}
            bgColor={"#000000"}
            width={150}
            style={{ fontSize: "12px" }}
          >
            ZUR HOTEL WEBSITE
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProgramView
