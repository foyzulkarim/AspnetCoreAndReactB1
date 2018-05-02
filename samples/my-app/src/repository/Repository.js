import axios from 'axios'

class Repository {
    get(url){
        return axios.get(url)
        .then(res => {            
            return res.data;
        });
    }
}

export default Repository;