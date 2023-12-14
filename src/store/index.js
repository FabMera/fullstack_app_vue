import { createStore } from 'vuex'
import usuariosStore from './usuarios'
export default createStore({
    modules: {
        usuarios: usuariosStore,
    },
})
