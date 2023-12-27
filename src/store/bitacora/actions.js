import { clienteFirebase } from '@/api/cliente_axios.js';

export const loadBitacora = async ({ commit }) => {
    //Tenemos que convertir el objeto en un array
    const { data } = await clienteFirebase.get('/tareas.json');
    const bitacoras = Object.keys(data).map(id => ({
        id, ...data[id]
    }))
    commit('setBitacoras', bitacoras);
}

export const createBitacora = async ({ commit }, bitacora) => {
    const { date_create, descripcion, date_finish, estado } = bitacora;
    const newBitacora = {
        date_create,
        descripcion,
        date_finish,
        estado,
        email_user: bitacora.email_user,
    }
    //Agrega una nueva tarea a la base de datos, y retorna el id de la tarea en firebase se llama name
    const { data } = await clienteFirebase.post('/tareas.json', newBitacora);
    commit('addBitacora', { id: data.name, ...newBitacora });
}