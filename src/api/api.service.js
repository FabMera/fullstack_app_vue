import { clienteSpring } from './cliente_axios';


export const register = async (credentials) => {
    try {
        const response = await clienteSpring.post('/users', credentials);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        console.log(error.response.data);
        throw error.response.data;
    }
}

