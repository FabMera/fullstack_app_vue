export const setUsuarios = (state, payload) => {
    state.usuariosModyo = payload;
};
export const setUsuario = (state, payload) => {
    state.usuario = payload;
};
export const setUsuarioLogueado = (state, payload) => {
    state.usuarioLogueado = payload;
};
export const setToken = (state, payload) => {
    state.token = payload;
};
export const setErrorLogin = (state, payload) => {
    state.errorLogin = payload;
};
export const setErrorMessage = (state, payload) => {
    state.errorMessage = payload;
};
export const setLoading = (state, payload) => {
    state.loading = payload;
};
export const setIsAuthenticated = (state, payload) => {
    state.isAuthenticated = payload;
};
export const togglePerfil = (state) => {
    state.showPerfil = !state.showPerfil;
}
export const setShowPerfil = (state, show) => {
    state.showPerfil = show
}