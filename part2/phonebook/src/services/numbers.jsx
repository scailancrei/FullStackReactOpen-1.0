import axios from "axios"
const baseurl = "http://localhost:3001/persons"
const getNumbers = () => {
  return axios.get(baseurl)
}
const sendNumbers = (object) => {
  return axios.post(baseurl, object)
}

const deleteNumbers = (id) => {
  return axios.delete(`${baseurl}/${id}`)
}

const updateNumber = (id, object) => {
  return axios.put(`${baseurl}/${id}`, object)
}

export default {
  getNumbers: getNumbers,
  sendNumbers: sendNumbers,
  deleteNumbers: deleteNumbers,
  updateNumber: updateNumber,
}
