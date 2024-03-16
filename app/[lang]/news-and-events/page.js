"use client"
import { useState, useEffect } from "react"
import Search from "@/components/Search"
import Card from "@/components/Card"
import Button from "@/components/Button"
import Api from "@/api"
import Text from "@/components/Text"
import Loading from "@/components/Loading"
import moment from "moment"
import Link from "next/link"
import { useRouter } from "next/navigation"

const NewsAndEvents = ({ params }) => {
  const lang = params?.lang
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [text, setText] = useState("")
  const [newsEvents, setNewsEvents] = useState(null)
  const [meta, setMeta] = useState({})

  const router = useRouter()

  const fetchNewsEventsData = (text = "", page, prevNewsEventsData = []) => {
    setLoading(true)
    Api.getNewsEvents({ lang, text, page, pageSize: 8 })
      .then((res) => {
        if (prevNewsEventsData) {
          setNewsEvents([...prevNewsEventsData, ...res.data])
        } else setNewsEvents(res.data)
        setMeta(res.meta)
        setLoading(false)
      })
      .catch(console.log)
  }

  useEffect(() => {
    fetchNewsEventsData()
  }, [])

  const handleSearch = (text) => {
    setPage(1)
    fetchNewsEventsData(text, 1)
  }

  const handleShowMore = () => {
    setPage(page + 1)
    fetchNewsEventsData(text, page + 1, newsEvents)
  }

  return (
    <div className="flex flex-col items-center p-[20px]">
      <div className="p-20 pt-28">
        <Search text={text} setText={setText} handleSearch={handleSearch} />
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-8">
          {newsEvents &&
            newsEvents.map(({ attributes, id }) => (
              <Link
                key={attributes?.slug}
                href={`/${lang}/news-and-events/${attributes?.slug}`}
              >
                <Card
                  title={attributes.title}
                  heading={moment(attributes.date).format("DD.MM.YYYY")}
                  covered={true}
                  imageCard={Boolean(attributes?.image)}
                  imageUrl={attributes?.image?.path?.data.attributes.url}
                  buttonText="WEITERLESEN"
                  btnWidth={150}
                  btnBgColor={"#ffffff"}
                  btnTextColor={"#000000"}
                  onButtonClick={() =>
                    router.push(`/${lang}/news-and-events/${id}`)
                  }
                />
              </Link>
            ))}
        </div>
      </div>
      <div className="p-16">
        {newsEvents && newsEvents.length === 0 ? (
          <Text fontSize={18}>No result found!</Text>
        ) : (
          <div
            className={`p-5 ${
              meta?.pagination?.pageCount === page ? "hidden" : ""
            }`}
          >
            {loading ? (
              <div className="h-[200px] flex justify-center items-center">
                <Loading size="md" />
              </div>
            ) : (
              <Button width={200} onButtonClick={handleShowMore}>
                <Text>weitere anzeigen</Text>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsAndEvents
