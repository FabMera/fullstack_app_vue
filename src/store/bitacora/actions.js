import { clienteFirebase } from '@/api/cliente_axios.js';

export const loadBitacora = async ({ commit }) => {
    //Tenemos que convertir el objeto en un array
    const { data } = await clienteFirebase.get('/tareas.json');
   const bitacoras = Object.keys(data).map(id =>({
    id,...data[id]
   }))
    commit('setBitacoras', bitacoras);
}

export const createBitacora = async ({ commit }, bitacora) => {
}