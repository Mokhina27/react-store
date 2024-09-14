import axios from "axios";

const api = axios.create({
    baseURL: 'https://dummyjson.com/docs/products/'
    
})


// const getProducts = async() => {
//     let res = await api.get('products')
//     return res.data
// baseURL: 'https://dummyjson.com/docs/'

// }

export default api