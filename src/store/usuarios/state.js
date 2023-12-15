export default () => ({

    usuariosModyo: [],
    usuario: {}, //corresponde al usuario desde el backend modyo que trae las entradas del usuario logueado.
    usuarioLogueado: {}, //corresponde al usuario desde el backend spring
    token: '',
    errorLogin: false,
    errorMessage: '',
    loading: false,
    isAuthenticated: false,
    showPerfil: false,

})