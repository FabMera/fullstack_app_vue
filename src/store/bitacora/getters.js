export const getBitacoraById = (state) => (id = '') => {
    const bitacora = state.bitacoras.find(bitacora => bitacora.id === id);
    if (!bitacora) return;
    return { ...bitacora }

}