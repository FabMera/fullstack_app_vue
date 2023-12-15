<template>
    <nav class="mb-2">
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <router-link class="nav-link" to="/"
                    ><i class="fa-solid fa-house mx-2"></i>Home</router-link
                >
            </li>
            <li class="nav-item">
                <a role='button' class="nav-link " @click="togglePerfil">
                    <i class="fa-solid fa-user mx-2"></i>Mi Perfil
                </a>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/tareas"
                    ><i class="fa-solid fa-briefcase mx-2"></i
                    >Tareas</router-link
                >
            </li>
            <a class="nav-link mx-2" href="#" @click="logoutSession">
                <i class="fa fa-sign-out-alt mx-2"></i>Logout</a
            >
        </ul>
    </nav>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
    name: "NavBar",
    computed: {
        ...mapState("usuarios", ["isAuthenticated"]),
    },
    methods: {
        ...mapActions("usuarios", ["logout"]),
        ...mapMutations("usuarios", ["togglePerfil"]),
        logoutSession() {
            this.logout();
            this.$router.push("/");
        },
    },
};
</script>

<style lang="css" scoped>
.nav-link {
    transition: color 0.3s ease, border-bottom 0.2s ease;
    margin: 5px;
}

.nav-link:hover {
    color: rgb(78, 80, 200);
    border-bottom: 3px solid #474aa3;
}
</style>
