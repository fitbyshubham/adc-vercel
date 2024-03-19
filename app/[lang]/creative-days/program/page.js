"use client"
import Button from "@/components/Button"
import Text from "@/components/Text"
import Image from "next/image"

import Api from "@/api"
import expend from "@/assets/icons/expend.png"
import line from "@/assets/icons/line.png"
import right_arrow from "@/assets/icons/right_arrow.png"
import no_image_found from "@/assets/images/bildschirmfoto.png"
import Card from "@/components/Card"
import Filters from "@/components/Filters"
import Loading from "@/components/Loading"
import { creativeDaysFilters } from "@/utils/filters"
import Link from "next/link"
import { useEffect, useState } from "react"

const ProgramView = ({ params }) => {
  const [activities, setActivities] = useState(null)
  const lang = params?.lang

  const fetchPrograms = async () => {
    Api.getActivities({ lang })
      .then((res) => {
        setActivities(res.data)
      })
      .catch(console.error)
  }

  useEffect(() => {
    fetchPrograms()
  }, [])

  if (!activities) return <Loading size="lg" center />

  return (
    <div className="pt-[100px] max-md:pt-[100px] flex flex-col md:gap-y-[100px]">
      <Filters filters={creativeDaysFilters(lang)} />
      <ProgramFilter data={activities} lang={lang} />
    </div>
  )
}

const Program = ({ slug, title, time, lang }) => {
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
          href={`/${lang}/creative-days/program/${slug}`}
        >
          <Image src={right_arrow} alt="Arrow" className="w-2 h-2" />
        </Link>
      </div>
    </div>
  )
}

const ProgramDays = ({ data, lang }) => {
  const [openedProgram, setOpenedProgram] = useState(data[0]?.attributes?.slug)

  const handleOpen = (id) => {
    if (id === openedProgram) setOpenedProgram(null)
    else setOpenedProgram(id)
  }

  return (
    <div className="lg:w-[751px] xl:ml-[100px] lg:ml-[30px] ml-0 w-full">
      {data.map(({ attributes, id }) => {
        return (
          <div key={id}>
            <div className="border-b-2 border-black pb-5 pt-5 flex justify-between">
              <Text>{attributes.date}</Text>
              {openedProgram === attributes?.slug ? (
                <div
                  className="w-[30px] h-[30px] p-2 bg-black flex items-center rounded-full"
                  onClick={() => handleOpen(attributes?.slug)}
                >
                  <Image src={line} alt="Line" />
                </div>
              ) : (
                <div
                  className="w-[30px] h-[30px] p-2 bg-black flex items-center rounded-full"
                  onClick={() => handleOpen(attributes?.slug)}
                >
                  <Image src={expend} alt="Expend" />
                </div>
              )}
            </div>
            <div
              className={`transition-opacity duration-300 ${
                openedProgram === attributes?.slug ? "" : "hidden"
              }`}
            >
              <div
                className={
                  attributes?.programs.data
                    ? "border-b-2 border-black pt-5 pb-5"
                    : ""
                }
              >
                {attributes?.programs?.data?.map(({ attributes }) => (
                  <Program
                    key={attributes.slug}
                    slug={attributes.slug}
                    time={attributes?.time}
                    title={attributes?.title}
                    lang={lang}
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

const ProgramFilter = ({ data, lang }) => {
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
          <ProgramDays data={data} lang={lang} />
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

export default ProgramView
