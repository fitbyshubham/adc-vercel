"use client"
import Link from "next/link"
import { chunkArray } from "../utils/arrayChunks"
import Button from "./Button"
import Card from "./Card"

const ArticlesLayout = ({ items }) => {
  return (
    <div className="flex flex-col items-center gap-20 pt-16">
      {chunkArray(items).map((items, index) => (
        <div
          key={index}
          className="flex gap-10 flex-wrap items-center justify-center"
        >
          {items.map((card, index) => (
            <Link key={index} href="/insights/article/1">
              <Card
                description={card.description}
                size={card.size}
                componentStyle={{ width: 250, minHeight: 250 }}
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
