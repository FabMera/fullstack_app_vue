export default {
    getUsuariosModyoApi(state) {
        return state.usuariosModyo;
    },
    getUsuario(state) {
        return state.usuario;
    },
    getUsuarioLogueado(state) {
        return state.usuarioLogueado;
    },
    getToken(state) {
        return state.token;
    },
    getError(state) {
        return state.error;
    },
    getErrorMessage(state) {
        return state.errorMessage;
    },
    getLoading(state) {
        return state.loading;
    },
    getIsAuthenticated(state) {
        return state.isAuthenticated;
    }
}