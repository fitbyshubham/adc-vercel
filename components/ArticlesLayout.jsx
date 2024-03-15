"use client"
import Link from "next/link"
import { chunkArray } from "../utils/arrayChunks"
import Card from "./Card"

const ArticlesLayout = ({ data, lang }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-20 pt-16 max-lg:hidden">
        {chunkArray(data).map((items, index) => (
          <div key={index} className="flex gap-10 items-center">
            {items.map((item, index) => (
              <Link
                key={index}
                href={`/${lang}/insights/article/${item?.attributes?.slug}`}
              >
                <Card
                  description={item?.attributes?.header?.title}
                  size={"small"}
                  imageUrl={
                    item?.attributes?.image?.path?.data?.attributes?.url
                  }
                  className="w-[200px] md:w-[200px] min-h-[150px]"
                />
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex max-sm:justify-center">
        <div className="grid sm:grid-cols-3 grid-cols-2 lg:gap-20 sm:gap-[20px] gap-[30px] lg:pt-16 lg:hidden">
          {data.map((item, index) => (
            <Link
              key={index}
              href={`/${lang}/insights/article/${item?.attributes?.slug}`}
            >
              <Card
                description={item?.attributes?.header?.title}
                size={"small"}
                componentStyle={{ minHeight: 100 }}
                imageUrl={item?.attributes?.image?.path?.data?.attributes?.url}
                imageClassName="max-md:w-[105px] max-md:h-[105px]"
                className="w-[250px] max-md:w-[136px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default ArticlesLayout
