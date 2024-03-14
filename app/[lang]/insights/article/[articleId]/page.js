"use client"
import Api from "@/api"
import Loading from "@/components/Loading"
import StoryDetail from "@/components/StoryDetail"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const Page = ({ params }) => {
  const lang = params?.lang
  const id = params?.articleId

  const [article, setArticle] = useState(null)

  const fetchArticle = (id) => {
    Api.getArticle({ lang, id })
      .then((res) => setArticle(res.data[0]))
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    fetchArticle(id)
  }, [id])

  if (!article) {
    return (
      <div className="h-[50rem] w-full flex justify-center items-center">
        <Loading size="lg" />
      </div>
    )
  }

  return (
    <StoryDetail
      back={true}
      author={article.attributes?.author}
      content={article.attributes?.content}
      imageUrl={article.attributes?.image.path.data.attributes.url}
      subTitle={article.attributes?.header?.subTitle}
      title={article.attributes?.header?.title}
      category={article.attributes?.category}
      lang={lang}
    />
  )
}

export default Page
