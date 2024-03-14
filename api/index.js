import axios from "axios"
import config from "../apiConfig"

const axiosInstance = function (token) {
  return axios.create({
    baseURL: config.API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
    },
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getMenuContent() {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(config.MENU.BASE.concat(`?populate=*`))
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getFooterContent() {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(config.FOOTER.BASE.concat(`?populate=deep`))
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getHomePage({ lang }) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(config.HOMEPAGE.BASE.concat(`?populate=deep&locale=${lang}`))
        .then((res) => {
          const pageRes = res.data
          resolve(pageRes)
        })
        .catch((error) => reject(error))
    })
  },
  getPeoplePage(name, page, pageSize = 10) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.PEOPLE.BASE.concat(
            `?filters[name][$containsi]=${name}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getNewsEvents({ lang, text = "", page = 1, pageSize = 10 }) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.NEWS_AND_EVENTS.BASE.concat(
            `?populate=deep&locale=${lang}&filters[title][$containsi]=${text}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        )
        .then((res) => {
          const pageRes = res.data
          resolve(pageRes)
        })
        .catch((error) => reject(error))
    })
  },
  getArticles({ lang, type, page = 1, pageSize = 7, featured = false }) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.ARTICLES.BASE.concat(
            `?populate=deep&locale=${lang}${type ? `&filters[category][$containsi]=${type}` : ""}${featured ? `&filters[featured][$eq]=${featured}` : ""}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getArticle({ lang, id }) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.ARTICLES.BASE.concat(
            `?populate=deep&locale=${lang}&filters[slug][$eq]=${id}`
          )
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getLearningPageCards({ lang }) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(config.LEARNINGS.BASE.concat(`?populate=deep&locale=${lang}`))
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getLearningPageNote({ lang }) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.API_URL.concat(`/learning-page?populate=deep&locale=${lang}`)
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getCreativeDaysPage({ lang }) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(config.CREATIVE_DAYS.BASE.concat(`?populate=deep&locale=${lang}`))
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getCreativeDaysNote({ lang }) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.CREATIVE_DAYS_PAGE.BASE.concat(`?populate=deep&locale=${lang}`)
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getAwardsPage({ lang }) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(config.AWARDS_PAGE.BASE.concat(`?populate=deep&locale=${lang}`))
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getAwardsCards({ lang }) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(config.AWARDS.BASE.concat(`?populate=deep&locale=${lang}`))
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getNewsAndEvent(id) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(config.NEWS_AND_EVENTS.BASE.concat(`/${id}?populate=image.path`))
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getLearnings(slug) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.API_URL.concat(
            `/learnings/?populate=card.image.path&filters[slug][$eq]${slug}`
          )
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
}
