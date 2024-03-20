"use client"
import Link from "next/link"
import { chunkArray } from "../utils/arrayChunks"
import Card from "./Card"
import Button from "./Button"
import Text from "./Text"

const ArticlesLayout = ({ headline, data, lang, handleClick }) => {
  return (
    <div className="flex flex-col items-center gap-[100px]">
      <Text className={headline ? "" : "hidden"}>{headline}</Text>
      <div className="flex flex-col items-center gap-20 max-lg:hidden">
        {chunkArray(data).map((items, index) => (
          <div key={index} className="flex items-start  gap-[100px]">
            {items.map((item, index) => (
              <Link
                key={index}
                href={`/${lang}/insights/article/${item?.attributes?.slug}`}
              >
                <Card
                  title={item?.attributes?.header?.title}
                  titleStyle={{ fontSize: "16px" }}
                  size={"small"}
                  imageUrl={
                    item?.attributes?.image?.path?.data?.attributes?.url
                  }
                  className="w-[261px] md:w-[200px]"
                  componentStyle={{ minHeight: "18rem" }}
                />
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex max-sm:justify-center lg:hidden">
        <div className="grid sm:grid-cols-3 grid-cols-2 lg:gap-20 sm:gap-[20px] gap-[30px] lg:pt-16 ">
          {data.map((item, index) => (
            <Link
              key={index}
              href={`/${lang}/insights/article/${item?.attributes?.slug}`}
            >
              <Card
                title={item?.attributes?.header?.title}
                size={"small"}
                componentStyle={{ minHeight: 100 }}
                imageUrl={item?.attributes?.image?.path?.data?.attributes?.url}
                imageClassName="max-md:w-[105px] max-md:h-[105px]"
                className="w-[250px] max-md:w-[136px]"
                titleClassName="sm:text-base text-[14px]"
              />
            </Link>
          ))}
        </div>
      </div>
      <Button
        onButtonClick={handleClick}
        className={handleClick ? "mb-20" : "hidden"}
        width={200}
        bgColor={"black"}
        textColor={"white"}
      >
        weiter zu insights
      </Button>
    </div>
  )
}

export default ArticlesLayout
