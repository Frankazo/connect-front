import apiUrl from '../apiConfig'
import axios from 'axios'

export const createList = (list, user) => {
  return axios({
    url: apiUrl + '/lists',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { list }
  })
}

export const showList = () => {
  return axios({
    url: apiUrl + '/lists',
    method: 'GET'
  })
}
