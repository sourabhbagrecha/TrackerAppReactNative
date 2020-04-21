import Axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = Axios.create({
  baseURL: "http://e1f6b5f2.ngrok.io"
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => Promise.reject(err)
);

export default instance;