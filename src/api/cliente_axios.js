import axios from 'axios';
import { modyoUrl, backSpring,firebaseUrl } from './backend.config';

const clienteModyo = axios.create({
    baseURL: modyoUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});

const clienteSpring = axios.create({
    baseURL: backSpring,
    headers: {
        'Content-Type': 'application/json',
    }
});

const clienteFirebase = axios.create({
    baseURL:firebaseUrl,
     
});



export { clienteModyo, clienteSpring, clienteFirebase }