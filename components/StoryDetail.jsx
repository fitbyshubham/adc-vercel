"use client"
import Api from "@/api"
import config from "@/apiConfig"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Button from "./Button"
import Card from "./Card"
import MarkdownText from "./MarkdownText"
import Text from "./Text"
import ArticlesLayout from "./ArticlesLayout"
import instagram from "@/assets/icons/instagram.png"
import whatsapp from "@/assets/icons/whatsapp.png"
import linkedin from "@/assets/icons/linkedin.png"
import { clientUrl } from "@/config"

const Detail = ({
  content,
  img,
  cardTitle,

  cardDescription,
  size,
}) => {
  return (
    <div className="flex  max-sm:flex-col justify-between max-md:gap-5 max-sm:gap-10">
      <div
        className={
          "text-[24px] max-md:text-[22px] w-[750px] max-md:w-[460px] max-sm:w-[335px]"
        }
      >
        {content}
      </div>
      <Card
        imageCard={true}
        imageUrl={img}
        title={cardTitle}
        titleStyle={{ fontSize: "16px" }}
        descriptionStyle={{ fontSize: "15px" }}
        className={"w-[262px] max-md:w-[200px]"}
        size={size}
        description={cardDescription}
      />
    </div>
  )
}

const StoryDetail = ({
  back,
  imageUrl,
  title,
  subTitle,
  author,
  content,
  category,
  date,
  dateFormat,
  lang,
  shareable,
  reference,
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const currentUrl = clientUrl + pathname

  return (
    <div className="flex flex-col items-center pb-[100px]">
      <div className="flex flex-col sm:gap-[100px] gap-[30px] xl:w-[1100px] lg:w-[1000px] md:w-[850px] sm:w-[559px] w-[335px]">
        <div
          className={`flex flex-col ${imageUrl ? "sm:gap-[100px]" : ""} gap-[30px]  items-center`}
        >
          <div className="flex flex-col gap-[30px]">
            {back && (
              <div className={`flex justify-center pt-20`}>
                <button onClick={() => router.back()}>BACK</button>
              </div>
            )}
            {imageUrl ? (
              <Image
                src={config.IMAGE_API_URL + imageUrl}
                alt="Img"
                width={200}
                height={200}
                className={
                  "w-[217px] h-[217px] md:w-[752px] md:h-[752px] sm:w-[387px] sm:h-[387px] object-cover"
                }
              />
            ) : null}
          </div>
          <div className="text-center flex flex-col sm:gap-[50px] gap-[20px] items-center md:w-[1144px] sm:w-[728px]">
            <Text twClassName="lg:text-[120px] sm:text-[55px] text-[30px] xl:leading-[120px] leading-none">
              {title}
            </Text>
            <Text
              capitalize={true}
              twClassName={
                "md:text-[34px] text-[22px] max-md:w-[41rem] max-sm:w-[335px] md:w-[850px] w-full"
              }
            >
              {subTitle}
            </Text>
            <div className="flex sm:gap-[50px] gap-[20px] items-center">
              <Text>{author}</Text>
              <Text>{moment(date).format(dateFormat || "MMMM YYYY")}</Text>
              <div className={`max-sm:hidden ${category ? "" : "hidden"}`}>
                <Button primaryBtn={true} bgColor={"#000000"} width={120}>
                  {category}
                </Button>
              </div>
            </div>
            <Button
              primaryBtn={true}
              bgColor={"#000000"}
              width={120}
              className={`sm:hidden ${category ? "" : "hidden"}`}
            >
              {category}
            </Button>
            <div
              className={shareable ? `flex gap-[20px] items-center` : "hidden"}
            >
              <Text twClassName="text-[#B4B4B4]">share</Text>
              <Link
                href={`https://www.instagram.com/share?url=${currentUrl}`}
                target="_blank"
              >
                <Image
                  src={instagram}
                  alt="instagram"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite?url=${currentUrl}`}
                target="_blank"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  className="w-[18px] h-[18px] cursor-pointer"
                />
              </Link>
              <Link href={`whatsapp://send?text=${currentUrl}`} target="_blank">
                <Image
                  src={whatsapp}
                  alt="whatsapp"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <MarkdownText fontSize={24}>{content}</MarkdownText>
        </div>
        <div
          className={
            reference
              ? "bg-[#EAEAEA] rounded-lg p-10 flex flex-col gap-5 lg:w-[750px] md:w-[508px] w-full"
              : "hidden"
          }
        >
          <Text>www.hoteldeshorlogers.com, DZ ab CHF 370</Text>
          <Button primaryBtn={true} bgColor={"#000000"} width={200}>
            ZUR HOTEL WEBSITE
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StoryDetail
