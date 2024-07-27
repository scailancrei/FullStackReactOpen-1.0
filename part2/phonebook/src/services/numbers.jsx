import axios from "axios"
const baseurl = "/api/persons"

const getNumbers = () => {
  return axios.get(`${baseurl}/api/persons`)
}

const getName = (id) => {
  return axios.get(`${baseurl}/api/persons/${id}`)
}
const sendNumbers = (object) => {
  return axios.post(`${baseurl}/api/persons`, object)
}

const deleteNumbers = (id) => {
  return axios.delete(`${baseurl}/${id}`)
}

const updateNumber = (id, object) => {
  return axios.put(`${baseurl}/${id}`, object)
}

export default {
  getNumbers: getNumbers,
  getName: getName,
  sendNumbers: sendNumbers,
  deleteNumbers: deleteNumbers,
  updateNumber: updateNumber,
}
