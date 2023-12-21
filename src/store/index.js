import { createStore } from 'vuex'
import usuariosStore from './usuarios'
import bitacoraStore from './bitacora'
export default createStore({
    modules: {
        usuarios: usuariosStore,
        bitacora: bitacoraStore,
    },
})
