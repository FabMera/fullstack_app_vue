
import { clienteSpring } from "@/api/cliente_axios";

export const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export async function loginUser(credentials) {
    const response = await clienteSpring.post('/users/login', credentials);
    const userToken = response.data.token;
    localStorage.setItem('token', userToken);
    return userToken;
}

export function decodeUserToken(userToken) {
    const base64Url = userToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const decodedToken = JSON.parse(jsonPayload);
    const usuarioLogueado = {
        userEmail: decodedToken.email,
        userRol: decodedToken.rol,
        userUsername: decodedToken.username
    };
    localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));
    return usuarioLogueado;
}

export function handleLoginError(commit, error) {
    console.error(error);
    console.log(error.response.data);
    commit("setIsAuthenticated", false);
    commit("setErrorLogin", true);

    if (error) {
        commit("setErrorMessage", error.response.data);
    } else {
        commit("setErrorMessage", "Error de conexión");
    }
}

export function endLogin(commit) {
    setTimeout(() => {
        commit('setLoading', false);
    }, 2000);
    console.log("Petición login finalizada");
}
