import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: '302a77c52c744f448627890415064e6d'
    }
})