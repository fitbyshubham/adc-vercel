"use client"
import Image from "next/image"
import Text from "@/components/Text"
import Button from "@/components/Button"
import Card from "@/components/Card"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Api from "@/api"
import config from "@/apiConfig"
import Link from "next/link"

const Detail = ({ content, img, cardTitle, cardDescription, size }) => {
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

const cards2 = [
  {
    id: 1,
    description: "Mode, die einem nur im Traum einfällt",
    size: "small",
  },
  {
    id: 2,
    description: "Fünf Kreative und ihre Bürosessel",
    size: "small",
  },
  {
    id: 3,
    description: "Sesselwechsel auch ohne Jobwechsel.",
    size: "small",
  },
  {
    id: 4,
    description: "Origineller mit Yoga",
    size: "small",
  },
  {
    id: 5,
    description: "Origineller mit Yoga",
    size: "small",
  },
  {
    id: 6,
    description: "Origineller mit Yoga",
    size: "small",
  },
  {
    id: 7,
    description: "Mode, die einem nur im Traum einfällt",
    size: "small",
  },
  {
    id: 8,
    description: "Mode, die einem nur im Traum einfällt",
    size: "small",
  },
]

const StoryDetail = () => {
  const date = "Dezember 2023"
  const imgInfo1 =
    "Charakteristisch für das Hôtel des Horlogers ist die avantgardistische, zickzackförmige Architektur, die der Topografie des Vallée de Joux folgt."

  const [article, setArticle] = useState({
    id: "",
    attributes: {
      author: "",
      content: "",
      group: "",
      header: {
        title: "",
        subTitle: "",
      },
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
    },
  })

  const router = useRouter()

  const params = useParams()
  const id = params.articleId

  const [articles, setArticles] = useState([])

  const fetchArticles = async (page = 1) => {
    Api.getArticles(page, 8)
      .then((res) => {
        setArticles(res.data)
        setLoading(false)
      })
      .catch(console.log)
  }

  const fetchArticle = (id) => {
    Api.getArticle(id)
      .then((res) => setArticle(res.data))
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    fetchArticle(id)
    fetchArticles()
  }, [id])

  return (
    <div className="flex flex-col items-center ">
      <button className="pt-28" onClick={() => router.back()}>
        BACK
      </button>
      <Image
        src={
          config.IMAGE_API_URL +
          article.attributes.image.path.data.attributes.url
        }
        alt="Img"
        width={200}
        height={200}
        className="p-10 w-[45rem] max-md:w-[21rem]  max-sm:w-[14rem] h-[45rem] max-md:h-[21rem]  max-sm:h-[14rem] object-cover"
      />
      <div className="text-center flex flex-col items-center">
        <Text twClassName="text-[120px] leading-none max-md:text-[55px] w-[63rem] max-md:w-[41rem] max-sm:w-[335px]">
          {article.attributes.header.title}
        </Text>
        <Text
          capitalize={true}
          twClassName={
            "text-[34px] max-md:text-[22px] w-[53rem] max-md:w-[41rem] max-sm:w-[335px]"
          }
        >
          {article.attributes.header.subTitle}
        </Text>
        <div className="p-10 flex gap-10 items-center">
          <Text>{article.attributes.author}</Text>
          <Text>{date}</Text>
          <div className="max-sm:hidden">
            <Button primaryBtn={true} bgColor={"#000000"} width={120}>
              concious
            </Button>
          </div>
        </div>
        <div className="sm:hidden">
          <Button primaryBtn={true} bgColor={"#000000"} width={120}>
            concious
          </Button>
        </div>
      </div>
      <div className="lg:container pt-10">
        <Detail
          content={article.attributes.content}
          cardDescription={imgInfo1}
          size={"small"}
        />
        <Text twClassName={"pt-10 pb-10 text-[24px]"}>
          Die Unvergänglichkeit
        </Text>
        <Detail
          content={article.attributes.content}
          cardTitle={"SILVIA AFFOLTER"}
          cardDescription={imgInfo1}
          size={"large"}
        />
      </div>
      <div className="p-20 max-md:p-5 self-start max-md:self-center">
        <div className="bg-[#EAEAEA] rounded-lg p-10 flex flex-col gap-5 w-[750px] max-md:w-[508px] max-sm:w-[335px]">
          <Text>www.hoteldeshorlogers.com, DZ ab CHF 370</Text>
          <Button primaryBtn={true} bgColor={"#000000"} width={200}>
            ZUR HOTEL WEBSITE
          </Button>
        </div>
      </div>

      {/* <ArticlesLayout items={cards2} /> */}
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-24">
        {articles.map(({ attributes, id }, idx) => (
          <Link key={idx} href={`/insights/article/${id}`}>
            <Card
              description={attributes.header.title}
              size="small"
              imageUrl={attributes?.image?.path.data.attributes.url}
              componentStyle={{ width: 250, minHeight: 250 }}
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
