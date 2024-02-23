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
            '?populate=heading,heading.poster,cards1,cards1.button,cards1.image.url,headline1.images,headline1.images.url,cards2.button,cards2.image,cards2.image.url,headline2.images.url,headline3.images,headline3.images.url'
          )
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
}
