<template>
    <div id="app">
        <div v-if="loading" class="loading-modal">
            <Loading />
        </div>
        <Navbar v-if="$route.meta.showNavbar" />
        <router-view />
    </div>
</template>
<script>
import { mapState } from "vuex";
import Loading from "./components/Loading.vue";
import Navbar from "./components/NavBar.vue";

export default {
    name: "App",
    components: {
        Loading,
        Navbar,
    },

    computed: {
        ...mapState("usuarios", ["loading"]),
    },
    data() {
        return {};
    },
};
</script>

<style lang="css">
.loading-modal {
    position: fixed; /* Posiciona el elemento de manera absoluta respecto a la ventana */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Asegura que el overlay esté por encima de otros elementos */
}
</style>
