<template>
    <nav class="navbar">
        <div class="menu-icon" @click="toggleMenu">
            <i class="fa-solid fa-bars"></i>
        </div>

        <ul :class="{ 'show-menu': showMenu }" class="nav justify-content-end">
            <li class="nav-item">
                <router-link class="nav-link" to="/"
                    ><i class="fa-solid fa-house"></i>Home</router-link
                >
            </li>
            <li class="nav-item">
                <a role="button" class="nav-link" @click="togglePerfil">
                    <i class="fa-solid fa-user"></i>Mi Perfil
                </a>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/tareas"
                    ><i class="fa-solid fa-briefcase"></i>Tareas</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/bitacora"
                    ><i class="fa-solid fa-clipboard-check"></i
                    >Bitacora</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/" @click="logoutSession">
                    <i class="fa fa-sign-out-alt"></i>Logout</router-link
                >
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
    name: "NavBar",
    data() {
        return {
            showMenu: false,
        };
    },
    computed: {
        ...mapState("usuarios", ["isAuthenticated"]),
    },
    methods: {
        ...mapActions("usuarios", ["logout"]),
        ...mapMutations("usuarios", ["togglePerfil"]),
        logoutSession() {
            this.logout();
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
    },
};
</script>

<style lang="css" scoped>
.nav-link {
    transition: color 0.5s ease, border-bottom 0.5s ease;
    margin: 5px;
    border-bottom: 3px solid transparent;
    display: inline-block;
    align-items: center;
}
.nav-link i {
    margin-right: 5px;
}

.nav-link:hover {
    color: rgb(98, 100, 204);
    border-bottom: 3px solid #474aa3;
}

.menu-icon {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 3rem;
    height: 2rem;
    cursor: pointer;
}

.menu-icon div {
    width: 2rem;
    height: 0.25rem;
    background: currentColor;
    border-radius: 5px;
}
.navbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 2rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    transition: height 0.5s ease-in-out;
}

@media (max-width: 992px) {
    .menu-icon {
        display: flex;
    }

    ul {
        height: 0;
        display: none;
        overflow: hidden;
    }

    ul.show-menu {
        height: auto;
        display: block;
        position: relative;
        max-height: 500px;
    }
    .navbar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0%;
    }
}
</style>
