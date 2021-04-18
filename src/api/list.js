import apiUrl from '../apiConfig'
import axios from 'axios'

export const createList = (user) => {
  return axios({
    url: apiUrl + '/lists',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      list: {
        title: 'My List',
        customURL: `www.websitename.com/${user.token}`
      }
    }
  })
}

export const showList = () => {
  return axios({
    url: apiUrl + '/lists',
    method: 'GET'
  })
}
