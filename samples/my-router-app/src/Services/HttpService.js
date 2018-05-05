import axios from 'axios'

class HttpService {

    post(url,model){        
        return axios.post(url,model).then(response=>{
            return response.data;
        });
    }
}

export default HttpService;