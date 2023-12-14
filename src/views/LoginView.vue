<template>
    <div
        class="row justify-content-center align-items-center"
        style="height: 100vh"
    >
        <form-login @handle-submit="procesarLogin" :user="user" />
    </div>
</template>

<script>
import FormLogin from "@/components/users/FormLogin.vue";
import { mapActions, mapState } from "vuex";
export default {
    name: "LoginView",
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
        };
    },
    computed: {
        ...mapState("usuarios", ["isAuthenticated", "errorLogin"]),
    },
    methods: {
        ...mapActions("usuarios", ["login"]),
        async procesarLogin() {
            await this.login(this.user);
            console.log(this.isAuthenticated);
            if (this.errorLogin) {
                alert("Usuario y/o contraseña inválida");
            } else if (this.isAuthenticated) {
                this.$router.push({ name: "tareas" });
            }
        },
    },
    components: {
        FormLogin,
    },
};
</script>
