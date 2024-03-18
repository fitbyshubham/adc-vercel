import Button from "@/components/Button"
import Text from "@/components/Text"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import speaker_img_not_found from "@/assets/images/speaker.png"
import { creativeDaysFilters } from "@/utils/filters"
import Filters from "@/components/Filters"

const Speaker = ({ params }) => {
  const lang = params?.lang
  const speakerId = params?.speakerId
  const pages = creativeDaysFilters(lang)
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
  return (
    <div className="pt-20">
      <Filters filters={pages} />
      <div className="flex xl:px-[103px] flex-col md:p-[30px] p-[20px] gap-[102px]">
        <div className=" w-full flex flex-col items-center gap-[50px]">
          <Text twClassName="lg:text-[120px] text-center sm:text-[55px] text-[30px] xl:leading-[120px] leading-none">
            {header}
          </Text>
          <Text twClassName="text-center">{date}</Text>
          <Text capitalize={true} twClassName="text-center">
            {info}
          </Text>
          <Button primaryBtn={true} bgColor={"#000000"} width={187}>
            Jetzt anmelden
          </Button>
        </div>
        <div className="flex justify-start gap-8 w-full">
          <Image
            src={speaker_img_not_found}
            alt="Speaker"
            className="xl:w-full w-[382px] aspect-square h-full"
          />
          <div className="flex flex-col gap-8">
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
      </div>
    </div>
  )
}

export default Speaker
