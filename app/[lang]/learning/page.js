"use client"
import React, { useEffect, useState } from "react"
import Filters from "@/components/Filters"
import Info from "@/components/Info"
import Impressionen from "@/components/Impressionen"
import { learningFilters } from "@/utils/filters"
import Api from "@/api"
import { chunkArray2 } from "@/utils/arrayChunks"
import InsightCard from "@/components/InsightsCard"

const Learning = () => {
  const [data, setData] = useState([
    [
      {
        id: "",
        attributes: {
          button: {
            text: "",
          },
          card: {
            description: "",
            id: 13,
            image: {
              visible: true,
              path: {
                data: {
                  attributes: {
                    url: "",
                  },
                },
              },
            },
            position: "",
            size: "",
            title: "",
          },
        },
      },
    ],
  ])
  const [note, setNote] = useState({
    attributes: {
      note: {
        title: "",
        description: "",
        button: {
          text: "",
        },
      },
    },
  })
  useEffect(() => {
    Api.getLearningPageCards()
      .then((res) => {
        console.log(res.data)
        setData(chunkArray2(res.data))
      })
      .catch((err) => console.log(err))
    Api.getLearningPageNote()
      .then((res) => {
        setNote(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="pt-32">
      <Filters filters={learningFilters} />
      <div className="flex sm:flex-col flex-row overflow-scroll p-[20px] no-scrollbar sm:gap-[100px] gap-[20px] sm:mt-[100px] w-full">
        {data.map((arr, idx) => (
          <div
            className="flex sm:flex-col flex-row md:flex-row lg:gap-[100px] gap-[20px] mx-auto relative"
            key={idx}
          >
            {arr.map((item, idx) => (
              <InsightCard
                key={idx}
                title={item.attributes.card.title}
                description={item.attributes.card.description}
                buttonText={"Weiterlesen"}
                size={item.attributes.card.size}
                className={"bg-green-500"}
                imageUrl={item.attributes.card.image.path.data.attributes.url}
                position={item.attributes.card.position}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center p-28 max-sm:p-5">
        <Info
          title={note.attributes.note.title}
          description={note.attributes.note.description}
          btnTitle={note.attributes.note.button.text}
        />
      </div>
      <Impressionen />
    </div>
  )
}

export default Learning
