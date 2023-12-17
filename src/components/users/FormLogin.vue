<template>
    <form @submit.prevent="handleSubmit" class="form">
        <div class="title">Bienvenido</div>
        <div class="subtitle">Puedes iniciar sesión!</div>

        <div class="input-container ic1">
            <input
                v-model="user.email"
                placeholder="Ingresa tu em@il"
                type="text"
                class="input"
                id="email"
            />
            <div class="cut cut-short"></div>
            <label class="iLabel" for="email">Email</label>
        </div>
        <div class="input-container ic2">
            <input
                v-model="user.password"
                placeholder="Ingresa tu password"
                :type="showPassword ? 'text' : 'password'"
                class="input"
                id="password"
            />
            <div class="icon-container">
                <i class="fa-solid fa-lock icon"></i>
                <i
                    :class="eyeIconClass"
                    @click="showPassword = !showPassword"
                ></i>
            </div>
            <div class="cut"></div>
            <label class="iLabel" for="password">Password</label>
        </div>
        <button class="submit" type="submit">Enviar</button>
        <p v-if="errorLogin" class="text-danger mt-3 text-center custom-error">
            <i class="fa-solid fa-circle-exclamation"></i>
            {{ errorMessage }}
        </p>
        <p class="register-prompt">
            ¿No tienes una cuenta?
            <router-link to="/register">Regístrate aquí</router-link>
        </p>
    </form>
</template>

<script>
import router from "@/router";
import { mapState } from "vuex";
export default {
    name: "FormLogin",
    data() {
        return {
            showPassword: false,
        };
    },
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapState("usuarios", ["errorLogin", "errorMessage"]),
        eyeIconClass() {
            return this.showPassword
                ? "fa-solid fa-eye-slash icon"
                : "fa-solid fa-eye icon";
        },
    },
    methods: {
        handleSubmit() {
            this.$emit("handle-submit");
        },
    },
    components: { router },
};
</script>

<style lang="css" scoped>
.form {
    position: relative;
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: 550px;
    padding: 20px;
    width: 320px;
}

.title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
}

.subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
}

.input-container {
    position: relative;
    height: 50px;
    position: relative;
    width: 100%;
}
.icon-container {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
.icon {
    margin-left: 5px;
    cursor: pointer;
    color: #706d6d;
}

.ic1 {
    margin-top: 40px;
    margin-bottom: 50px;
}

.ic2 {
    margin-top: 30px;
}

.input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
}

.iLabel {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 10px;
}

.input:focus ~ .cut {
    transform: translateY(8px);
}

.input:focus ~ .iLabel {
    transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:focus) ~ .iLabel {
    color: #808097;
}

.input:focus ~ .iLabel {
    color: #0af;
}
.input:not(:focus):valid ~ .iLabel {
    transform: translateY(-30px) translateX(10px) scale(0.75);
}

.submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 50px;
    text-align: center;
    width: 100%;
}
.submit:hover {
    background-color: #0af;
}
.input:focus {
    background-color: #303245;
    border-radius: 12px;
    border: 2px solid #0af;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
}

.custom-error {
    font-size: 0.75rem;
}

.register-prompt {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 14px;
    color: rgb(165, 163, 163);
}
.register-prompt a {
    color: #3498db;
    text-decoration: none;
}
</style>
