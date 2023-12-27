import { loginUser, decodeUserToken, handleLoginError, endLogin } from "@/Helpers/helperFunctions";
import { clienteModyo } from "@/api/cliente_axios";

//Esta funcion llama a la api de modyo y obtiene las entradas de usuarios email,nombre,tareas etc..
export const getUsuariosModyo = async ({ commit, state }, userEmail) => {
    try {

        const response = await clienteModyo.get();
        const usuariosModyo = response.data.entries;//Obtiene los usuarios de la api de modyo ;
        commit("setUsuarios", usuariosModyo); //Guarda los usuarios en el state para poder acceder a ellos
        // Busca al usuario con el mismo email
        const usuario = usuariosModyo.find(usuario => usuario.fields.email === userEmail);

        if (usuario) {
            commit("setUsuario", usuario);
            localStorage.setItem('user_back', JSON.stringify(usuario))
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
    commit('setLoading', true);
    commit('setErrorLogin', false);

    try {
        const userToken = await loginUser(credentials);
        commit("setToken", userToken);
        commit("setIsAuthenticated", true);

        const usuarioLogueado = decodeUserToken(userToken);
        commit("setUsuarioLogueado", usuarioLogueado);

        await dispatch("getUsuariosModyo", usuarioLogueado.userEmail);

        return usuarioLogueado.userEmail;
    } catch (error) {
        handleLoginError(commit, error);
        return error;
    } finally {
        endLogin(commit);
    }
}


//logout
export const logout = ({ commit }) => {
    commit("setUsuarioLogueado", {});
    commit("setToken", '');
    commit("setIsAuthenticated", false);
    commit("setUsuario", {});
    localStorage.removeItem('token');
    localStorage.removeItem('user_back');
    localStorage.removeItem('usuarioLogueado');
}

