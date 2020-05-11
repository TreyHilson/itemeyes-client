import apiUrl from '../apiConfig'
import axios from 'axios'
export const itemShow = (id, user) => {
  return axios({
    url: apiUrl + '/items/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
