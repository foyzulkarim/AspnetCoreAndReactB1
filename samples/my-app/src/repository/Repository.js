import axios from 'axios'

class Repository {
    get(url){
        return axios.get(url)
        .then(res => {
            const persons = res.data;
            console.log(persons);
            return res.data;
        });
    }
}

export default Repository;