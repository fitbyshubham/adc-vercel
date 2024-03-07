"use client"
import React from "react"
import Filters from "../components/Filters"
import Card from "../components/Card"
import Button from "../components/Button"
import { insightPageFilters } from "../utils/filters"

const Insights = () => {
  const cards2 = [
    {
      id: 1,
      title: "ADC Switzerland: Acht neue Mitglieder",
      headline: "Sparks",
      covered: true,
      imageCard: false,
      buttonText: "Artikel ansehen",
      btnWidth: 150,
      btnBgColor: "#ffffff",
      btnTextColor: "#000000",
    },
    {
      id: 2,
      title: "Fertig lustig?",
      headline: "Impulse",
      covered: true,
      imageCard: false,
      buttonText: "Artikel ansehen",
      btnWidth: 150,
      btnBgColor: "#ffffff",
      btnTextColor: "#000000",
    },
    {
      id: 3,
      title: "Fertig lustig?",
      headline: "Impulse",
      covered: true,
      imageCard: false,
      buttonText: "Artikel ansehen",
      btnWidth: 150,
      btnBgColor: "#ffffff",
      btnTextColor: "#000000",
    },
    {
      id: 4,
      title: "Fertig lustig?",
      headline: "Impulse",
      covered: true,
      imageCard: false,
      buttonText: "Artikel ansehen",
      btnWidth: 150,
      btnBgColor: "#ffffff",
      btnTextColor: "#000000",
    },
  ]

  const cards3 = [
    {
      id: 1,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 2,
      description: "Fünf Kreative und ihre Bürosessel",
      size: "small",
    },
    {
      id: 3,
      description: "Sesselwechsel auch ohne Jobwechsel.",
      size: "small",
    },
    {
      id: 4,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 5,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 6,
      description: "Origineller mit Yoga",
      size: "small",
    },
    {
      id: 7,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
    {
      id: 8,
      description: "Mode, die einem nur im Traum einfällt",
      size: "small",
    },
  ]

  return (
    <div className="pt-10">
      <Filters filters={insightPageFilters} />
      <div className=" container mx-auto px-4 pt-10 pb-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 md:col-start-5 md:col-span-8 lg:col-start-5 lg:col-span-6">
            <Card
              title={"Fünf Kreative und ihre BÜrosessel"}
              description={"Sesselwechsel auch ohne Jobwechsel."}
              buttonText={"Weiterlesen"}
              size={"small"}
            />
          </div>
          <div className="col-span-3 md:col-span-3 lg:col-span-3">
            <Card
              title={"Heureka"}
              description={
                "Den einen bläst sie auf 3000 Metern entgegen, den anderen kommt sie beim Kartoffelschälen und wieder anderen beim Anblick eines schlafenden Prinzen: Die beste Idee."
              }
              buttonText={"Weiterlesen"}
              size={"large"}
            />
          </div>
          <div className="col-span-5 md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-5">
            <Card
              title={"Heureka"}
              description={
                "Den einen bläst sie auf 3000 Metern entgegen, den anderen kommt sie beim Kartoffelschälen und wieder anderen beim Anblick eines schlafenden Prinzen: Die beste Idee."
              }
              buttonText={"Weiterlesen"}
              size={"small"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-28 pt-24 pb-24 p-5">
        <div>KATEGORIEN</div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
          {cards2.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              headline={card.headline}
              covered={true}
              imageCard={false}
              buttonText={card.buttonText}
              btnWidth={150}
              btnBgColor={"#ffffff"}
              btnTextColor={"#000000"}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <div className="pb-20">Weitere Artikel</div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-24">
            {cards3.map((card) => (
              <Card
                key={card.id}
                description={card.description}
                size={card.size}
                componentStyle={{ width: 250, minHeight: 250 }}
              />
            ))}
          </div>
          <div className="p-20">
            <Button onButtonClick={() => {}} width={200}>
              weiter zu insights
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights
