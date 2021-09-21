import axios from "axios";

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

const Api = axios.create({
    baseURL: 'http://api.iepes.site/api'
})
export default Api;