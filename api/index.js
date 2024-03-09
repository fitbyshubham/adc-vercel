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
        .get(config.FOOTER.BASE.concat(`?populate=supports.logo`))
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getHomePage() {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.HOMEPAGE.BASE.concat(
            "?populate=hero.circularFlowButton,insights.image.path,marquee1.headline.images,marquee1.circularFlowButton,marquee2.headline.images,marquee2.circularFlowButton,marquee3.headline.images,marquee3.circularFlowButton"
          )
        )
        .then((res) => resolve(res.data))
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
  getNewsEvents(name, page, pageSize = 10) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.NEWS_AND_EVENTS.BASE.concat(
            `?populate=image.path&filters[title][$containsi]=${name}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getArticles(page = 1, pageSize = 7) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.ARTICLES.BASE.concat(
            `?populate=image.path,header.title&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          )
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getArticle(id) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.ARTICLES.BASE.concat(`/${id}?populate=image.path,header.title`)
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
  getInsights(type) {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.API_URL.concat(
            `/insights?populate=card.image.path&filters[card][group][$containsi]=${type}`
          )
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
}
