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
            '?populate=headline1, poster1, cards1.button, cards1.image'
          )
        )
        .then((res) => resolve(res.data))
        .catch((error) => reject(error))
    })
  },
}
