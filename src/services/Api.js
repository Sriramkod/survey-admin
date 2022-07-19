import axios from 'axios'

export default () => {
  return axios.create({
    //baseURL: "http://34.227.74.196:3000/",
    baseURL: "http://localhost:3000/",
    headers: {
      'Content-type': 'application/json'
    }
  })
}
