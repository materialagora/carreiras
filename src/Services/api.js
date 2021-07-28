import axios from 'axios'

const api = axios.create({
    baseURL: `https://www.superheroapi.com/api/${process.env.REACT_APP_TOKEN_HEROESAPI}/`
})
    
export default api