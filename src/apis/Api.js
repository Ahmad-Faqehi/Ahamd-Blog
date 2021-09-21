import axios from "axios";
const Api = axios.create({
    baseURL: 'http://api.iepes.site/api'
})
export default Api;