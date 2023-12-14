import { clienteModyo, clienteSpring } from "@/api/cliente_axios";

//Esta funcion llama a la api de modyo y obtiene las entradas de usuarios email,nombre,tareas etc..
export const getUsuariosModyo = async ({ commit }, userEmail) => {
    try {
        const response = await clienteModyo.get();
        console.log(response.data.entries);
        const usuariosModyo = response.data.entries;
        commit("setUsuarios", usuariosModyo); //Guarda los usuarios en el state para poder acceder a ellos
        // Busca al usuario con el mismo email
        const usuario = usuariosModyo.find(usuario => usuario.fields.email === userEmail);

        if (usuario) {
            commit("setUsuario", usuario);
            console.log(usuario);
        } else {
            console.log("Usuario no encontrado");
        }

    } catch (error) {
        console.error(error);
        return error;
    } finally {
        console.log("Petición getUsuariosModyo finalizada");
    }
}

//Api de backend para loguearse y obtener el token
export const login = async ({ dispatch, commit }, credentials) => {

    try {
        commit('setLoading', true);
        commit('setErrorLogin', false);
        const response = await clienteSpring.post('/users/login', credentials);
        const userEmail = response.data.email;
        /*  const userToken = response.data.token; */
        const user = response.data;
        console.log(user);
        console.log(userEmail);
        /* console.log(userToken); */
        commit("setUsuarioLogueado", user);
        /* commit("setToken", userToken); */
        commit("setIsAuthenticated", true);
        await dispatch("getUsuariosModyo", userEmail);
        return userEmail;
    } catch (error) {
        console.error(error);
        console.log(error.response.data);
        commit("setIsAuthenticated", false);
        commit("setErrorLogin", true);
        commit("setErrorMessage", error.response.data);
        return error;

    } finally {
        setTimeout(() => {
            commit('setLoading', false);
        }, 2000);
        console.log("Petición login finalizada");
    }
}

//logout
export const logout = ({ commit }) => {
    commit("setUsuarioLogueado", {});
    commit("setToken", '');
    commit("setIsAuthenticated", false);
    console.log("Usuario deslogueado");
}
