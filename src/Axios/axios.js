import axios from "axios"
const instance = axios.create({
    baseURL:"https://aniketamantimepass-production.up.railway.app/"
})
export default instance