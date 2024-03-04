import axios from 'axios'
import config from '../apiConfig'

const axiosInstance = function (token) {
  return axios.create({
    baseURL: config.API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
    },
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomePage() {
    return new Promise((resolve, reject) => {
      axiosInstance(config.token)
        .get(
          config.HOMEPAGE.BASE.concat(
            '?populate=hero.headline,hero.poster,insights.image.path,headline1.headline.images,headline1.poster,headline2.headline.images,headline2.poster,headline3.headline.images,headline3.poster,highlightedEvents.image.path'
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
  getNewsEventsPage(name, page, pageSize = 10) {
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
}
