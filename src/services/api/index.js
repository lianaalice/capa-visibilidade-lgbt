import axios from 'axios'; 

const api = axios.create({
    baseURL: "https://my-json-server.typicode.com/lianaalice/visibilidade-json/"
})


export default api;