"use client"
import Api from "@/api"
import Card from "@/components/Card"
import Filters from "@/components/Filters"
import Loading from "@/components/Loading"
import Text from "@/components/Text"
import Link from "next/link"
import { creativeDaysFilters } from "@/utils/filters"
import React, { useEffect, useState } from "react"

const Speakers = ({ params }) => {
  const [speakers, setSpeakers] = useState(null)
  const lang = params?.lang
  const pageId = "speakers"
  const pages = creativeDaysFilters(lang)
  const pageInfoIndex = pages.map((page) => page.id).indexOf(pageId)
  const pageInfo = pages[pageInfoIndex]

  const fetchSpeakers = async () => {
    Api.getSpeakers({ lang })
      .then((res) => {
        setSpeakers(res.data)
      })
      .catch(console.error)
  }

  useEffect(() => {
    fetchSpeakers()
  }, [])

  if (!speakers) return <Loading size="lg" center />

  return (
    <div className="pt-[100px] flex flex-col items-center gap-[100px]">
      <Filters filters={pages} />
      <Text>ALLE SPEAKERS</Text>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[100px]">
        {speakers.map(({ attributes, id }) => (
          <Link href={`${pageInfo.path}${pageId}/${attributes.slug}`} key={id}>
            <Card
              imageCard={true}
              className="w-[308px] max-md:w-[200px]"
              imageUrl={attributes.image?.path?.data.attributes.url}
              name={attributes.name}
              title={attributes.header.title}
              description={attributes.location}
              titleStyle={{ fontSize: 24 }}
              descriptionStyle={{ fontSize: 12 }}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Speakers
