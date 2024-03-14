"use client"
import Api from "@/api"
import config from "@/apiConfig"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Button from "./Button"
import Card from "./Card"
import MarkdownText from "./MarkdownText"
import Text from "./Text"

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
  lang,
}) => {
  const imgInfo1 =
    "Charakteristisch für das Hôtel des Horlogers ist die avantgardistische, zickzackförmige Architektur, die der Topografie des Vallée de Joux folgt."

  const router = useRouter()

  const [articles, setArticles] = useState([])

  const fetchArticles = async (page = 1) => {
    Api.getArticles({ page, pageSize: 8, lang })
      .then((res) => {
        setArticles(res.data)
        setLoading(false)
      })
      .catch(console.log)
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div className="flex flex-col gap-y-5 items-center ">
      {back && (
        <button className="pt-28" onClick={() => router.back()}>
          BACK
        </button>
      )}
      <Image
        src={config.IMAGE_API_URL + imageUrl}
        alt="Img"
        width={200}
        height={200}
        className="w-[217px] h-[217px] sm:w-[387px] sm:h-[387px] object-cover"
      />
      <div className="text-center flex flex-col gap-y-5 items-center w-full">
        <Text twClassName="lg:text-[120px] sm:text-[55px] text-[30px] xl:leading-[120px] leading-none">
          {title}
        </Text>
        <Text
          capitalize={true}
          twClassName={
            "md:text-[34px] text-[22px] w-[53rem] max-md:w-[41rem] max-sm:w-[335px] w-full"
          }
        >
          {subTitle}
        </Text>
        <div className="p-10 flex gap-10 items-center">
          <Text>{author}</Text>
          <Text>{moment(date).format("MMMM YYYY")}</Text>
          <div className="max-sm:hidden">
            <Button primaryBtn={true} bgColor={"#000000"} width={120}>
              {category}
            </Button>
          </div>
        </div>
        <div className="sm:hidden">
          <Button primaryBtn={true} bgColor={"#000000"} width={120}>
            {category}
          </Button>
        </div>
      </div>
      <div className="lg:container w-full px-5 pt-10">
        <MarkdownText fontSize={22}>{content}</MarkdownText>
      </div>
      <div className="md:p-20 p-5 self-start max-md:self-center w-full">
        <div className="bg-[#EAEAEA] rounded-lg p-10 flex flex-col gap-5 lg:w-[750px] md:w-[508px] w-[335px]">
          <Text>www.hoteldeshorlogers.com, DZ ab CHF 370</Text>
          <Button primaryBtn={true} bgColor={"#000000"} width={200}>
            ZUR HOTEL WEBSITE
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-24">
        {articles.map(({ attributes, id }) => (
          <Link key={id} href={`/${lang}/insights/article/${attributes.slug}`}>
            <Card
              description={attributes.header.title}
              size="small"
              imageUrl={attributes?.image?.path.data.attributes.url}
              componentStyle={{ width: 250, minHeight: 250 }}
              imageClassName="md:w-[162px] md:h-[162px] w-[92px] h-[92px]"
            />
          </Link>
        ))}
      </div>
      <div className="p-20">
        <Button
          onButtonClick={() => {}}
          width={200}
          bgColor={"black"}
          textColor={"white"}
        >
          weiter zu insights
        </Button>
      </div>
    </div>
  )
}

export default StoryDetail
