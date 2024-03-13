"use client"
import Link from "next/link"
import { chunkArray } from "../utils/arrayChunks"
import Button from "./Button"
import Card from "./Card"

const ArticlesLayout = ({ data, lang }) => {
  return (
    <div className="flex flex-col items-center gap-20 pt-16">
      {chunkArray(data).map((items, index) => (
        <div
          key={index}
          className="flex gap-10 flex-wrap items-center justify-center"
        >
          {items.map((item, index) => (
            <Link key={index} href={`/${lang}/insights/article/${item.id}`}>
              <Card
                description={item?.attributes?.header?.title}
                size={"small"}
                componentStyle={{ width: 250, minHeight: 250 }}
                imageUrl={item?.attributes?.image?.path?.data?.attributes?.url}
              />
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ArticlesLayout
