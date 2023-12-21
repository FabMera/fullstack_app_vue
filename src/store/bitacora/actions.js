import { clienteFirebase } from '@/api/cliente_axios.js';

export const loadBitacora = async ({ commit }) => {
    //Tenemos que convertir el objeto en un array
    const { data } = await clienteFirebase.get('/tareas.json');
    const entries = [];
    for (let id of Object.keys(data)) {
        entries.push({ id, ...data[id] });
    }
    commit('setBitacoras', entries);
}