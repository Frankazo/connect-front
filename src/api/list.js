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

export const showList = (user) => {
  return axios({
    url: apiUrl + '/lists',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
