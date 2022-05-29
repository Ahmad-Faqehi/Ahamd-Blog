import axios from "axios";

let api_url = process.env.VUE_APP_BASE_API
if(!api_url){
     api_url = 'http://project.iahmad.info/Blog/api'
    }
console.log(api_url)

const Api = axios.create({
    baseURL: api_url
})
export default Api;
