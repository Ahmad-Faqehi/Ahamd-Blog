import axios from "axios";
console.log(process.env.AHMAD)
const Api = axios.create({
    baseURL: 'http://api.iepes.site/api'
})
export default Api;