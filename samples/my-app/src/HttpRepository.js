import axios from 'axios';

class HttpRepository {
    get(url){
        return axios.get(url).then(response =>{
            return response.data;
        });
    }
}

export default HttpRepository;