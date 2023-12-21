import { clienteModyo, clienteSpring } from "@/api/cliente_axios";


//Esta funcion llama a la api de modyo y obtiene las entradas de usuarios email,nombre,tareas etc..
export const getUsuariosModyo = async ({ commit, state }, userEmail) => {
    try {
        clienteModyo.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
        const response = await clienteModyo.get();
        const usuariosModyo = response.data.entries;
        console.log(usuariosModyo);
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
        const userToken = response.data.token;
        localStorage.setItem('token', userToken);


        const user = response.data;
        console.log(user);
        console.log(userToken);
        commit("setUsuarioLogueado", user);
        commit("setToken", userToken);
        commit("setIsAuthenticated", true);

        //Decodifica el token y obtiene el email del usuario
        console.log("Decodificando token");
        const base64Url = userToken.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        const decodedToken = JSON.parse(jsonPayload);
        const userEmail = decodedToken.email;
        console.log(userEmail);
        await dispatch("getUsuariosModyo", userEmail);
        return userEmail;
    } catch (error) {
        console.error(error);
        console.log(error.response.data);
        commit("setIsAuthenticated", false);
        commit("setErrorLogin", true);

        if (error) {
            commit("setErrorMessage", error.response.data);
        } else {
            commit("setErrorMessage", "Error de conexión");
        }

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
    commit("setUsuario", {});
    commit("setToken", '');
    localStorage.removeItem('userToken');
    console.log("token borrado")
    console.log("Usuario deslogueado");
}

