import axios from 'axios';
import { useAuthStore } from '../store/Auth/auth.store';




const tesloApi = axios.create({
  baseURL: 'http://localhost:3000/'
});


// Todo: interceptors
// Leer el store de Zustand
tesloApi.interceptors.request.use(
  (config) => {

    const token = useAuthStore.getState().token;
    // console.log({token});

    if ( token ) {
      config.headers['Authorization'] = `Bearer ${ token }`;
    }

    return config;
  }
)



export {
  tesloApi
}
