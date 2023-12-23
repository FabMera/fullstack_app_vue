<template>
    <div id="app" @close="closePerfil" >
        <div v-if="loading" class="loading-modal">
            <Loading />
        </div>
        <div class="modal-background" v-if="showPerfil">
            <user-perfil :usuario="usuario" @close="closePerfil" />
        </div>

        <Navbar v-if="$route.meta.showNavbar" :class ="{'show-perfil':showPerfil}" />
        <router-view />
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import Loading from "./components/Loading.vue";
import Navbar from "./components/NavBar.vue";
import UserPerfil from "./components/users/UserPerfil.vue";

export default {
    name: "App",
    components: {
        Loading,
        Navbar,
        UserPerfil,
    },
    methods: {
        ...mapMutations("usuarios", ["setShowPerfil"]),
        closePerfil() {
            this.setShowPerfil(false);
        },
    },

    computed: {
        ...mapGetters("usuarios", ["getUsuario"]),
        ...mapState("usuarios", ["loading", "showPerfil"]),
        usuario() {
            return this.getUsuario;
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="css">

@media (min-width: 768px) {
  .navbar.show-perfil {
    justify-content: start; /* Desplaza el navbar al principio */
  }
}
.loading-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hwb(0 0% 100% / 0.171);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
