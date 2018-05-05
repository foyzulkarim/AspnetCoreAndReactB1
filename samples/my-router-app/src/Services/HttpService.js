import axios from 'axios'

class HttpService {

    baseUrl = "";

    constructor() {
        this.baseUrl = "http://localhost:25697/";
    }

    post(url, model) {        
        return axios.post(this.baseUrl + url, model).then(response => {
            return response.data;
        });
    }

    get(url) {
        return axios.get(this.baseUrl + url).then(response => {
            return response.data;
        });
    }
}

export default HttpService;