"use client"
import { useParams } from "next/navigation"
import StoryDetail from "@/components/StoryDetail"
import { useEffect, useState } from "react"
import Api from "@/api"

const Page = () => {
  const params = useParams()
  const id = params.articleId

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

  const fetchArticle = (id) => {
    Api.getArticle(id)
      .then((res) => {
        setArticle(res.data[0])
      })
      .catch((err) => console.log(err.message))
  }

  useEffect(() => {
    fetchArticle(id)
  }, [id])

  return (
    <StoryDetail
      back={true}
      author={article.attributes.author}
      content={article.attributes.content}
      imageUrl={article.attributes.image.path.data.attributes.url}
      subTitle={article.attributes.header.subTitle}
      title={article.attributes.header.title}
    />
  )
}

export default Page
