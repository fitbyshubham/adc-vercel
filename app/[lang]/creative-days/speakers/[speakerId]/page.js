"use client"
import Button from "@/components/Button"
import Text from "@/components/Text"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import moment from "moment"
import { creativeDaysFilters } from "@/utils/filters"
import Filters from "@/components/Filters"
import Api from "@/api"
import Loading from "@/components/Loading"
import { clientUrl } from "@/config"
import config from "@/apiConfig"

const Speaker = ({ params }) => {
  const [speaker, setSpeaker] = useState(null)
  const lang = params?.lang
  const speakerId = params?.speakerId
  const pages = creativeDaysFilters(lang)

  const fetchSpeaker = async (slug) => {
    Api.getSpeaker({ lang, slug })
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setSpeaker(res.data[0])
        }
      })
      .catch(console.error)
  }

  useEffect(() => {
    fetchSpeaker(speakerId)
  }, [speakerId])

  if (!speaker) return <Loading size="lg" center />

  return (
    <div className="pt-20">
      <Filters filters={pages} />
      <div className="flex xl:px-[103px] flex-col md:p-[30px] p-[20px] gap-[102px]">
        <div className=" w-full flex flex-col items-center gap-[50px]">
          <Text twClassName="lg:text-[120px] text-center sm:text-lg text-xm xl:leading-[120px] leading-none">
            {speaker?.attributes.header.title}
          </Text>
          <Text twClassName="text-center">
            {`${speaker.attributes?.location}, ${moment(speaker.attributes?.dateAndTime).format("DD, MMM")}`}
          </Text>
          <Text capitalize={true} twClassName="text-center">
            {speaker?.attributes.header.subTitle}
          </Text>
          <Button primaryBtn={true} bgColor={"#000000"} width={187}>
            {speaker?.attributes.button?.text || "Jetzt anmelden"}
          </Button>
        </div>
        <div className="flex justify-start gap-8 w-full">
          <Image
            src={
              config.IMAGE_API_URL +
              speaker.attributes.image?.path.data.attributes.url
            }
            alt="Speaker"
            className="xl:w-full w-[382px] aspect-square h-full"
            height={200}
            width={200}
          />
          <div className="flex flex-col gap-8">
            <Text fontSize={24} twClassName="leading-tight font-medium">
              {speaker.attributes.name}
            </Text>
            <Text capitalize={true} fontSize={16} twClassName={"font-medium"}>
              {speaker.attributes?.occupation}
            </Text>
            <p className="text-xs">{speaker.attributes.description}</p>
            <div className="flex gap-3 text-xxs pt-3">
              <Link href={speaker.attributes?.linkedinLink}>
                {"LinkedIn".toUpperCase()}
              </Link>
              <Link href={speaker.attributes?.websiteLink}>
                {"website".toUpperCase()}
              </Link>
              <Link href={speaker.attributes?.instagramLink}>
                {"Instagram".toUpperCase()}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speaker
