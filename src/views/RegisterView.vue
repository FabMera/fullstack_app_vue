<template>
    <div
        class="row justify-content-center align-items-center"
        style="height: 100vh"
    >
        <form-register
            :errorRegister="errorRegister"
            @handle-register="procesarRegistro"
            :user="user"
           
        />
    </div>
</template>

<script>
import { register } from "@/api/api.service.js";
import FormRegister from "@/components/users/FormRegister.vue";
export default {
    name: "RegisterView",
    components: {
        FormRegister,
    },
    data() {
        return {
            user: {
                username: "",
                email: "",
                password: "",
            },
            errorRegister: null,
        };
    },
    methods: {
        async procesarRegistro() {
            try {
                if(this.user.username === "" || this.user.email === "" || this.user.password === "") {
                    alert("Debe ingresar un username, un email y un password");
                    return;
                }
                const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                if (!emailRegex.test(this.user.email)) {
                    alert("Debe ingresar un email válido");
                    return;
                }
                const data = await register(this.user);
                console.log(data);
                alert("Usuario registrado correctamente");
                this.$router.push({ name: "login" });
            } catch (error) {
                console.log(error);
                if (error) {
                    this.errorRegister = error;
                } else {
                    this.errorRegister = "Error al registrar usuario";
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
