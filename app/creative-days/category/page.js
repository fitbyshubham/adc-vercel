"use client"
import Button from "@/app/components/Button"
import Text from "@/app/components/Text"
import Image from "next/image"
import speaker_img_not_found from "@/assets/images/speaker.png"
import Card from "@/app/components/Card"
import Link from "next/link"
import Filters from "@/app/components/Filters"
import { creativeDaysFilters } from "@/app/utils/filters"
import { useSearchParams } from "next/navigation"
import no_image_found from "@/assets/images/bildschirmfoto.png"
import right_arrow from "@/assets/icons/right_arrow.png"
import { useState } from "react"
import line from "@/assets/icons/line.png"
import expend from "@/assets/icons/expend.png"

const ProgramView = () => {
  const param = useSearchParams()
  const type = param.get("type")

  return (
    <div className="pt-32 max-md:pt-[100px] flex flex-col md:gap-y-[100px]">
      <div className="flex justify-start items-center p-[30px]">
        <Filters filters={creativeDaysFilters} activeFilter={type} />
      </div>
      {type === "program" && <ProgramFilter />}
      {type === "speakers" && <SpeakerFilter />}
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
          <div className="w-[665px] max-md:w-full flex flex-col gap-3">
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
      <div className="flex justify-between">
        <div className="w-[624px] max-md:w-full">
          <Text
            twClassName={
              "leading-tight w-[249px] max-md:w-[165px] text-[24px] max-md:text-[16px]"
            }
          >
            {title}
          </Text>
        </div>
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
    <div className="w-[751px] xl:ml-[50px] max-md:w-full">
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
    <div className="max-md:flex max-md:justify-center mb-[200px]">
      <div className="max-md:p-5 flex flex-col gap-[132px]">
        <Text
          style={{ textAlign: "center" }}
          twClassName={
            "text-center text-[120px] max-md:text-[55px] max-sm:text-[30px]"
          }
        >
          Programm
        </Text>
        <div className="flex md:flex-row flex-col justify-between max-md:gap-8 md:px-[100px] max-sm:pt-4">
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
  const header = "CREATIVE SELFDIRECT ION"
  const date = "DONNERSTAG, 8. JUNI, 13 – 16 UHR"
  const info = `Schärfe dein berufliches Profil und entwickle deinen persönlichen Führungsstil im Workshop «Creative Selfdirection» von Pascal Geissbühler, Markenberater und Gründer von biographis.ch.
    Du arbeitest in einer Seniorposition in der Kreation und willst deine Karriere auf das nächste Level bringen? Dann melde dich an bei ADC forward – dem massgeschneiderten Leadership-Programm für (bis zu) 20 weibliche High-Potentials.`

  const speakerName = "PASCAL GEISSBÜHLER"
  const speakerInfo =
    "Brand Strategist, Creative Coach und Organisationsentwickler, Gründer und Inhaber von Biographis"
  const speakerMoreInfo = `Profil schärfen und Positionierung stärken – Pascal Geissbühler zeigt, wie es geht. Als Markenberater, 
    Coach und Geschäftsführer von Biographis verhilft er nicht nur Unternehmen zu einer eigenständigen Identität und einer 
    schlagkräftigen Brand Strategy, sondern auch Einzelpersonen. In seinem Personal Coaching führt er Menschen auf den Weg zu einem 
    erfüllten Berufsleben und unterstützt sie bei der Karriereentwicklung, dem Personal Branding und dem persönlichen Auftreten. Dabei 
    greift Pascal Geissbühler auf seine umfangreiche Erfahrung aus seinem eigenen Weg zurück: Er war in der Geschäftsleitung einer 
    Brand Consultancy tätig, leitete Strategie- und Kreativteams in Change-Projekten und arbeitete als Texter-Konzepter und
    Medienjournalist. Nebenbei gibt er sein Wissen auch als Trainer und Dozent an der ETH Zürich, der ZHdK und an der Kalaidos
    Hochschule weiter. Ein spannendes Berufsprofil!`

  const cardInfo = `ADC forward findet erstmalig während der ADC Creative Days 2023 im Schloss Sihlberg statt.

    Für nur 195 CHF (3-Tagespass) bekommst du Zugang zu diesem und allen anderen Workshops, interessanten Talks, der ADC Award Ceremony und Partynacht.
    
    Teilnahme nur nach Anmeldung und mit dem Festivalpass, der vom 8. bis 10. Juni 2023 Zugang zu allen Talks und Events im Schloss Sihlberg gewährt.
    
    Die Platzzahl am Workshop ist limitiert: First come, first served.`
  return (
    <>
      <div className="flex flex-col xl:flex-row p-[30px] gap-[102px]">
        <div className="max-sm:text-left lg:pl-[103px] w-full flex flex-col gap-y-8">
          <Text twClassName="text-[120px] max-md:text-[55px] max-sm:text-[30px] md:leading-[120px]">
            {header}
          </Text>
          <Text>{date}</Text>
          <p>{info}</p>
          <Button primaryBtn={true} bgColor={"#000000"} width={187}>
            Jetzt anmelden
          </Button>
        </div>
        <div className="flex flex-col justify-between gap-8 xl:w-[382px] w-full flex-shrink-0">
          <Image
            src={speaker_img_not_found}
            alt="Speaker"
            className="xl:w-full w-[382px] h-auto self-center"
          />
          <Text fontSize={24} twClassName="leading-tight font-medium">
            {speakerName}
          </Text>
          <Text capitalize={true} fontSize={16} twClassName={"font-medium"}>
            {speakerInfo}
          </Text>
          <p className="text-[15px]">{speakerMoreInfo}</p>
          <div className="flex gap-3 text-[12px] pt-3">
            <Link href="#">{"LinkedIn".toUpperCase()}</Link>
            <Link href="#">{"website".toUpperCase()}</Link>
            <Link href="#">{"Instagram".toUpperCase()}</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[100px] px-8">
        <Text>ALLE SPEAKERS</Text>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[155px] gap-y-[100px] max-md:gap-14 place-items-center">
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
      <div className="px-8 self-center  mb-[100px]">
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
