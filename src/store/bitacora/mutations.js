export const setBitacoras = (state, bitacoras) => {
    state.bitacoras = [...state.bitacoras, ...bitacoras]
}

export const addBitacora = (state, bitacora) => {
    state.bitacoras = [...state.bitacoras, bitacora]
}

export const updateBitacora = (state, bitacora) => {
    //Buscamos el indice de la BITACORA que vamos a actualizar en el array de bitacoras del state
    //y actualizamos la bitacora
    //Object.assign({},state.bitacoras[index], bitacora) -> crea un nuevo objeto con las propiedades del objeto
    const index = state.bitacoras.map(bitacora => bitacora.id).indexOf(bitacora.id);
    state.bitacoras[index] = Object.assign({}, state.bitacoras[index], bitacora);
}

export const deleteBitacora = (state, id) => {
    const index = state.bitacoras.map(bitacora => bitacora.id).indexOf(id);
    state.bitacoras.splice(index, 1);
}