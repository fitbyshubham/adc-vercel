"use client"
import Link from "next/link"
import { chunkArray } from "../utils/arrayChunks"
import Button from "./Button"
import Card from "./Card"

const ArticlesLayout = ({ data }) => {
  console.log(data)
  return (
    <div className="flex flex-col items-center gap-20 pt-16">
      {chunkArray(data).map((items, index) => (
        <div
          key={index}
          className="flex gap-10 flex-wrap items-center justify-center"
        >
          {items.map((card, index) => (
            <Link key={index} href="/insights/article/1">
              <Card
                description={card?.attributes?.card?.title}
                size={"small"}
                componentStyle={{ width: 250, minHeight: 250 }}
                imageUrl={
                  card?.attributes?.card?.image?.path?.data?.attributes?.url
                }
              />
            </Link>
          ))}
        </div>
      ))}
      <div className="py-10">
        <Button onButtonClick={() => {}} width={160}>
          WEITERE LADEN
        </Button>
      </div>
    </div>
  )
}

export default ArticlesLayout
