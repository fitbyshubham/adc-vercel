"use client"
import Api from "@/api"
import ArticlesLayout from "@/components/ArticlesLayout"
import Loading from "@/components/Loading"
import StoryDetail from "@/components/StoryDetail"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const Page = ({ params }) => {
  const lang = params?.lang
  const id = params?.articleId
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)

  const fetchArticle = (id) => {
    Api.getArticle({ lang, id })
      .then((res) => setArticle(res.data[0]))
      .catch((err) => console.log(err.message))
  }

  const fetchArticles = async (page = 1) => {
    Api.getArticles({ page, pageSize: 8, lang })
      .then((res) => {
        setArticles(res.data)
      })
      .catch(console.log)
  }

  useEffect(() => {
    fetchArticle(id)
    fetchArticles()
  }, [id])

  const handleViewMore = () => {}

  if (!article) return <Loading size="lg" center />

  return (
    <div>
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
      {articles ? (
        <ArticlesLayout
          headline="Weitere Artikel"
          lang={lang}
          data={articles}
          handleClick={handleViewMore}
        />
      ) : (
        <Loading size="md" />
      )}
    </div>
  )
}

export default Page
