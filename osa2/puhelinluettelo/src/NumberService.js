import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

//hakee kaikki yhteystiedot palvelimelta
const getAll = () => {
    return axios.get(baseUrl)

}

//luo uuden yhteystiedon ja lisää sen palvelimelle
const create = newNumber => {
    return axios.post(baseUrl, newNumber)
}

const remove = (url) => {
    return axios.delete(url)
}

const update = (url, contact) => {
    return axios.put(url, contact)
}

export default {
    getAll,
    create,
    remove,
    update
}