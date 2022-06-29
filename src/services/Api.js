import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: "http://ec2-54-167-49-153.compute-1.amazonaws.com:3000/",
    headers: {
      'Content-type': 'application/json'
    }
  })
}
