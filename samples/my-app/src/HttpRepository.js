import axios from 'axios';

class HttpRepository{
    get(url){
        let result =  axios.get(url).then(response => {
            return response.data;
        });

        return result;
    }
}

export default HttpRepository;