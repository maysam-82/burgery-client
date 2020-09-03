import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sample-burgery.firebaseio.com/',
});

export default instance;
