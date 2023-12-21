<template>
    <aside class="perfil-aside">
        <div class="d-flex justify-content-end mb-3">
            <i
                @click="cerrarPerfil"
                class="fa-solid fa-circle-xmark close-icon"
            ></i>
        </div>

        <div v-if="usuario && usuario.fields" class="card mb-3">
            <div class="row justify-content-center">
                <div class="image-container mt-2">
                    <img class="rounded" :src="usuario.fields.perfil" alt="" />
                </div>
                <div class="card-body">
                    <p class="card-title">
                        <span class="fw-bold">Nombre :</span>
                        {{ usuario.fields.nombre }}
                    </p>
                    <hr />
                    <p class="card-text">
                        <span class="fw-bold"> Cargo : </span>
                        {{ usuario.fields.categoria }}
                    </p>
                    <hr />
                    <p class="card-text">
                        <span class="fw-bold">Email :</span>
                        {{ usuario.fields.email }}
                    </p>
                </div>
            </div>
        </div>
        <div v-else class="card-no-encontrado">
            <p class="usuario-no-encontrado">No existen datos para mostrar!</p>
        </div>
    </aside>
</template>

<script>
export default {
    name: "UserPerfil",
    props: {
        usuario: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        cerrarPerfil() {
            this.$emit("close", this.cerrarPerfil);
        },
    },
};
</script>

<style lang="css" scoped>
.perfil-aside {
    position: fixed;
    right: 0;
    top: 10%;
    width: 350px;
    height: 100vh;
    overflow: auto;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 20000;
  
}
@media (max-width: 768px) {
    .perfil-aside {
        position: fixed;
        top: 50%;
        right: 0;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        height: 490px;
        z-index: 1500;
        background-color: #fff;
        overflow: auto;
        padding: 20px;
        margin-top: 68px;
    }
}
.close-icon {
    font-size: 2em;
    color: rgb(78, 78, 201);
    cursor: pointer;
}

.image-container {
    align-items: center;
    height: 200px;
    width: 200px;
}
.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.usuario-no-encontrado {
    color: red;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
}

.card-no-encontrado {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    background-color: #f9f9f9;
}
</style>
